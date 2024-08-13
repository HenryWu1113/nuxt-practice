import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect } from 'vitest'
import { ClientOnly } from '#components'

it('can mount some component', async () => {
    const component = await mountSuspended(ClientOnly)
    expect(component.text()).toMatchInlineSnapshot(`""`)
})
