 const YOUTUBE_API_KEY = "AIzaSyDBXGi9q1ewCO-IoMx4F5aRpPUEbvX06UM";
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_BY_KEYWORD_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key="+YOUTUBE_API_KEY
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&gl=IN&q=";
