import Header from "./components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-6 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
