import "@/app/_styles/globals.css"
import Header from "@/app/_components/Header";
import Navigation from "@/app/_components/Navigation";
import {Josefin_Sans}   from "next/font/google";

const josefin = Josefin_Sans({
    subsets:["latin"],
    display:"swap"
});

export const metadata = {
  title: {
      template:"%s /The Wild Oasis",
      default:'Welcome / The Wild Oasis'
  },
  description: 'Luxurious cabin hotel, located in the heart f the Italian Dolomites, surrounded by beautiful mountains and dark forests',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-gray-100 min-h-screen`}>
      <Header />
      <Navigation />
      <div>
      <main>
          {children}
      </main>
      </div>
      </body>
    </html>
  )
}
