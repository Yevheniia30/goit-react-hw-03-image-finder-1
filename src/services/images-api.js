import axios from 'axios';

const fetchImages = () => {
  return axios
    .get(
      `https://pixabay.com/api/?q=react&page=1&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

export default fetchImages;
