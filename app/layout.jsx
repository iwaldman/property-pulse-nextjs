import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProviders'

export const metadata = {
  title: 'Property Pulse',
  keywords: 'real estate, property, home, house, apartment, rent, buy, sell',
  description: 'Property Pulse is a real estate platform that helps you find the perfect home.',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
