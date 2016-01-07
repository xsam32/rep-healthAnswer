myControllers.controller('symptomDetailCtrl', function($scope,$stateParams) {


    startDB();
    result_value_detail()
    var disIds = $stateParams.disIds;
	var _diseases_id = disIds;

    function result_value_detail(_diseases_id) {
        //$('#iframe_result_detail').attr('src',"http://203.155.165.20/Diseasesdetail/"+url+".htm");
        
        _diseases_id = _diseases_id;
        db.transaction(getDiseasesDtl, transaction_error);

    }

    function getDiseasesDtl(tx) {
        var sql = 'SELECT * FROM Diseases_Dtl WHERE DiseasesId =' + _diseases_id + "";
        tx.executeSql(sql, [], getDiseaseDtl_success);


    }

    function getDiseaseDtl_success(tx, results) {

        var len = results.rows.length;
        if (len == 0) {

            $scope.symDetail = "ยังไม่มีข้อมูล";
        } else {;
            var item = {
            	diseasesThai: results.rows.item(0).DiseasesThai,
                define: results.rows.item(0).define,
                cause: results.rows.item(0).cause,
                sign: results.rows.item(0).sign,
                consider: results.rows.item(0).consider,
                remedy: results.rows.item(0).remedy,
                protect: results.rows.item(0).protect
            }
            $scope.diseasesThai = item.diseasesThai;
            $scope.define = item.define;
            $scope.cause = item.cause;
            $scope.sign = item.sign;
            $scope.consider = item.consider;
            $scope.remedy = item.remedy;
            $scope.protect = item.protect;

        }
    }
});
