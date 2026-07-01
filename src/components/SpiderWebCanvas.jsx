import { useEffect, useRef } from 'react'

const INTRO_DURATION = 520
const TARGET_FPS = 30
const FRAME_INTERVAL = 1000 / TARGET_FPS

export default function SpiderWebCanvas() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const context = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarsePointer = window.matchMedia('(pointer: coarse)')
    let animationFrame = 0
    let startTime = 0
    let lastFrameTime = 0
    let isDocumentVisible = document.visibilityState === 'visible'
    let isInView = true
    let shouldAnimate = true
    let width = 0
    let height = 0
    let connectionDistance = 0
    let connectionDistanceSquared = 0
    let particleCount = 0
    let particleGlow = 8

    const updateAnimationState = () => {
      shouldAnimate = !prefersReducedMotion.matches && isDocumentVisible && isInView

      if (!shouldAnimate) {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame)
          animationFrame = 0
        }

        renderFrame(1, false)
        return
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const seedParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, (_, index) => ({
        x: ((index * 97) % width) + ((index * 29) % 17),
        y: ((index * 71) % height) + ((index * 11) % 13),
        originX: ((index * 97) % width) + ((index * 29) % 17),
        originY: ((index * 71) % height) + ((index * 11) % 13),
        vx: (((index * 7) % 9) - 4) * 0.18,
        vy: ((((index + 3) * 5) % 9) - 4) * 0.16,
        radius: index % 7 === 0 ? 2 : index % 3 === 0 ? 1.55 : 1.1,
        delay: (index / particleCount) * 0.12,
      }))
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      const deviceRatio = Math.min(window.devicePixelRatio || 1, coarsePointer.matches ? 1 : 1.5)

      width = rect.width
      height = rect.height
      particleCount = coarsePointer.matches ? 40 : width < 768 ? 52 : 72
      connectionDistance = width < 768 ? 120 : 150
      connectionDistanceSquared = connectionDistance * connectionDistance
      particleGlow = coarsePointer.matches ? 0 : 6

      canvas.width = Math.round(width * deviceRatio)
      canvas.height = Math.round(height * deviceRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0)

      seedParticles()
    }

    const drawParticles = (introProgress, animateParticles) => {
      if (animateParticles) {
        particlesRef.current.forEach((particle) => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < -10) {
            particle.x = width + 10
          } else if (particle.x > width + 10) {
            particle.x = -10
          }

          if (particle.y < -10) {
            particle.y = height + 10
          } else if (particle.y > height + 10) {
            particle.y = -10
          }
        })
      }

      for (let i = 0; i < particlesRef.current.length; i += 1) {
        const a = particlesRef.current[i]
        const aReveal = Math.max(0, Math.min(1, (introProgress - a.delay) / 0.18))

        for (let j = i + 1; j < particlesRef.current.length; j += 1) {
          const b = particlesRef.current[j]
          const bReveal = Math.max(0, Math.min(1, (introProgress - b.delay) / 0.18))
          const reveal = Math.min(aReveal, bReveal)

          if (reveal <= 0) {
            continue
          }

          const dx = a.x - b.x
          const dy = a.y - b.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < connectionDistanceSquared) {
            const distanceRatio = 1 - distanceSquared / connectionDistanceSquared

            context.beginPath()
            context.moveTo(
              a.originX + (a.x - a.originX) * aReveal,
              a.originY + 8 * (1 - aReveal) + (a.y - a.originY) * aReveal,
            )
            context.lineTo(
              b.originX + (b.x - b.originX) * bReveal,
              b.originY + 8 * (1 - bReveal) + (b.y - b.originY) * bReveal,
            )
            context.strokeStyle = `rgba(103, 191, 255, ${distanceRatio * 0.18 * reveal})`
            context.lineWidth = 0.8
            context.stroke()
          }
        }
      }

      context.shadowColor = 'rgba(122, 213, 255, 0.18)'
      context.shadowBlur = particleGlow

      particlesRef.current.forEach((particle) => {
        const reveal = Math.max(0, Math.min(1, (introProgress - particle.delay) / 0.18))

        if (reveal <= 0) {
          return
        }

        const x = particle.originX + (particle.x - particle.originX) * reveal
        const y = particle.originY + 8 * (1 - reveal) + (particle.y - particle.originY) * reveal

        context.beginPath()
        context.arc(x, y, particle.radius * (0.55 + reveal * 0.45), 0, Math.PI * 2)
        context.fillStyle = `rgba(122, 213, 255, ${0.28 + reveal * 0.68})`
        context.fill()
      })

      context.shadowBlur = 0
    }

    const renderFrame = (introProgress, animateParticles) => {
      context.clearRect(0, 0, width, height)
      drawParticles(introProgress, animateParticles)
    }

    const draw = (time) => {
      if (!startTime) {
        startTime = time
      }

      if (time - lastFrameTime < FRAME_INTERVAL) {
        animationFrame = window.requestAnimationFrame(draw)
        return
      }

      lastFrameTime = time

      const introProgress = Math.min(1, (time - startTime) / INTRO_DURATION)
      renderFrame(introProgress, true)

      animationFrame = window.requestAnimationFrame(draw)
    }

    const handleVisibilityChange = () => {
      isDocumentVisible = document.visibilityState === 'visible'
      updateAnimationState()
    }

    resize()
    renderFrame(1, false)
    updateAnimationState()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(wrap)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting
        updateAnimationState()
      },
      { threshold: 0.05 },
    )
    intersectionObserver.observe(wrap)

    prefersReducedMotion.addEventListener('change', updateAnimationState)
    coarsePointer.addEventListener('change', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      prefersReducedMotion.removeEventListener('change', updateAnimationState)
      coarsePointer.removeEventListener('change', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="hero-web" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
