#!/usr/bin/env bash
# ============================================================
# Despliegue del portfolio personal (SPA React + Vite servida por nginx).
#
# Uso:
#   sudo -u deploy bash deploy/deploy.sh                 # origin/dev
#   sudo -u deploy bash deploy/deploy.sh origin/dev      # ref explícito
#   sudo -u deploy bash deploy/deploy.sh origin/master   # ref explícito
#
# La rama local se deduce del ref objetivo (origin/dev -> dev).
#
# Lo usa el auto-despliegue por sondeo (jcti-autodeploy) y el operador.
# El checkout debe ser del usuario `deploy`: `root` no tiene la deploy key.
# ============================================================
set -Eeuo pipefail

ROOT="${DEPLOY_PATH:-/home/deploy/portfolio}"
TARGET="${1:-origin/${DEPLOY_BRANCH:-dev}}"

# origin/dev -> dev ; origin/master -> master ; un SHA deja DEPLOY_BRANCH.
case "$TARGET" in
  origin/*) BRANCH="${TARGET#origin/}" ;;
  *)        BRANCH="${DEPLOY_BRANCH:-dev}" ;;
esac
COMPOSE=(docker compose -f "$ROOT/docker-compose.yml")

log() { printf '[portfolio-deploy] %s\n' "$*"; }
die() { printf '[portfolio-deploy] ERROR: %s\n' "$*" >&2; exit 1; }

cd "$ROOT" 2>/dev/null || die "No existe DEPLOY_PATH=$ROOT"
[[ -f docker-compose.yml ]] || die "Falta docker-compose.yml en $ROOT"
[[ -f Frontend/Dockerfile ]] || die "Falta Frontend/Dockerfile en $ROOT"
command -v git    >/dev/null || die "git no está instalado"
command -v docker >/dev/null || die "docker no está instalado"
docker info >/dev/null 2>&1 || die "Docker no responde (revisa systemctl status docker)"

git_here() {
  git -c safe.directory="$ROOT" -c core.hooksPath=/nonexistent -C "$ROOT" "$@"
}

wait_healthy() {
  local name="$1" tries="${2:-24}" state=unknown
  for _ in $(seq 1 "$tries"); do
    state="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$name" 2>/dev/null || echo missing)"
    [[ "$state" == "healthy" ]] && return 0
    sleep 5
  done
  die "$name no llegó a healthy (último estado: $state)"
}

log "Repositorio: $ROOT"
log "Objetivo   : $TARGET"

git_here fetch --prune origin "+refs/heads/$BRANCH:refs/remotes/origin/$BRANCH"
git_here rev-parse --verify --quiet "$TARGET^{commit}" >/dev/null \
  || die "El ref '$TARGET' no existe tras el fetch"

git_here checkout -f -B "$BRANCH" "$TARGET"
COMMIT="$(git_here rev-parse --short=12 HEAD)"
log "Checkout en $BRANCH: $COMMIT — $(git_here log -1 --pretty=%s)"

"${COMPOSE[@]}" build frontend
"${COMPOSE[@]}" up -d --force-recreate frontend
wait_healthy portfolio_frontend 24

log "Despliegue completado: $COMMIT"
