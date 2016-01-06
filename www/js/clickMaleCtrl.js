myControllers.controller('clickMaleCtrl', function($scope) {
    startDB();
    $scope.playlists = [];
    ///////////  Retrieve All Task ////////////////
    retrieveAllTask();

    function retrieveAllTask() {
        console.log('Start retrive all task transaction.');
        db.transaction(getEmployees, retrieveAllTaskError);

    }

    function getEmployees(tx) {
        var sql2 = "select SymptomCat, SymptomThai, SymptomEng, sex from Symptom where sex <> 'f' order by SUBSTR(SymptomThai,case when SUBSTR(SymptomThai,1,1) in ('เ','แ','ไ','ใ','โ') then 2 else 1 end,1),SymptomThai";
        tx.executeSql(sql2, [], getEmployees_success2);
    }

    function getExtentData(tx) {
        var sql3 = "select  sum(incidence) as sIncidence, (select SymptomThai from Symptom where  symptomcat=a.symptomcat) as SymptomThai ,count(1) as cIncidence  , symptomcat, (select SymptomEng from Symptom where  symptomcat=a.symptomcat) as SymptomEng  from diseases  a where  (diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ")  or diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ") or diseasesid in(select diseasesid from diseases where symptomcat =" + _dis_id + ")) and Sex <> '" + _sex + "'  group by symptomcat order by sum(incidence) desc, count(1) desc LIMIT 9";
        tx.executeSql(sql3, [], getExtentdata_success);
        
    }

    function getEmployees_success2(tx, results) {


        var len = results.rows.length;
        var i2 = 1;
        console.log("Tasks amount: " + len);

        if (len == 0) {} else {
            for (var i = 0; i < len; i++) {
                var SymptomList = {
                    title: results.rows.item(i).SymptomThai,
                    titleEng : results.rows.item(i).SymptomEng,
                    row : i2++,
                    id: results.rows.item(i).SymptomCat
                        // $('#SymptomList').append('<li><a href="#page111" onClick="xxx(' + Symptom.SymptomCat + ');setHide(11);">' +(i2++)+"."+ Symptom.SymptomThai + '<br><br><p>'+ Symptom.SymptomEng +'</p></a></li>');
                }
                $scope.playlists.push(SymptomList);
            }
        }
        console.log($scope.playlists);
    }


    function retrieveAllTaskError(err) {
        navigator.notification.alert("Error processing SQL: " + err.code);
    }

    /////////// End Retrieve All Task ////////////////
});
