export function createFooterComponent ({ createComponent, html, renderer }) {
  createComponent('main-footer', {
    renderer,
    render () {
      return html`
        <footer class="text-center">
          <p>Learn more about the awesome combination of <a href="https://docs.ficusjs.org">FicusJS</a> and <a href="https://www.11ty.dev/">11ty</a> for building web apps</p>
        </footer>
      `
    }
  })
}
