import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { ArrowUpRightIcon, CheckIcon, CloseIcon } from '@/components/icons'
import { contactItems, type ExpertiseItem } from '@/pages/Home/sources'

type ServiceModalProps = {
  service: ExpertiseItem
  onClose: () => void
}

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  const { Icon, title, detail } = service
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const whatsapp = contactItems.find(({ key }) => key === 'whatsapp')

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-intro"
        ref={dialogRef}
      >
        <div className="modal-header">
          <span className="modal-icon">
            <Icon />
          </span>
          <button
            type="button"
            className="modal-close"
            aria-label="Cerrar"
            onClick={onClose}
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </div>

        <h3 className="modal-title" id="service-modal-title">
          {title}
        </h3>
        <p className="modal-intro" id="service-modal-intro">
          {detail.intro}
        </p>

        <p className="modal-label">Qué incluye</p>
        <ul className="modal-list">
          {detail.includes.map((item) => (
            <li key={item}>
              <CheckIcon className="modal-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="modal-outcome">{detail.outcome}</p>

        <div className="modal-actions">
          {whatsapp && (
            <a
              className="button button--primary"
              href={whatsapp.url}
              target="_blank"
              rel="noreferrer noopener"
              onClick={onClose}
            >
              Hablemos de tu proyecto
              <ArrowUpRightIcon className="button-icon" />
            </a>
          )}
          <button type="button" className="button button--ghost" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
