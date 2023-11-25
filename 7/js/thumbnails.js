const picturesContainer = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const similarFragment = document.createDocumentFragment();

export const generateThumbnails = (pictures) => {
  pictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = picturesContainer.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    similarFragment.appendChild(pictureElement);
  });
  picturesList.appendChild(similarFragment);
};
