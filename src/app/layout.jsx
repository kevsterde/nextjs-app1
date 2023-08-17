import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvder } from './context/ThemeContext'
import {SessionProvider} from 'next-auth/react'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: '400',
  preload: false,
})

export const metadata = {
  title: 'Next JS Practice',
  description: 'Description Sample jhahaha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <ThemeProvder>
          <AuthProvider>

          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvder>
      </body>
    </html>
  )
}
