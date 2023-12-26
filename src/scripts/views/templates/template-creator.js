import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <img class="resto-item__header__poster lazyload"
    data-src="${CONFIG.BASE_IMAGE_URL_M + resto.pictureId}"
    data-srcset="${CONFIG.BASE_IMAGE_URL_M + resto.pictureId}"
    alt="Image restaurant ${resto.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL_M + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="resto__overview">
    <h4>Description</h4>
    <p>${resto.description}</p>
    <h4>Menu Makanan</h4>
    <div class="resto__menu">
      ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </div>
    <h4>Menu Minuman</h4>
    <div class="resto__menu">
      ${resto.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
    </div>
    </div>
    <div class="resto__reviews">
      <h4>Review Customer</h4>
      ${resto.customerReviews.map((review) => `
      <div class="resto__customer">
        <h4>Nama: ${review.name}</h4>
        <p>Review: ${review.review}</p>
        <p>Tanggal Review: ${review.date}</p>
      </div >
      `).join('')}
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="favButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="favButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
