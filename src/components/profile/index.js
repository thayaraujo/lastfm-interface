import React from "react";
import useLastfm from "../../hooks/lastfm-hooks";
import * as S from './styled';

const Profile = () => {
    const { lastfmState } = useLastfm()
    return (
        <S.Wrapper>
            <S.WrapperImage src={lastfmState.user.avatar}
            alt= "User's avatar" />

            <S.WrapperInfoUser>
                <div>
                    <h1>{lastfmState.user.name}</h1>

                    <S.WrapperUsername>
                        <h3>Username: </h3>
                        <a href={lastfmState.user.html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        >
                        {lastfmState.user.login}
                        </a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{lastfmState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{lastfmState.user.following}</span>
                    </div>
                    <div>
                        <h4>Loved Tracks</h4>
                        <span>{lastfmState.user.lovedTracks}</span>
                    </div>
                    <div>
                        <h4>Playlists</h4>
                        <span>{lastfmState.user.playlists}</span>
                    </div>
                    <div>
                        <h4>Top Artists</h4>
                        <span>{lastfmState.user.topArtists}</span>
                    </div>
                    <div>
                        <h4>Top Albums</h4>
                        <span>{lastfmState.user.topAlbums}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
};

export default Profile;