export const metadata = {
  title: "Domain for Sale",
  description: "Domain vweb.com.au is for sale. Expires on 28 Feb 2027 with a renewal cost of $21.77 per year. Estimated market value is $4,403 USD, asking price $4,500 USD (negotiable). Contact owner Happy Sharma at +61 450 388 000.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
