import {renderThumbnails } from './thumbnails.js';
import { getPhotos } from './data.js';
import { COUNT_PHOTOS } from './consts.js';
export const pictures = getPhotos(COUNT_PHOTOS);

renderThumbnails(pictures);
