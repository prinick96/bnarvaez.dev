import { enableAutoUnmount } from '@vue/test-utils'
import { afterEach } from 'vitest'

enableAutoUnmount(afterEach)
afterEach(() => {
  globalThis.document.body.replaceChildren()
  globalThis.history.replaceState(null, '', '/')
})
