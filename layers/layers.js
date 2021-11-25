ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([607779.172024, 4976628.530480, 619343.774971, 4982704.585237]);
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
var format_tronchi_po_1 = new ol.format.GeoJSON();
var features_tronchi_po_1 = format_tronchi_po_1.readFeatures(json_tronchi_po_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_tronchi_po_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tronchi_po_1.addFeatures(features_tronchi_po_1);
var lyr_tronchi_po_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tronchi_po_1, 
                style: style_tronchi_po_1,
                interactive: true,
                title: '<img src="styles/legend/tronchi_po_1.png" /> tronchi_po'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_tronchi_po_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_tronchi_po_1];
lyr_tronchi_po_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'gg_240': 'gg_240', 'gg_220': 'gg_220', });
lyr_tronchi_po_1.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'gg_240': 'TextEdit', 'gg_220': 'TextEdit', });
lyr_tronchi_po_1.set('fieldLabels', {'id': 'header label', 'Nome': 'header label', 'gg_240': 'header label', 'gg_220': 'header label', });
lyr_tronchi_po_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});