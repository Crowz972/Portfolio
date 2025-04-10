import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const className = binding.value || 'fade-bottom'

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 },
    )

    el.classList.add('opacity-0', 'transition-opacity', 'duration-700')
    observer.observe(el)
  },
}
