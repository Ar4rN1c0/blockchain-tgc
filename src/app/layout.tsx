import "./Global.css"
import Header from "@/components/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{padding: "0", margin: "0", backgroundColor: "aliceblue"}}>
        <Header></Header>
        <main>
          {children}
        </main>
      
      </body>
    </html>
  )
}
