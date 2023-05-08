export const metadata = {
  title: 'Teacher Salary',
  description: 'Find the salary of almost any teacher in British Columbia!',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <link rel="icon" href="/favicon.ico" />
    </html>
  )
}
