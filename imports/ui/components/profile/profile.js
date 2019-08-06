import './profile.html';

Template.profile.helpers({
    // This avoids the error while profile is being loaded
    'userProfile': function(){
        if (Meteor.user()){
            const userProfile = Meteor.user().profile;
            if ( ! Meteor.loggingIn()){
                return userProfile;
            }
        }
    },
    states(){
        stateArray = [
            ["Açores"],
            ["Aldeia Rica"],
            ["Baraçal"],
            ["Cortegada"],
            ["Cadafaz"],
            ["Soutomoninho"],
            ["Carrapichana"],
            ["Cortiçô da Serra"],
            ["Mourela"],
            ["Porteira"],
            ["Casas do Rio"],
            ["Celorico Gare"],
            ["Forno Telheiro"],
            ["Quinta do Salgueiro"],
            ["Lajeosa do Mondego"],
            ["Assanhas"],
            ["Linhares da Beira"],
            ["Quintãs de Cima"],
            ["Maçal do Chão"],
            ["Carvalheda"],
            ["Mesquitela"],
            ["Mogadouro"],
            ["Vale da Ribeira"],
            ["Minhocal"],
            ["Prados"],
            ["Rapa"],
            ["Ratoeira"],
            ["Salgueirais"],
            ["Celorico da Beira"],
            ["Espinheiro"],
            ["Lameiras"],
            ["Aldeia da Serra"],
            ["Casas do Soeiro"],
            ["Fonte Arcada"],
            ["Grichoso"],
            ["Mourilhe"],
            ["Soutinho"],
            ["Velosa"],
            ["Galisteu"],
            ["Vide entre Vinhas"],
            ["Vila Boa do Mondego"],
            ["Termas de Santo António"],
            ["Quintãs de Baixo"],
        ]
        return stateArray.sort();
    },


});

Template.profile.events({
    "keyup [name=name]": function(event){
        const name = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": name}});
    },
    "keyup [name=institution]": function(event){
        const institution = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.institution": institution}});
    },
    "keyup [name=profession]": function(event){
        const profession = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profession": profession}});
    },
    "change [name=headquarters]": function(event){
        const headquarters = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.headquarters": headquarters}});
    },
    "change [name=sites]": function(event){
        const sites = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.sites": sites}});
    },
});
