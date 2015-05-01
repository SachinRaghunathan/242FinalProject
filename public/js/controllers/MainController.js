/*
 * controller for the main page
 */

app.controller('MainController', ['$scope', function($scope) { 
  $scope.projects = [ 
  { 
    name: 'Avalon', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://cf.geekdo-images.com/images/pic1398895_md.jpg',
    url: '/avalon',
    likes: 0,
    controller: 'avalon'
  }, 
  { 
    name: 'Communivoice', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://i.imgur.com/dLReZiJ.jpg?2',
    url: '/communivoice',
    likes: 0
  },
  { 
    name: 'Phonebell', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/167/937/datas/gallery.jpg',
    url: '/phonebell',
    likes: 0
  },
  { 
    name: 'OpenSesame', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/157/670/datas/gallery.jpg',
    url: '/OpenSesame',
    likes: 0
  }
]
}]);



