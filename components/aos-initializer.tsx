'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      disable: 'mobile', // Disable on mobile for better performance
    })

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return null
}
