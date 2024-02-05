
(function (){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.foodCSV = "";
        console.log($scope.foodCSV);
        $scope.msg = "";
        console.log($scope.msg);
        $scope.checkFood = function(){
            console.log("csv ", $scope.foodCSV);
            if ($scope.foodCSV == ""){
                $scope.msg = "Please enter data first";
            }else{
                var foodArray = $scope.foodCSV.split(', ');
                var count = foodArray.length;
                console.log("count ",  count);

                if (count <= 3){
                    $scope.msg = "Enjoy!";
                } else{
                    $scope.msg = "Too much!!";
                }
            }
        }
    }
})();
