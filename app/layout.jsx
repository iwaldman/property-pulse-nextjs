import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Property Pulse',
  keywords: 'real estate, property, home, house, apartment, rent, buy, sell',
  description: 'Property Pulse is a real estate platform that helps you find the perfect home.',
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
