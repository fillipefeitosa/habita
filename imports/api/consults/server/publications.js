// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Consults } from '../consults.js';

Meteor.publish('Consults.all', function () {
  return Consults.find();
});
