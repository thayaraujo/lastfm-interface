import React from 'react';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import LastfmProvider from './providers/lastfm-provider';

const Providers = () => {
    return (
        <main>
            <LastfmProvider>
                <ResetCSS />
                <App />
            </LastfmProvider>
        </main>
    );
};

export default Providers;