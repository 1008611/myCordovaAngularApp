/**
 * Created by dz02 on 2016/7/21.
 */
define([], function () {
    var myApp = angular.module('myApp', ['ui.router']);
    myApp.controller('productController', [
        '$scope',
        '$cordovaAppVersion',
        '$cordovaCamera',
        '$cordovaDialogs',
        function ($scope, $cordovaAppVersion,$cordovaCamera,$cordovaDialogs) {
            console.log($cordovaDialogs);
            UMengShare.init(function () {
                console.log('UMengShare init success');
            });

            $scope.shareSDK = function () {

                //$cordovaDialogs.alert('message', 'title', 'button name')
                //    .then(function() {
                //        // callback success
                //    });

                UMengShare.share('内容', '标题', 'http://www.baidu.com', function () {
                    console.log('分享成功');
                }, function () {
                    console.log('分享失败');
                });


                //var options = {
                //    quality: 50,
                //    destinationType: Camera.DestinationType.DATA_URL,
                //    sourceType: Camera.PictureSourceType.CAMERA,
                //    allowEdit: true,
                //    encodingType: Camera.EncodingType.JPEG,
                //    targetWidth: 100,
                //    targetHeight: 100,
                //    popoverOptions: CameraPopoverOptions,
                //    saveToPhotoAlbum: false,
                //    correctOrientation:true
                //};
                //
                //$cordovaCamera.getPicture(options).then(function(imageData) {
                //    var image = document.getElementById('myImage');
                //    image.src = "data:image/jpeg;base64," + imageData;
                //}, function(err) {
                //    // error
                //});



            }


        }]);
})