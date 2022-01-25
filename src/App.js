import React from 'react';
import Artists from './components/artists';
import Layout from './components/layout';
import Profile from './components/profile';
import useLastfm from './hooks/lastfm-hooks';
import NoSearch from './components/no-search';

const App = () => {
  const { lastfmState } = useLastfm();
  return (
        <Layout>
          {lastfmState.hasUser ? (
          <>
          {lastfmState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Artists />
            </>
          )}
          </>
          ) : (
            <NoSearch />
          )}
        </Layout>
     
  );
};

export default App;
