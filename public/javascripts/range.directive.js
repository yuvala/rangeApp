app.directive('range',['$timeout', function($timeout){
    return {
        restrict: 'AE',
        scope:{
            aaa:'='
        },
        templateUrl: 'range.tpl.html',
        link: function (scope, element,attr){
            var height;
            scope.ticsData =[1,23,3,654,3355,6,7,8,9,14560];
 
            height = element[0].offsetWidth; 
            $timeout(function () {
                height  = element[0].offsetHeight;







                //width  = element[0].offsetWidth;
                // if (attrs.key) {
                //   scope[attrs.key] = {
                //     height: height,
                //     width: width
                //   };
                //   return;
                // }
      
                // scope.elementSize = {
                //   height: height,
                //   width: width
                // };
              });

        }
    };
}]);