"use client"

import { useEffect, useRef } from "react"

interface MathComponentProps {
  children: string
}

export function MathComponent({ children }: MathComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // @ts-ignore
      if (window.MathJax) {
        // @ts-ignore
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, containerRef.current])
      }
    }
  }, [children])

  return (
    <div ref={containerRef} className="text-[#cccccc]">
      {"\\[" + children + "\\]"}
    </div>
  )
}

