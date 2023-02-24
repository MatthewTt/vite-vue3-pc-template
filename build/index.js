import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { compression } from 'vite-plugin-compression2'
import { confightmlPlugin } from './html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function createVitePlugins(isBuild) {
  const vitePlugins = [vue()]
  vitePlugins.push(AutoImport({
    resolvers: [ElementPlusResolver()]
  }))
  vitePlugins.push(Components({
    resolvers: [ElementPlusResolver()]
  }))
  // 打包分析
  vitePlugins.push(visualizer())
  vitePlugins.push(confightmlPlugin(isBuild))
  vitePlugins.push(AutoImport({
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/head']
  }))
  if (isBuild) {
    vitePlugins.push(compression())
  }
  return vitePlugins
}