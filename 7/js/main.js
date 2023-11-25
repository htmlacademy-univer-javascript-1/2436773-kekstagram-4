import {getPhotos} from './data.js';
import {generateThumbnails} from './thumbnails.js';

const photos = getPhotos;
generateThumbnails(photos);
