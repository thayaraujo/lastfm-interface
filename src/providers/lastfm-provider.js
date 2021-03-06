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
            name: "thaynara",
            realname: 'thay',
            image: undefined,
            country: undefined,
            url: undefined,
            scrobbles: 0,
            lovedTracks: 0,
            playlists: 0,
        },
        artists: [],
        albums: []
    });

    const getUser = (username) => {
        setLastfmState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=affcb81955001a30878737181e4e7e35&format=json`)
            .then(({ data }) => {
                console.log("data: " + JSON.stringify(data));
                setLastfmState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        name: data.name,
                        realname: data.realname,
                        image: data.image,
                        country: data.country,
                        url: data.url,
                        scrobbles: data.playcount,
                        lovedTracks: data.lovedtracks,
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
        api.get(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=affcb81955001a30878737181e4e7e35&format=json`)
            .then(({ data }) => {
                console.log("data: " + JSON.stringify(data));
                setLastfmState((prevState) => ({
                    ...prevState,
                    artists: data.topartists,
                }));
            });
        console.log(getUserArtists, "get artistssss")
    };

    const getUserAlbums = (username) => {
        api.get(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=affcb81955001a30878737181e4e7e35&format=json`)
            .then(({ data }) => {
                console.log("data: " + JSON.stringify(data));
                setLastfmState((prevState) => ({
                    ...prevState,
                    albums: data.topalbums,
                }));
            });
    };


    const contextValue = {
        lastfmState,
        getUser: useCallback((username) => getUser(username), []),
        getUserArtists: useCallback((username) => getUserArtists(username), []),
        getUserAlbums: useCallback((username) => getUserAlbums(username), []),
    };

    return (
        <LastfmContext.Provider value={contextValue}>
            {children}
        </LastfmContext.Provider>
    );
};

export default LastfmProvider;