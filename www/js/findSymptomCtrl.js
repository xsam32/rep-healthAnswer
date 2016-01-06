myControllers.controller('findSymptomCtrl', function($scope, $stateParams) {
    startDB();
    $scope.playlists = [];
    var disIds = $stateParams.disIds;
    // alert($stateParams.disIds);
    ///////////  Retrieve All Task ////////////////
    // retrieveAllTask();

    db.transaction(getResult_executeSql, transaction_error);

    function getResult_executeSql(tx) {
        var sql_result = "SELECT * FROM Diseases WHERE SymptomCat =" + disIds + " AND sex <> '" + $stateParams.sex + "' ORDER BY Incidence DESC ";
        //alert("ค่าที่ "+id_checkBox+" รับมา = "+_checkBox[id_checkBox]);

        tx.executeSql(sql_result, [], getResult_success);
    }

    function getResult_success(tx, results) {

        var len = results.rows.length;
        console.log("Tasks amount: " + len);
        if (len == 0) {
        	
        } else {
            for (var i = 0; i < len; i++) {
                var SymptomList = {
                    title: results.rows.item(i).DiseasesThai,
                    titleEng : results.rows.item(i).DiseasesEng,
                    id: results.rows.item(i).DiseasesId
                        // $('#SymptomList').append('<li><a href="#page111" onClick="xxx(' + Symptom.SymptomCat + ');setHide(11);">' +(i2++)+"."+ Symptom.SymptomThai + '<br><br><p>'+ Symptom.SymptomEng +'</p></a></li>');
                }
                $scope.playlists.push(SymptomList);
            }
        }
    }



    /////////// End Retrieve All Task ////////////////
});
