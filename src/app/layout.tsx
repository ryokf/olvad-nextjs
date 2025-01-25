import "./globals.css";
import Navbar from '../components/Navbar';
import { poppins } from "@/theme/font";

// export const metadata: Metadata = {
//   title: "Olvad",
//   description: "Bakery website",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="darks">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
