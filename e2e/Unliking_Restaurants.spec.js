const assert = require('assert');

// eslint-disable-next-line new-cap
Feature('Unliking Restaurants');

// eslint-disable-next-line new-cap
Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('No Favorites Yet!', '.empty__state');

  I.amOnPage('/');
  I.waitForElement('.product-item__title', 5);

  const firstResto = locate('.product-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.wait(5);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait(5);
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.waitForElement('.product-item__title', 5);

  const likedRestoTitle = await I.grabTextFrom('.product-item__title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  const firstLikeResto = locate('.product-item__title a').first();

  I.wait(5);
  I.click(firstLikeResto);

  I.seeElement('#likeButton');
  I.wait(5);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(3);

  I.seeElement('.empty__state h3');
  const onFav = await I.grabTextFrom('.empty__state h3');
  assert.strictEqual(onFav, 'No Favorites Yet!');
});
