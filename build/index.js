import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { compression } from 'vite-plugin-compression2'
import { confightmlPlugin } from './html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { ElementPlusResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

export function createVitePlugins(isBuild) {
  const vitePlugins = [vue()]
  vitePlugins.push(
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/head'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true
      },
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/]
    })
  )
  // 自动导入组件样式
  vitePlugins.push(
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()]
    })
  )
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()]
    })
  )
  // 打包分析
  vitePlugins.push(visualizer())
  vitePlugins.push(confightmlPlugin(isBuild))
  vitePlugins.push(AutoImport({}))
  if (isBuild) {
    vitePlugins.push(compression())
  }
  return vitePlugins
}
