import axios from "axios";


const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

// whatever request we make, we want to start with base_url that'swhy we extracted in a new string and not as a url in options object.
// Example: /baseUrl/getChannel

// This is the function that will allow us to call the API,pass a dynamic url and then call it from within any component in our application
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}