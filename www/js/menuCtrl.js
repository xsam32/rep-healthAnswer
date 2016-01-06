myControllers.controller('menuCtrl', ['$scope', function($scope) {

$scope.finddoctor = "http://www.phyathai.com/doctor_search.aspx?LangID=th&Name=&HospitalCode=0&SpecialtyID=0";
$scope.askexpert = "http://www.phyathai.com/contactus_mobile.aspx?LangID=en";
$scope.homepage = "http://www.phyathai.com/contactus_mobile.aspx?LangID=en";
$scope.promotion = "http://www.phyathai.com/promotionmain/PYT2/th";

$scope.openFindDoctor = function(finddoctor){
    window.open(finddoctor ,'_blank');
    window.open = cordova.InAppBrowser.open;
}
$scope.openAskExpert = function(askexpert){
    window.open(askexpert ,'_blank');
    window.open = cordova.InAppBrowser.open;
}
$scope.openHomePage = function(homepage){
    window.open(homepage ,'_blank');
    window.open = cordova.InAppBrowser.open;
}
$scope.openPromotion = function(promotion){
    window.open(promotion ,'_blank');
    window.open = cordova.InAppBrowser.open;
}

}]);
