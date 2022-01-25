import { useContext  } from "react";
import { LastfmContext } from "../providers/lastfm-provider";

const useLastfm = () => {
    const { lastfmState, getUser, getUserArtists, getUserAlbums } = useContext( LastfmContext );

    return { lastfmState, getUser, getUserArtists, getUserAlbums };
};

export default useLastfm;