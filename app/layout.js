import './globals.css';
import { Poppins } from 'next/font/google';
import Navigation from './components/Navigation';

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

export const metadata = {
  title: 'Shuaibu Abdulkadir',
  description: 'My personal portfolio description',
  charset: 'UTF-8',
  author: 'shuaibu abdulkadir hussain',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* suppressHydrationWarning={true} */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
