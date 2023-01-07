import { createCustomElement } from 'ficusjs'
import { html, renderer } from '@ficusjs/renderers'

createCustomElement('hello-world', {
  renderer,
  render () {
    return html`<h1>Hello world!</h1>`
  }
})
