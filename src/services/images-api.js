import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '16825213-7fb8f93f8fb61dc742d5122ac';

const fetchImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default { fetchImages };
