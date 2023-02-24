import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import {createVitePlugins} from "./build";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default ({ command }) => {
    const isBuild = command === 'build'
    return defineConfig({
        plugins: createVitePlugins(isBuild),
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        esbuild: {
            pure: ['console.log', 'debugger']
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: (content, loaderContext) => {
                        if (
                            loaderContext.endsWith('assets/css/variables.scss') ||
                            loaderContext.endsWith('assets/css/mixin.scss') ||
                            loaderContext.endsWith('assets/css/index.scss')
                        ) {
                            return content
                        }

                        return `@import "@/assets/css/variables.scss";@import "@/assets/css/mixin.scss"; ${content}`
                    }
                }
            }
        }
    })
}
