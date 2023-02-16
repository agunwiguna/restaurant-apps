const assert = require('assert');

// eslint-disable-next-line new-cap
Feature('Liking Restaurants');

// eslint-disable-next-line new-cap
Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
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
  I.seeElement('.product-item');
  const likedRestoTitle = await I.grabTextFrom('.product-item__title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
