import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Xinghui',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Zhao',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Stuff',
      placeholder: 'WSU Vancouver',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '360-123-4567',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'x.zhao@wsu.edu',
    },
  },
});

Stuff.attachSchema(StuffSchema);
