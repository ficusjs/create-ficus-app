export function createHeaderComponent ({ createComponent, html, renderer }) {
  createComponent('main-header', {
    renderer,
    render () {
      return html`
        <header class="text-center">
          <h1>FicusJS 11ty App</h1>
        </header>
      `
    }
  })
}
