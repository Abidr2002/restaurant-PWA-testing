/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

const isEmpty = "You don't have any, explore for one!";

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.no-like');
  I.see(isEmpty, '.no-like');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  // Ensure favorite restaurant is still empty
  I.seeElement('.no-like');
  I.see(isEmpty, '.no-like');

  // Open the main page
  I.amOnPage('/');

  // Select the first Restaurant
  I.seeElement('.resto__title');

  // Click the restaurant card - it'll bring us to restaurant detail page
  const firstRestaurant = locate('.resto__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurantTitle);

  // Click the favorite restaurant button
  I.seeElement('#favButton');
  I.click('#favButton');

  // Open the favorite page
  I.amOnPage('/#/favorite');

  // We see favorited Restaurant
  I.seeElement('.resto__title');
  const favoritedRestaurantTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.seeElement('.no-like');
  I.see(isEmpty, '.no-like');

  // Open the main page
  I.amOnPage('/');

  // Select the first Restaurant
  I.seeElement('.resto__title');

  // Click the restaurant card - it'll bring us to restaurant detail page
  const firstRestaurant = locate('.resto__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurantTitle);

  // Click the favorite restaurant button
  I.seeElement('#favButton');
  I.click('#favButton');

  // Open the favorite page
  I.amOnPage('/#/favorite');

  // We see favorited Restaurant
  I.seeElement('.resto__title');
  const favoritedRestaurantTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  // Click the favorited restaurant card
  I.click(favoritedRestaurantTitle);

  // Unfavoriting restaurant
  I.seeElement('#favButton');
  I.click('#favButton');

  // Back to favorite page
  I.amOnPage('/#/favorite');

  // Check if unfavoriting success
  I.seeElement('.no-like');
  const noFavRestaurant = await I.grabTextFrom('.no-like');
  assert.strictEqual(noFavRestaurant, isEmpty);
});
