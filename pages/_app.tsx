import type { AppProps } from 'next/app'
import "styles/globals.scss"
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter'
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
