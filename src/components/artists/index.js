import React, { useEffect, useState } from 'react';
import useLastfm from '../../hooks/lastfm-hooks';
import ArtistsItem from '../artists-item';
import * as S from './styled';

const Artists = () => {
    const { lastfmState, getUserArtists, getUserAlbums} = useLastfm();
    const [hasUserForSearchArtists, setHasUserForSearchArtists] = useState(false);
    // const [hasUserForSearchAlbums, setHasUserForSearchAlbums] = useState(false);

    useEffect(() => {
        if (lastfmState.user.name) {
            getUserArtists(lastfmState.user.name);
            getUserAlbums(lastfmState.user.name);
        }
        setHasUserForSearchArtists(lastfmState.artists); 

    }, [lastfmState.user.name]);

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
                        <S.WrapperList>
                            {lastfmState.artists.map((item) => (
                                <ArtistsItem
                                    key={item.id}
                                    name={item.name}
                                    linkToItem={item.topartists}
                                    fullName={item.topartists}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {lastfmState.albums.map((item) => (
                                <ArtistsItem
                                    key={item.id}
                                    name={item.name}
                                    linkToItem={item.topalbums}
                                    fullName={item.topalbums} 
                                />
                            ))}
                            {console.log(lastfmState, 'alo')}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
            <></>
            )}
        </>
    );
};

export default Artists;