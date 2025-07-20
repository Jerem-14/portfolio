import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import '../styles/variables.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-heading'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Jeremy Aubry - Développeur Full Stack',
  description: 'Portfolio de Jeremy Aubry, développeur full-stack spécialisé en React, Angular, Symfony et Node.js',
  keywords: 'développeur, full-stack, React, Angular, Symfony, Node.js, Lyon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}