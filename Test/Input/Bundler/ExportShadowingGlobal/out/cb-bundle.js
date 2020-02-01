(function(undefined) {
    "use strict";
    var Image_image;
    function loadImage() {
        return new Image();
    }
    Image_image = function() {
        function Image_image() {
            console.log("constructed");
        }
        return Image_image;
    }();
    new Image_image();
    loadImage();
}).call(this);

