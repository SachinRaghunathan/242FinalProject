app.controller('MainController', ['$scope', function($scope) { 
  //$scope.title = 'Some Projects that I worked on'; 
  $scope.plusOne = function(index) { 
  	$scope.projects[index].likes += 1; 
	};
	$scope.projects = [ 
  { 
    name: 'Avalon', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://cf.geekdo-images.com/images/pic1398895_md.jpg',
    likes: 0
  }, 
  { 
    name: 'Avalon', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://cf.geekdo-images.com/images/pic1398895_md.jpg',
    likes: 0
  }, 
  { 
    name: 'Avalon', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://cf.geekdo-images.com/images/pic1398895_md.jpg',
    likes: 0
  }, 
  { 
    name: 'Avalon', 
    date: new Date('2014', '03', '08'), 
    cover: 'http://cf.geekdo-images.com/images/pic1398895_md.jpg',
    likes: 0
  } 
]
}]);