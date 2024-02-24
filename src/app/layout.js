import { Poppins } from 'next/font/google'
import './globals.css'
import AuthContext from './context/AuthContext'
import ToastContext from './context/ToastContext'
import getSession from './actions/getSession'
import SideBar from './components/SideBar'

const poppins = Poppins({ subsets: ['latin'], weight: "400", display: "swap" })

export const metadata= {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContext>
          <ToastContext/>
            <div className='flex'>
              {
                session && 
                <div className='w-[30%]'>
                  <SideBar user={session.user}/>
                </div>
              }
              <div className='w-full'>
                {children}
              </div>
            </div>
        </AuthContext>
      </body>
    </html>
  )
}
