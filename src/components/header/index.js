import React, { useState } from 'react';
import * as S from './styled';
import useLastfm from '../../hooks/lastfm-hooks';

const Header = () => {

    const { getUser } = useLastfm();
    const [searchUsername, setSearchUsername] = useState();

    const submitGetUser = () => {
        if (!searchUsername) return;
        return getUser(searchUsername);
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder='Digite o username para pesquisa'
                    onChange={(e) => setSearchUsername(e.target.value)}
                />
                <button type="submit"
                    onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;