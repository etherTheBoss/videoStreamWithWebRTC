(function(){
    var video = document.getElementById('video'),
    vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia ||
                            webKitGetUserMedia||
                            navigator.mozGetUserMedia||
                            navigator.msGetUserMedia;

    //CHAPTURE VIDEO
    navigator.getMedia({
        video: true,
        audio:true
    }, 
    function(stream){
        video.src = vendorUrl.createObject(stream);
        video.play();
    },
    function(error){
        //An error occured
        //error.code
    });



})();