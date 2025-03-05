import { defineAppSetup, scrollTo } from 'valaxy'
import { nextTick } from 'vue'
// common
import 'valaxy/client/styles/common/code.scss'

export default defineAppSetup((ctx) => {
  const { router, isClient } = ctx
  if (!isClient)
    return

  router.afterEach((to, from) => {
    if (to.path !== from.path)
      return

    nextTick(() => {
      scrollTo(document.body, to.hash, {
        smooth: true,
      })
    })
  })
})