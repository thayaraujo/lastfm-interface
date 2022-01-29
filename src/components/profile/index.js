import React from "react";
import useLastfm from "../../hooks/lastfm-hooks";
import * as S from './styled';

const Profile = () => {
    const { lastfmState } = useLastfm()
    return (
        <S.Wrapper>
            <S.WrapperImage src={lastfmState.user.image}
                alt="User's avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{lastfmState.user.realname}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username: </h3>
                        <a href={lastfmState.user.name}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {lastfmState.user.name}
                        </a>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Country:</h3>
                        <span>{lastfmState.user.country}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Last.fm profile:</h3>
                        <span>{lastfmState.user.url}</span>
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Scrobbles</h4>
                        <span>{lastfmState.user.playcount}</span>
                    </div>
                    <div>
                        <h4>Loved Tracks</h4>
                        <span>{lastfmState.user.lovedTracks}</span>
                    </div>
                    <div>
                        <h4>Playlists</h4>
                        <span>{lastfmState.user.playlists}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
};

export default Profile;