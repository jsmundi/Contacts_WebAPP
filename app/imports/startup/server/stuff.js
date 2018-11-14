import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { first: 'Test', last: 'Last Name', address: 'WSU', phone: '123456789', email: 'test@test.com' },
  { first: 'Test2', last: 'Last Name2', address: 'WSU2', phone: '123456789', email: 'test2@test.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
