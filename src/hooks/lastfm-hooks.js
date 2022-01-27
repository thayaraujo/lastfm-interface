import { useContext } from "react";
import { LastfmContext } from "../providers/lastfm-provider";

const useLastfm = () => {
    const { lastfmState, getUser, getUserImage, getUserArtists, getUserAlbums } = useContext(
        LastfmContext
    );

    return { lastfmState, getUser, getUserImage, getUserArtists, getUserAlbums };
};

export default useLastfm;