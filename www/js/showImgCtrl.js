myControllers.controller('showImgCtrl',['$scope', '$stateParams', '$cordovaSocialSharing', function($scope, $stateParams, $cordovaSocialSharing) {

	$scope.title = $stateParams.DiseasesThai;
	$scope.disIds = $stateParams.disIds;


        $scope.capture = function() {
            var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error, res) {
                if (error) {
                    console.error(error);
                } else {
                    //console.log('ok', res.filePath); //should be path/to/myScreenshot.jpg
                    //For android
                    imageLink = res.filePath;
                    window.plugins.socialsharing.share(null, null, 'file://' + imageLink, null);

                    //For iOS
                    //window.plugins.socialsharing.share(null,   null,imageLink, null)
                }
            }, 'jpg', 50, 'myScreenShot');
        };
   
}]);
