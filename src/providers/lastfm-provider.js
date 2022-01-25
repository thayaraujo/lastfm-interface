import React, { createContext, useState, useCallback } from 'react';
import api from '../services/api';

export const LastfmContext = createContext({
    loading: false,
    user: {},
    artists: [],
    albums: [],
});

const LastfmProvider = ({ children }) => {
    const [lastfmState, setLastfmState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            url: undefined,
            followers: 0,
            following: 0,
            topArtists: undefined,
            topAlbums: undefined,
            lovedTracks: 0,
            playlists: undefined,
        },
        artists: [],
        albums: [],
    });

    const getUser = (username) => {
        setLastfmState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`user/${username}`).then(({ data }) => {
            setLastfmState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    followers: data.followers,
                    following: data.following,
                    topArtists: data.topArtists,
                    topAlbums: data.topAlbums,
                    lovedTracks: data.lovedTracks,
                    playlists: data.playlists,
                },
            }));

        }).finally(() => {
            setLastfmState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        })
    }

    const getUserArtists = (username) => {
        api.get(`user/${username}/artists`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setLastfmState((prevState) => ({
            ...prevState,
            artists: data,
          }));
        });
      };
    
      const getUserAlbums = (username) => {
          api.get(`user/${username}/2.0/?method=user.gettopalbums&user=rj&api_key=affcb81955001a30878737181e4e7e35&format=json`)
        .then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setLastfmState((prevState) => ({
            ...prevState,
            albums: data,
          }));
        });
      };

    const contextValue = {
        lastfmState,
        getUser: useCallback((username) => getUser(username), []),
        getUserArtists: useCallback((username) => getUserArtists(username), []),
        getUserAlbums: useCallback((username) => getUserAlbums(username), []),
    }

    return (
        <LastfmContext.Provider value={contextValue}>
            {children}
        </LastfmContext.Provider>
    );
};

export default LastfmProvider;