export function createFooterComponent ({ createComponent, html, renderer }) {
  createComponent('main-footer', {
    renderer,
    render () {
      return html`
        <footer>
          <p>Learn more about the awesome combination of <a href="https://docs.ficusjs.org">FicusJS</a> and <a href="https://rocket.modern-web.dev/">Rocket</a> for building web apps</p>
        </footer>
      `
    }
  })
}
