import { useEffect, useRef, useState } from "react"

export default function FadeIn({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  duration = 820,
  y = 12,
  once = true,
  threshold = 0.08,
  rootMargin = "0px 0px -8% 0px",
  style,
}) {
  const ref = useRef(null)
  const rafRef = useRef(0)

  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return undefined

    const node = ref.current
    if (!node) return undefined

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      setIsAnimating(false)
      return undefined
    }

    const show = () => {
      cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(true)
        setIsAnimating(true)
      })
    }

    const hide = () => {
      cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(false)
        setIsAnimating(true)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()

          if (once) {
            observer.unobserve(node)
          }
        } else if (!once) {
          hide()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [once, threshold, rootMargin])

  return (
    <Component
      ref={ref}
      className={className}
      onTransitionEnd={() => {
        if (isVisible) {
          setIsAnimating(false)
        }
      }}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${y}px, 0)`,
        filter: isVisible ? "blur(0px)" : "blur(0.2px)",
        transition: `
          opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform ${duration + 80}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          filter ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,
        willChange: isAnimating ? "opacity, transform, filter" : "auto",
        ...style,
      }}
    >
      {children}
    </Component>
  )
}