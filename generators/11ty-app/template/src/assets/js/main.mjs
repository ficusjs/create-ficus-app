import { createComponent, html, renderer } from './util/ficus.mjs'
import { createFooterComponent } from './components/footer.mjs'
import { createHeaderComponent } from './components/header.mjs'

createFooterComponent({ createComponent, html, renderer })
createHeaderComponent({ createComponent, html, renderer })
