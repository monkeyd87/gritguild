import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Header from './components/Header'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GritGild',
  description: 'Created by Jackson',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
