myControllers.controller('showImgCtrl', function($scope, $stateParams) {
    startDB();
    $scope.playlists = [];
    var disIds = $stateParams.disIds;

    // alert($stateParams.disIds);
    

    // db.transaction(getResult_executeSql, transaction_error);

    
$scope.share = function() {
	alert('share');
}


   
});
