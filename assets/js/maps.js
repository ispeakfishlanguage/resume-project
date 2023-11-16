function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1.1,
        center: {
            //Stockholm Sweden
            lat: 59.331308328461915, 
            lng: 18.078991960976403
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        //Paraguay
        { lat: -25.264233344526183, lng: -57.573031765633814 }, // Asuncion
        //Taiwan
        { lat: 22.9834731680327, lng: 120.22657037287796 }, // Tainan City
        { lat: 25.054191017112096, lng: 121.56808818387063 }, // Taipei City
        { lat : 22.85679042620936,lng: 120.41156515693652 }, // Kaohsiung City
        //Sweden
        { lat: 63.825921558724836, lng: 20.259116692568274 }, // Umeå City
        { lat: 59.27977669551826, lng: 18.002561845915178 }, // Älvsjö Stockholm
        { lat: 59.45248592248411, lng: 17.810239011117904 }, // Kallhäll Stockholm
        { lat: 59.36913247347208, lng: 17.961402611832657 }, // Sundbyberg Stockholm
        //USA
        { lat: 34.18113086519667, lng: -118.312856488232 }, // Burbank California
        { lat: 30.28326957218186, lng: -97.7333692372075 } // Austin Texas
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}