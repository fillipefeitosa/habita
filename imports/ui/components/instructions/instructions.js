import "./instructions.html";

Template.instructions.helpers({
  verifyPreviousConsent() {
    // Check if user has already answered OR return false if not.
    return Meteor.user().profile.consent || false;
  },
});

Template.instructions.events({
  "change #consentimento": function (event) {
    const consent = event.currentTarget.checked;
    Meteor.users.update(
      { _id: Meteor.userId() },
      { $set: { "profile.consent": consent } }
    );
  },
});
