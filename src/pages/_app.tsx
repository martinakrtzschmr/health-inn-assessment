import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '../styles/GlobalStyle';

/* React Query */
// Create a client
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
