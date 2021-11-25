ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([604814.509305, 4972194.075417, 624200.349045, 4983140.390098]);
var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_tronchi_po_3 = new ol.format.GeoJSON();
var features_tronchi_po_3 = format_tronchi_po_3.readFeatures(json_tronchi_po_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_tronchi_po_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tronchi_po_3.addFeatures(features_tronchi_po_3);
var lyr_tronchi_po_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tronchi_po_3, 
                style: style_tronchi_po_3,
                interactive: true,
                title: '<img src="styles/legend/tronchi_po_3.png" /> tronchi_po'
            });

lyr_BingMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_tronchi_po_3.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_GoogleHybrid_1,lyr_GoogleHybrid_2,lyr_tronchi_po_3];
lyr_tronchi_po_3.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'gg_240': 'gg_240', 'gg_220': 'gg_220', });
lyr_tronchi_po_3.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'gg_240': 'TextEdit', 'gg_220': 'TextEdit', });
lyr_tronchi_po_3.set('fieldLabels', {'id': 'header label', 'Nome': 'header label', 'gg_240': 'header label', 'gg_220': 'header label', });
lyr_tronchi_po_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});