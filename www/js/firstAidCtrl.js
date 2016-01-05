myControllers.controller('firstAidCtrl', function($scope, $stateParams) {
    startDB();
    var detail = $stateParams.firstAidsId;
    var id = parseInt(detail)
    details = [];
    getEmerDetail_transaction();

    function getEmerDetail_transaction() {
        var id = parseInt(detail)
        EmerCode = id;
        db.transaction(getEmerDetail_executeSql, transaction_error);

    }

    function getEmerDetail_executeSql(tx) {
        var sql = 'SELECT * FROM Emergency WHERE EmerCode=' + EmerCode;
        tx.executeSql(sql, [], getEmerDetail_success);
    }

    function getEmerDetail_success(tx, results) {
        var len = results.rows.length;

        console.log("Tasks amount: " + len);

        if (len == 0) {
            //$('#listContainer').html('loading...');
        } else {
            for (var i = 0; i < len; i++) {
                var item = {
                    detail: results.rows.item(i).EmerDetail
                }
                details.push(item.detail);
                var detailHTML = details.toString();

                $scope.detailHTML = detailHTML;
                
            }
        }
        console.log(detailHTML);
        /*if( len == 0 )
	{
		alert("ยังไม่มีข้อมูล");
	}
	else
	{
		$('#detailContainer').html('');
		var div = $('<div id="EmerDetail"></div>');	
            $(div).append("" + results.rows.item(0).EmerDetail + "");
		$('#detailContainer').html(div).trigger('create');
	}*/
    }

    function getEmerDetail_error(err) {
        navigator.notification.alert("Error processing SQL: " + err.code);
        alert("Error processing SQL: " + err.code);
    }
});
