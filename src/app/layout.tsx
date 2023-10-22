import Link from "next/link"
import "./Global.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Fishtank Select',
    route: 'fishtank'
  }
];

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              {links.map(({label, route}) => (
                <li key ={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      
      </body>
    </html>
  )
}
