import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Optra Living — Premium Property Management in Hyderabad",
  description:
    "Optra Living provides professional property letting and management services in Hyderabad. Verified tenants, transparent rent tracking, hassle-free maintenance — all in one platform.",
  keywords: [
    "property management Hyderabad",
    "rental management",
    "letting agent Hyderabad",
    "NRI property management",
    "tenant finding",
    "rent collection",
    "property maintenance Hyderabad",
  ],
  openGraph: {
    title: "Optra Living — Premium Property Management in Hyderabad",
    description:
      "Professional property letting & management. Verified tenants, transparent tracking, zero hassle.",
    url: "https://optraliving.com",
    siteName: "Optra Living",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
