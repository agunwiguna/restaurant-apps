import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createSnackbarEmptyTextTemplate,
  createSnackbarSuccessTemplate,
} from '../templates/template-creator';

import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant" id="restaurant"></div>
        <div id="likeButtonContainer"></div>
        <div id="snackbarContainer"></div>
        <div class="loader"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const nameReview = document.querySelector('#name');
    const textReview = document.querySelector('#review');
    const btnSave = document.querySelector('#btn-save');

    const customerReview = document.createElement('div');
    const containerReview = document.querySelector('.restaurant-reviews');

    const snackbarContainer = document.querySelector('#snackbarContainer');
    const loader = document.querySelector('.loader');

    btnSave.addEventListener('click', (e) => {
      e.stopPropagation();

      if (nameReview.value == '' || textReview.value == '') {
        snackbarContainer.innerHTML = createSnackbarEmptyTextTemplate();
        const snackbar = document.getElementById('snackbar');
        snackbar.className = 'show';
        setTimeout(function () {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
      } else {
        RestaurantSource.storeReview({
          id: restaurant.id,
          name: nameReview.value,
          review: textReview.value,
        });

        customerReview.classList.add('customer-reviews');
        customerReview.innerHTML += `
              <img
                  src="https://ui-avatars.com/api/?name=${nameReview.value}"
                  alt="Avatar"
                  style="width: 90px"
              />
              <p id="name__review"><span>${nameReview.value}</span></p>
              <p>${new Date().toDateString()}</p>
              <p id="text__review">${textReview.value}</p>
      `;
        containerReview.appendChild(customerReview);

        nameReview.value = '';
        textReview.value = '';

        snackbarContainer.innerHTML = createSnackbarSuccessTemplate();
        const snackbar = document.getElementById('snackbar');
        snackbar.className = 'show';
        setTimeout(function () {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        address: restaurant.address,
        city: restaurant.city,
        menus: restaurant.menus,
        categories: restaurant.categories,
        customerReviews: restaurant.customerReviews,
      },
    });

    setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1000);
  },
};

export default Detail;
