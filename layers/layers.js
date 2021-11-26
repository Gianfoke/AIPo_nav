var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_fondale_1 = new ol.format.GeoJSON();
var features_fondale_1 = format_fondale_1.readFeatures(json_fondale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fondale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fondale_1.addFeatures(features_fondale_1);
var lyr_fondale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fondale_1, 
                style: style_fondale_1,
                interactive: true,
    title: 'fondale<br />\
    <img src="styles/legend/fondale_1_0.png" /> 200<br />\
    <img src="styles/legend/fondale_1_1.png" /> 240<br />\
    <img src="styles/legend/fondale_1_2.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_fondale_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_fondale_1];
lyr_fondale_1.set('fieldAliases', {'id': 'id', 'luogo': 'luogo', 'valore': 'valore', });
lyr_fondale_1.set('fieldImages', {'id': 'TextEdit', 'luogo': 'TextEdit', 'valore': 'TextEdit', });
lyr_fondale_1.set('fieldLabels', {'id': 'header label', 'luogo': 'header label', 'valore': 'header label', });
lyr_fondale_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});