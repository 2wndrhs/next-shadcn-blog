import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'joonggon.me',
  description: 'Frontend Engineer',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='kr'
      className='scroll-pt-[10%] scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-foreground/20 scrollbar-w-2 scrollbar-h-4'
      suppressHydrationWarning
    >
      <body
        className={`relative flex min-h-screen w-full flex-col ${geistSans.variable} ${geistMono.variable} ${pretendard.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <div className='py-16 pl-safe-left pr-safe-right'>
            <div className='mx-auto w-full max-w-page'>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-[auto_640px_auto] lg:grid-cols-[192px_640px_192px]'>
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
