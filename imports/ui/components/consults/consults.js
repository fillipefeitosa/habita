import { Consults } from '/imports/api/consults/consults.js';

import './consults.html';

Template.consults.onCreated(function () {
  Meteor.subscribe('Consults.all');
});

Template.consults.helpers({
    formCollection() {
        return Consults;
    },
});
