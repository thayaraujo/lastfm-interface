import React, { useEffect, useState } from 'react';
import useLastfm from '../../hooks/lastfm-hooks';
import ArtistsItem from '../artists-item';
import * as S from './styled';

const Artists = () => {

    const { lastfmState, getUserArtists, getUserAlbums } = useLastfm();
    const [hasUserForSearchArtists, setHasUserForSearchArtists] = useState(false);
    const [hasUserForSearchAlbums, setHasUserForSearchAlbums] = useState(false);

    useEffect(() => {
        if (!!lastfmState.user.login) {
            getUserArtists();
        }
        setHasUserForSearchArtists(!!lastfmState.artists);
    }, [lastfmState.user.login]);

    return (
        <>
            {hasUserForSearchArtists ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected">
                    <S.WrapperTabList>
                        <S.WrapperTab>Artists</S.WrapperTab>
                        <S.WrapperTab>Albums</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        {lastfmState.artists.map((item) => (
                            <ArtistsItem
                                key={item.id}
                                name={item.name}
                                linkToItem={item.artists}
                                fullName={item.getTopArtists}
                            />
                        ))}
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        {lastfmState.albums.map((item) => (
                            <ArtistsItem
                                key={item.id}
                                name={item.name}
                                linkToItem={item.albums}
                                fullName={item.getTopAlbums}
                            />
                        ))}
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (<></>
            )}
        </>
    )
};

export default Artists;