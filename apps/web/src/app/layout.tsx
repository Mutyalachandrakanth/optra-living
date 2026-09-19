import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Optra Living — Premium Property Management in Hyderabad',
  description:
    'Optra Living provides professional property letting and management services in Hyderabad. Verified tenants, transparent rent tracking, hassle-free maintenance — all in one platform.',
  keywords: [
    'property management Hyderabad',
    'rental management',
    'letting agent Hyderabad',
    'NRI property management',
    'tenant finding',
    'rent collection',
    'property maintenance Hyderabad',
  ],
  openGraph: {
    title: 'Optra Living — Premium Property Management in Hyderabad',
    description: 'Professional property letting & management. Verified tenants, transparent tracking, zero hassle.',
    url: 'https://optraliving.com',
    siteName: 'Optra Living',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
