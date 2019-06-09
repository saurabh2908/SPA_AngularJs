app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/portfolio',{
        templateUrl:'views/portfolio.html'
    }).when('/Resume',{
        templateUrl:'views/resume.html',
    })
    .when('/About',{
        templateUrl:'views/about.html',
       
    })
    .when('/Projects',{
        templateUrl:'views/project.html'
    })
    .when('/Contact',{
        templateUrl:'views/contact.html'
    })
    
    .when('/',{
        templateUrl:'views/portfolio.html'
    })
})
