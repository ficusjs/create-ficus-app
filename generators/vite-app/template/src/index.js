import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/uhtml'

createCustomElement('hello-world', {
  renderer,
  render () {
    return html`<h1>Hello world!</h1>`
  }
})
