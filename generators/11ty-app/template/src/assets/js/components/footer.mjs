export function createFooterComponent ({ createComponent, html, renderer }) {
  createComponent('main-footer', {
    renderer,
    render () {
      return html`
        <footer class="text-center">
          <p>FicusJS 11ty App</p>
        </footer>
      `
    }
  })
}
