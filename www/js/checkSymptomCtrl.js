myControllers.controller('checkSymptomCtrl', function($scope, $stateParams, $ionicLoading) {
    startDB();
    $scope.playlists = [];
    var _dis_id = $stateParams.SymptomCat;
    callExten();
    // alert($stateParams.SymptomCat);
    // alert($stateParams.SymptomId);

    function callExten() {
        $ionicLoading.show({
            template: 'Loading...'
        });
        db.transaction(getExtentData, transaction_error);
    }

    function getExtentData(tx) {
        var sql3 = "select  sum(incidence) as sIncidence, (select SymptomThai from Symptom where  symptomcat=a.symptomcat) as SymptomThai ,count(1) as cIncidence  , symptomcat, (select SymptomEng from Symptom where  symptomcat=a.symptomcat) as SymptomEng  from diseases  a where  (diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ")  or diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ") or diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ")) and Sex <> '" + $stateParams.sex + "'  group by symptomcat order by sum(incidence) desc, count(1) desc LIMIT 9";
        tx.executeSql(sql3, [], getExtentdata_success);
        //alert(sql3);
    }



    function getExtentdata_success(tx, results) {
        // $('#busy').hide(); 
        var len2 = results.rows.length;
        console.log(len2);
        // $('#listExtentdata').html('');
        // var ul = $("<ul id='listExtentdata' data-role='listview' data-inset='true' ></ul>"); 
        for (var i = 0; i < len2; i++) {
            var checkList = {
                    cat: results.rows.item(i).SymptomCat,
                    title: results.rows.item(i).SymptomThai,

                }
                // $(ul).append('<input type="checkbox" name="' + Symptom2.SymptomCat + '" id="checkbox-'+ ids +'a" class="custom" /><label for="checkbox-'+ ids +'a">'+Symptom2.SymptomThai +'</label>');
            $scope.playlists.push(checkList);
        }
        $ionicLoading.hide();
        console.log($scope.playlists);
        // $('#listExtentdata').html(ul).trigger('create');
        // $('#id_page111').css('display', 'block');
    }

    $scope.findSymptom = function() {
        var disIds = "";

        $('input[type="checkbox"]').each(function() {
            if ($(this).is(':checked')) {
                // perform operation for checked
                // _checkBox[id_checkBox] = $(this).attr('name');
                //alert("ค่าที่ "+id_checkBox+" ส่งไป = "+_checkBox[id_checkBox]);
                if (disIds) {
                    // disIds = disIds + "," + $(this).attr('name');
                } else {
                    disIds = disIds + $(this).attr('name');
                }


                // alert($(this).attr('name'));
                // id_checkBox++;

            } else {
                // perform operation for unchecked
            }

        });
        window.location.href = '#/app/findSymptom/' + disIds + "/" + $stateParams.sex;
    }

});
