document.getElementById('nextButton').addEventListener('click', function() {
    var mainImage = document.getElementById('mainImage');
    var cal2Image = document.getElementById('cal2Image'); 
    
    mainImage.style.display = 'none';
    cal2Image.style.display = 'block';

    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('backButton').style.display = 'block';

    adjustMapAreas('cal2Image', 'conceptmap2', 2480, 3509);  
});

document.getElementById('backButton').addEventListener('click', function() {
    var mainImage = document.getElementById('mainImage');
    var cal2Image = document.getElementById('cal2Image');

    mainImage.style.display = 'block';
    cal2Image.style.display = 'none';

    document.getElementById('backButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';

    adjustMapAreas('mainImage', 'conceptmap', 2480, 3509);
});

function adjustMapAreas(imageId, mapName, originalWidth, originalHeight) {
    var image = document.getElementById(imageId);
    var map = document.getElementsByName(mapName)[0];

    var widthScale = image.offsetWidth / originalWidth;
    var heightScale = image.offsetHeight / originalHeight;

    for (var i = 0; i < map.areas.length; i++) {
        var area = map.areas[i];
        var originalCoords = area.dataset.originalCoords.split(',');

        var adjustedCoords = originalCoords.map(function(coord, index) {
            return Math.round(index % 2 == 0 ? coord * widthScale : coord * heightScale);
        });

        area.coords = adjustedCoords.join(',');
    }
}

window.onload = function() {
    adjustMapAreas('mainImage', 'conceptmap', 2480, 3509);
};

window.onresize = function() {
    adjustMapAreas('mainImage', 'conceptmap', 2480, 3509);

    var cal2Image = document.getElementById('cal2Image');
    if (cal2Image.style.display === 'block') {
        adjustMapAreas('cal2Image', 'conceptmap2', 2480, 3509); 
    }
};