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
var format_localit_rilievo_fondali_1 = new ol.format.GeoJSON();
var features_localit_rilievo_fondali_1 = format_localit_rilievo_fondali_1.readFeatures(json_localit_rilievo_fondali_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localit_rilievo_fondali_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localit_rilievo_fondali_1.addFeatures(features_localit_rilievo_fondali_1);
var lyr_localit_rilievo_fondali_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localit_rilievo_fondali_1, 
                style: style_localit_rilievo_fondali_1,
                interactive: true,
    title: 'località_rilievo_fondali<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_1.png" /> 0 - 180<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_2.png" /> 180 - 240<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_3.png" /> 240 - 260<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_4.png" /> 260 - 390<br />\
    <img src="styles/legend/localit_rilievo_fondali_1_5.png" /> 390 - 690<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_localit_rilievo_fondali_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_localit_rilievo_fondali_1];
lyr_localit_rilievo_fondali_1.set('fieldAliases', {'id': 'id', 'Nome Local': 'Nome Local', 'VALORE': 'VALORE', 'Data': 'Data', });
lyr_localit_rilievo_fondali_1.set('fieldImages', {'id': 'TextEdit', 'Nome Local': 'TextEdit', 'VALORE': 'TextEdit', 'Data': 'DateTime', });
lyr_localit_rilievo_fondali_1.set('fieldLabels', {'id': 'header label', 'Nome Local': 'header label', 'VALORE': 'header label', 'Data': 'header label', });
lyr_localit_rilievo_fondali_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});