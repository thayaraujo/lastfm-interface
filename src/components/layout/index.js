import React from 'react';
import * as S from './styled';
import Header from '../header';
import useLastfm from '../../hooks/lastfm-hooks';

const Layout = ({ children }) => {
    
    const { lastfmState } = useLastfm();

    return (
        <S.WrapperLayout>
            <Header />
            {lastfmState.loading ? <p>Loading</p> : <>{children}</>}
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;