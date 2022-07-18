import { Dispatch } from 'react';
import { TrackAction, TrackActionTypes } from 'src/types/track';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/tracks`);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'An error occurred while loading tracks',
      });
    }
  };
};
