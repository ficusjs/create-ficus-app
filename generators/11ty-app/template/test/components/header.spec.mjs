import test from 'ava'
import { init, render } from '@ficusjs/testing'

test.before(init)

test('render header component', async t => {
  const comp = await render(
    'main-header',
    () => Promise.all([
      import('../helpers/ficus.mjs'),
      import('../../src/assets/js/components/header.mjs')
    ])
      .then(([
        { createComponent, html, renderer },
        { createHeaderComponent }
      ]) => createHeaderComponent({ createComponent, html, renderer }))
  )
  t.is(comp.querySelector('img').getAttribute('src'), 'assets/img/ficus-logo-white.svg')
})
