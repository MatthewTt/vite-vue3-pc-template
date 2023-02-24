/**
 * 往index.html 注入内容
 */
import { createHtmlPlugin } from 'vite-plugin-html'

export function confightmlPlugin(isBuild) {
    return createHtmlPlugin({
        minify: !!isBuild,
        inject: {
            data: {
                title: '湖州代表大会'
            }
        }
    })
}
