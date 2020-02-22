(function(undefined) {
    "use strict";
    var Image_image;
    function loadImage() {
        return new Image();
    }
    Image_image = function() {
        function Image_image2() {
            console.log("constructed");
        }
        return Image_image2;
    }();
    URL.createObjectURL("");
    new Image_image();
    loadImage();
}).call(this);

