import { Consults } from '/imports/api/consults/consults.js';

import './formupdate.html';

Template.formupdate.onCreated(function(){
    Meteor.subscribe("Consults.byColaborator");
});

Template.formupdate.helpers({
    formCollection() {
        return Consults;
    },
    getDocument: function () {
        var docId = FlowRouter.getParam('docId');
        console.log(docId);
        var doc = Consults.findOne(docId) || {};
        return doc;
    },
});
