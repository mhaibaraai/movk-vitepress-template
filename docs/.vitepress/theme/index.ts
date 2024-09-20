import { DemoPreviewContainer } from '@movk-repo/demo-preview-container'
import '@movk-repo/demo-preview-container/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }: EnhanceAppContext) {
    app.component('DemoPreview', DemoPreviewContainer)
  },
}
