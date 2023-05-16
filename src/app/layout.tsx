import Footer from '@/components/Footer'
import { Providers } from './providers'

export const metadata = {
  title: 'Teacher Salary',
  description: 'Find the salary of almost any teacher in British Columbia!'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <link
        rel='icon'
        href='/favicon.ico'
      />
      <body>
        <Providers>
          <div className='flex flex-col justify-between min-h-screen'>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
