import './globals.css';

export const metadata = {
  title: 'Clínica Endos',
  description: 'Entenda sobre endoscopia digestiva e colonoscopia, diagnósticas e terapêuticas.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </>
  );
}
