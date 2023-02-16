import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
  notFoundData,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-header></hero-header>
      <section class="content">
        <div class="main">
          <h2 class="main__label">Explore Restaurant</h2>
          <div class="products" id="restaurant-list"></div>
          <div class="loader"></div>
          <div class="empty"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homePage();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    const emptyContainer = document.querySelector('.empty');
    const loader = document.querySelector('.loader');

    if (restaurants.error) {
      emptyContainer.innerHTML = notFoundData();
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

export default Home;
