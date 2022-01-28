import { useContext } from "react";
import { LastfmContext } from "../providers/lastfm-provider";

const useLastfm = () => {
    const { lastfmState, getUser, getUserArtists, getUserAlbums, getLovedTracks } = useContext(
        LastfmContext
    );

    return { lastfmState, getUser, getUserArtists, getUserAlbums, getLovedTracks };
};

export default useLastfm;