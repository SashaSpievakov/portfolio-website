import { Montserrat, Roboto } from 'next/font/google';

import './globals.css';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '500'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Sasha Spievakov — Frontend Developer',
  description: "Sasha Spievako's Portfolio",
  keywords: [
    'Sasha Spievakov',
    "Sasha Spievakov's Portfolio",
    'Sasha Spievakov - Frontend Developer',
    'Sasha Spievakov Frontend Developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className="font-roboto">
        {children}
        <Footer />
      </body>
    </html>
  );
}
