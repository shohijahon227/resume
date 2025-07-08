import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mirzo Ulug'bekning portfolio sahifasi",
  description:
    "Mirzo Ulug'bek haqida barcha ma'lumotlarni bu yerdan topishingiz mumkin. Barcha yangiliklar ilhomlandim.uz sahifasida",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body className="bg-body bg-no-repeat bg-cover h-full flex flex-col font-source-sans font-normal">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
