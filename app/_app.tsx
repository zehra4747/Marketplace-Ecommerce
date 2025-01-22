import { AppProps } from 'next/app';  // Import the AppProps type
import { CartProvider } from '@/CartContext'; // Adjust the import path accordingly

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
