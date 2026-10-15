import { useEffect, useRef } from 'react'

/**
 * Soft radial gradient that follows the pointer, just like the reference site.
 * The position is written straight to the DOM to avoid re-rendering on move.
 */
export const Spotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      const node = spotlightRef.current
      if (!node) {
        return
      }

      const { left, top } = node.getBoundingClientRect()
      const x = event.clientX - left
      const y = event.clientY - top

      node.style.background = `radial-gradient(600px circle at ${x}px ${y}px, var(--spotlight-color), transparent 80%)`
    }

    document.addEventListener('mousemove', handlePointerMove)

    return () => document.removeEventListener('mousemove', handlePointerMove)
  }, [])

  return <div ref={spotlightRef} className="spotlight" aria-hidden="true" />
}
