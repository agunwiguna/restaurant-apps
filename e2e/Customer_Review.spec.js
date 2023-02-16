const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('adding a review', async ({ I }) => {
  const nameReview = 'Agun Wiguna';
  const textReview = 'This is a test review';

  I.waitForElement('.product-item__title', 3);
  const firstResto = locate('.product-item__title a').first();
  I.wait(5);
  I.click(firstResto);

  const reviewForm = locate('#review__form');
  I.seeElement(reviewForm);
  I.waitForElement('#name');
  I.seeElement('#name');
  I.waitForElement('#review');
  I.seeElement('#review');
  I.fillField('#name', nameReview);
  I.fillField('#review', textReview);

  I.waitForElement('button.btn-save');
  I.click('button.btn-save');

  I.wait(5);

  const reviewItem = locate('.customer-reviews').last();
  I.waitForElement(reviewItem);
  I.seeElement(reviewItem);

  I.wait(5);

  const myNameReview = await I.grabTextFrom(reviewItem.find('#name__review'));
  const myTextReview = await I.grabTextFrom(reviewItem.find('#text__review'));
  assert.strictEqual(myNameReview, nameReview);
  assert.strictEqual(myTextReview, textReview);
});
