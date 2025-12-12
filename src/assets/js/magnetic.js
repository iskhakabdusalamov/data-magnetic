import { gsap } from 'gsap'

export async function addMagnetic() {
  if (window.innerWidth >= 768) {
    const buttons = document.querySelectorAll('[data-magnetic]')

    buttons.forEach((button) => {
      let boundingRect = button.getBoundingClientRect()

      const updateRect = () => {
        boundingRect = button.getBoundingClientRect()
      }

      window.addEventListener('resize', updateRect)
      window.addEventListener('scroll', updateRect)

      button.addEventListener('mousemove', (e) => {
        const mousePosX = e.clientX - boundingRect.left
        const mousePosY = e.clientY - boundingRect.top

        gsap.to(button, {
          x: (mousePosX - boundingRect.width / 2) * 0.4,
          y: (mousePosY - boundingRect.height / 2) * 0.4,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1,0.3)',
        })
      })
    })
  }
}
