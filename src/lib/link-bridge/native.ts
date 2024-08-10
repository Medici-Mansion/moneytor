import { bridge } from '@webview-bridge/react-native'

export const appBridge = bridge({
  async check() {
    return true
  },
  async pushNotification(request: unknown) {
    await new Promise((resolve) => resolve(true))
  },
})

// Export the bridge type to be used in the web application
export type AppBridge = typeof appBridge
