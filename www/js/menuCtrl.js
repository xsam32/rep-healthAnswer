myControllers.controller('menuCtrl', ['$scope', '$cordovaInAppBrowser', function($scope, $cordovaInAppBrowser) {

    var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
    };

    document.addEventListener(function() {
        $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
            .then(function(event) {
                // success
            })
            .catch(function(event) {
                // error
            });


        $cordovaInAppBrowser.close();

    }, false);

}]);
