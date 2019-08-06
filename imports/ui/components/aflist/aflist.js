import { Meteor } from 'meteor/meteor';
import { Consults } from '/imports/api/consults/consults.js';

import './aflist.html';

Template.aflist.onCreated(function(){
    Meteor.subscribe("Consults.byColaborator");
});

Template.aflist.helpers({
    consults(){
        return Consults.find({});
    },
    getConsult(docId){
        return Consults.findOne({docId});
    }
});
