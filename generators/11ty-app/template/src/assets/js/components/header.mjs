export function createHeaderComponent ({ createComponent, html, renderer }) {
  createComponent('main-header', {
    renderer,
    render () {
      return html`
        <header class="text-center mt-3">
          <img src="assets/img/ficus-logo-white.svg" alt="FicusJS" width="300" height="67" />
        </header>
      `
    }
  })
}
