import HeaderComponent from '@/components/HeaderComponent'
import './globals.css'


export const metadata = {
  title: 'Template portfolio',
  description: 'Free template portfolio created by Emmanuel Zenderock',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen w-full flex flex-col bg-neutral-50'>
        <aside className='h-[90%]'>
        {children}
        </aside>
        </body>
    </html>
  )
}
