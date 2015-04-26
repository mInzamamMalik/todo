/**
 * Created by malikasinger on 24-Apr-15.
 */



var app = angular.module("todo",["ngMaterial"]);

app.factory("fact",function(){

return {
    name:"inzi",
    age: "20"

}


});

app.controller("todocontrol",["$scope","fact",function($scope,fact,$localStorage){


$scope.abc={abc:"sfgsdf"};

$scope.required = '';
$scope.entry = "";
$scope.date = "";
$scope.time = "";
$scope.data = [];
    $scope.done = function(){
        $scope.required = "";
        if($scope.entry != '') {

            $scope.temp = {
                entry:$scope.entry,
                date: $scope.date.toString().slice(3, 15),
                time: $scope.time.toString().slice(15, 21),
                serial : $scope.data.length
            };

            if($scope.temp.time != ""){

                $scope.temp.time = " at " + $scope.temp.time;
            }
            $scope.data.push($scope.temp);
            $scope.entry = "";
            $scope.date = "";
            $scope.time = "";

        }else{

             $scope.required = "this is required";
        }

    };


}]);



