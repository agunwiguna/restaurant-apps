import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  emptyData,
} from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <hero-header></hero-header>
      <section class="content">
        <div class="main">
          <h2 class="main__label">Favorite Restaurant</h2>
          <div class="products" id="restaurant-list"></div>
          <div class="loader"></div>
          <div class="empty"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    const emptyContainer = document.querySelector('.empty');

    if (restaurants.length == 0) {
      emptyContainer.innerHTML = emptyData();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    }

    setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1000);
  },
};

export default Like;
