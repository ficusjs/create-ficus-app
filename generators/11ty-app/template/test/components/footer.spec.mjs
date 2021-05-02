import test from 'ava'
import { init, render } from '@ficusjs/testing'

test.before(init)

test('render footer component', async t => {
  const comp = await render(
    'main-footer',
    () => Promise.all([
      import('../helpers/ficus.mjs'),
      import('../../src/assets/js/components/footer.mjs')
    ])
      .then(([
        { createComponent, html, renderer },
        { createFooterComponent }
      ]) => createFooterComponent({ createComponent, html, renderer }))
  )
  t.is(comp.querySelector('p').textContent, 'Learn more about the awesome combination of FicusJS and 11ty for building web apps')
})
