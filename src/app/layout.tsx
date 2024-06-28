import { ThemeProvider } from "./theme-provider";
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClerkProvider>
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}