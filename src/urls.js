import { API_KEY } from "./constants/constants";

export const ORIGINALS_URL = `discover/tv?api_key=${API_KEY}&with_networks=213`;

export const ACTION_URL = `discover/movie?api_key=${API_KEY}&with_genres=28`;

export const TOP_RATED_URL = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

export const COMEDY_URL = `discover/movie?api_key=${API_KEY}&with_genres=35`;

export const ANIMATION_URL = `discover/movie?api_key=${API_KEY}&with_genres=16`