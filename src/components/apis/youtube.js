import axios from "axios";
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: YOUTUBE_SEARCH_API,
  params: {
    part: "snippet",
    maxResults: 3,
    key: KEY,
  },
});
