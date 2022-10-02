import { createComponent, html, renderer } from './util/ficus.js'
import { createFooterComponent } from '#components/footer.js'
import { createHeaderComponent } from '#components/header.js'
import './util/fonts.js'

createFooterComponent({ createComponent, html, renderer })
createHeaderComponent({ createComponent, html, renderer })
