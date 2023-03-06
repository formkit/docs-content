import { defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'

const multiStepPlugin = createMultiStepPlugin({
  tabStyle: 'progress',
  allowIncomplete: false,
})

export default defaultConfig({
  plugins: [multiStepPlugin],
})
