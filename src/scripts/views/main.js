const main = () => {
  const baseUrl = "https://restaurant-api.dicoding.dev";

  const getRestaurant = () => {
    fetch(`${baseUrl}/list`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllRestaurants(responseJson.restaurants);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const renderAllRestaurants = (restaurants) => {
    const listRestaurantElement = document.querySelector("#restaurant-List");
    listRestaurantElement.innerHTML = "";

    let increment = 0;

    restaurants.forEach((restaurant) => {
      listRestaurantElement.innerHTML += `
        <article
          class="product-item"
          data-aos="fade-up"
          data-aos-delay="${(increment += 50)}"
        >
          <div class="card" data-label="${restaurant.city}"></div>
          <img
            class="product-item__thumbnail"
            src="https://restaurant-api.dicoding.dev/images/medium/${
              restaurant.pictureId
            }"
            alt="${restaurant.name}"
          />
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
              <a href="#" class="product-name">${restaurant.name}</a>
            </h1>
            <p class="product-item__description">
              ${restaurant.description}
            </p>
          </div>
        </article>
      `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    console.log(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getRestaurant();
  });
};

export default main;
