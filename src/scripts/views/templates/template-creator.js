import CONFIG from '../../globals/config';

const lengthDescription = (restaurant) => {
  if (restaurant.description.length > 250) {
    return `${restaurant.description.substring(0, 250)}...`;
  }
  return restaurant.description;
};

const foodRestaurant = (restaurant) => {
  return restaurant.menus.foods
    .map(
      (food) => `
    		<li>${food.name}</li>
    	`,
    )
    .join('');
};

const drinkRestaurant = (restaurant) => {
  return restaurant.menus.drinks
    .map(
      (drink) => `
    		<li>${drink.name}</li>
    	`,
    )
    .join('');
};

const reviewPelanggan = (restaurant) => {
  return restaurant.customerReviews
    .map(
      (rev) => `
        <div class="customer-reviews">
                <img
                    data-src="https://ui-avatars.com/api/?name=${rev.name}"
                    alt="Avatar"
                    class="lazyload"
                    style="width: 90px"
                />
                <p id="name__review"><span>${rev.name}</span></p>
                <p>${rev.date}</p>
                <p id="text__review">${rev.review}</p>
            </div>
		  `,
    )
    .join('');
};

const createRestaurantDetailTemplate = (restaurant) => {
  return `
        <h2 class="restaurant__title">${restaurant.name}</h2>
        <img
            class="restaurant__poster lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}"
            alt="Puss in Boots: The Last Wish"
        />
        <div class="restaurant__info">
            <h3>Informasi</h3>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Kota</h4>
            <p>${restaurant.city}</p>
            <h4>Alamat</h4>
            <p>${restaurant.address}</p>
        </div>
        <div class="restaurant__overview">
            <h3>Deskripsi</h3>
            <p class="restaurant__description">
                ${restaurant.description}
            </p>
            <h3>Menu Makanan</h3>
            <ul class="restaurant__menu">
                ${foodRestaurant(restaurant)}
            </ul>
            <h3>Menu Minuman</h3>
            <ul class="restaurant__menu">
                ${drinkRestaurant(restaurant)}
            </ul>
            <h3>Tambah review dulu yuk!</h3>
            <div class="customer-input__reviews">
              <form id="review__form">
                <label for="name">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Masukan Nama Kamu.."
                />

                <label for="review">Review</label>
                <input
                  type="text"
                  id="review"
                  name="review"
                  placeholder="Makananya lezat dan bergizi.."
                />
                <button type="button" class="btn-save" id="btn-save">
                  Simpan
                </button>
              </form>
            </div>
            <h3>Customer Reviews</h3>
            <div class="restaurant-reviews">
              ${reviewPelanggan(restaurant)}
            </div>
        </div>
    `;
};

const createRestaurantItemTemplate = (restaurant) => `
    <article
        class="product-item"
        data-aos="fade-up"
    >
        <div class="card" data-label="${restaurant.city}"></div>
        <picture>
        <source 
          media="(max-width: 600px)"
          class="lazyload" 
          data-srcset="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}"
        >
          <img
              class="product-item__thumbnail lazyload"
              data-src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}"
              alt="${restaurant.name}"
          />
        </picture>
        <div class="product-item__content">
            <p class="product-item__rating">
                Rating:
                <a href="#" class="product-item__rating__value">${
                  restaurant.rating
                }</a>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </p>
            <h1 class="product-item__title">
                <a href="/#/detail/${restaurant.id}" class="product-name">${
  restaurant.name
}</a>
            </h1>
            <p class="product-item__description">
                ${lengthDescription(restaurant)}
            </p>
        </div>
    </article>
`;

const loaderTemplate = () => `
  <div id="loader"></div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

const createSnackbarEmptyTextTemplate = () => `
  <div id="snackbar">Nama dan reviewnya tidak boleh kosong ya..</div>
`;

const createSnackbarSuccessTemplate = () => `
  <div id="snackbar">Sukses! Review berhasil disimpan..</div>
`;

const emptyData = () => `
  <div class="empty__state">
    <img 
      data-src="./images/no-favorite.svg" alt="Empty Data" 
      class="img__no__favorite lazyload" 
    />
    <h3>No Favorites Yet!</h3>
    <p>
      Click the 'love' action button on any detail page to add a
      restaurant favorite.
    </p>
    <a href="#/">Back to homepage</a>
  </div>
`;

const notFoundData = () => `
  <div class="empty__state">
    <img 
      data-src="./images/not-found.svg" 
      alt="Not Found" 
      class="img__no__favorite lazyload" 
    />
    <h3>Error!</h3>
    <p>
      The Datas can't load, please <a href="https://github.com/agunwiguna" target="_blank" rel="noreferrer">contact us </a>
    </p>
    <a href="#/">Reload</a>
  </div>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  loaderTemplate,
  createSnackbarEmptyTextTemplate,
  createSnackbarSuccessTemplate,
  emptyData,
  notFoundData,
};
