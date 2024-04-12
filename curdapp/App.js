// App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/AppNagivation';

// Create a query client for react-query
const queryClient = new QueryClient();
// Main application component
const App = () => (
    <QueryClientProvider client={queryClient}>
        <AppNavigator />
    </QueryClientProvider>
);

export default App;
