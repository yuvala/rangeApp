var app = angular.module('filter',[]);

app.controller('filterCtrl', [function(){

var vm = this;

vm.objects = [
    {'category':'carnialA', 'type':'tumers', 'tumerType':'tumer_abc'},
    {'category':'carniaA', 'type':'tumers', 'tumerType':'tumer_cde'},
    {'category':'carnialb', 'type':'disease', 'tumerType':'tumer_efg'},
    {'category':'carniaB', 'type':'disease', 'tumerType':'tumer_hij'},
    {'category':'general', 'type':'disease', 'tumerType':'disease_hij'},
];

}]);