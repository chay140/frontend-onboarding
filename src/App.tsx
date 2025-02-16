import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://513d30c574c9e0a6c2c3e03bf38a7914@o4508829574627328.ingest.us.sentry.io/4508829577248768",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
