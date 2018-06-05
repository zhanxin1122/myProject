const createDiv = () => document.createElement('div')

const loading = {
  inserted (el) {
    if (el.getElementsByClassName('hdht-part-loading').length === 0) {
      const $shade = createDiv()
      $shade.setAttribute('class', 'hdht-part-loading')
      const $box = createDiv()
      $box.setAttribute('class', 'loading-box')
      const $outer = createDiv()
      $outer.setAttribute('class', 'outer')
      const $inner = createDiv()
      $inner.setAttribute('class', 'inner')
      $box.appendChild($outer)
      $box.appendChild($inner)
      $shade.appendChild($box)
      el.appendChild($shade)
    }
  },
  update (el, binding) {
    const $box = el.getElementsByClassName('hdht-part-loading')[0]
    if (!binding.value) {
      $box.style.opacity = '0'
      setTimeout(() => {
        $box.style.display = 'none'
      }, 500)
    } else {
      $box.style.display = 'block'
      $box.style.opacity = '1'
    }
  }
}

export default loading
