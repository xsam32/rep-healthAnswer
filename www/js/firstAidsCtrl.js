myControllers.controller('firstAidsCtrl', function($scope, $ionicLoading) {
    startDB();
    $scope.playlists = [];
    ///////////  Retrieve All Task ////////////////
    retrieveAllTask();

    function retrieveAllTask() {
        $ionicLoading.show({
            template: 'Loading...'
        });
        console.log('Start retrive all task transaction.');
        db.transaction(retrieveAllTaskTransaction, transaction_error);

    }

    function retrieveAllTaskTransaction(tx) {
        tx.executeSql('SELECT * FROM Emergency', [], retrieveAllTaskSuccess, retrieveAllTaskError);
    }

    function retrieveAllTaskSuccess(tx, results) {

        var len = results.rows.length;

        console.log("Tasks amount: " + len);

        if (len == 0) {
            //$('#listContainer').html('loading...');
        } else {
            for (var i = 0; i < len; i++) {
                var item = {
                    title: results.rows.item(i).EmerName,
                    id: results.rows.item(i).EmerCode
                }
                $scope.playlists.push(item);
            }
        }
        $ionicLoading.hide();
        console.log($scope.playlists);
    }

    function retrieveAllTaskError(err) {
        navigator.notification.alert("Error processing SQL: " + err.code);
    }

    /////////// End Retrieve All Task ////////////////
});
