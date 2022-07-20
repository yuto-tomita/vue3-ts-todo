import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { test, expect } from 'vitest'

test('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'hello'
    }
  })

  expect(wrapper.text()).toContain('hello')
})