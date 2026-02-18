import axios from "axios";

const API_KEY = '54664427-262e44dbf661b4ce462360251';
const URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
  const response = await axios(URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: 1,
      per_page: 15,
    }
  })
    return response.data;
}
