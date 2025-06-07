import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      className='scrollbar scrollbar-track-transparent scrollbar-thumb-foreground/20 scrollbar-w-2 scrollbar-h-4 scroll-smooth'
      suppressHydrationWarning
    >
      <body
        className={`relative min-h-screen w-full ${geistSans.variable} ${geistMono.variable} ${pretendard.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <div className='pl-safe-left pr-safe-right py-16'>
            <div className='mx-auto w-full max-w-screen-xl'>
              <div className='flex flex-col gap-6 md:grid md:grid-cols-[1fr_640px_1fr]'>
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
