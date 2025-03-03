var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_economie_epciNombretotaldesalaristousdomaines_2 = new ol.format.GeoJSON();
var features_economie_epciNombretotaldesalaristousdomaines_2 = format_economie_epciNombretotaldesalaristousdomaines_2.readFeatures(json_economie_epciNombretotaldesalaristousdomaines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_economie_epciNombretotaldesalaristousdomaines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_economie_epciNombretotaldesalaristousdomaines_2.addFeatures(features_economie_epciNombretotaldesalaristousdomaines_2);
var lyr_economie_epciNombretotaldesalaristousdomaines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_economie_epciNombretotaldesalaristousdomaines_2, 
                style: style_economie_epciNombretotaldesalaristousdomaines_2,
                popuplayertitle: 'economie_epci (Nombre total de salariés tous domaines)',
                interactive: true,
    title: 'economie_epci (Nombre total de salariés tous domaines)<br />\
    <img src="styles/legend/economie_epciNombretotaldesalaristousdomaines_2_0.png" /> 979 - 1380<br />\
    <img src="styles/legend/economie_epciNombretotaldesalaristousdomaines_2_1.png" /> 1380 - 4118<br />\
    <img src="styles/legend/economie_epciNombretotaldesalaristousdomaines_2_2.png" /> 4118 - 7207<br />\
    <img src="styles/legend/economie_epciNombretotaldesalaristousdomaines_2_3.png" /> 7207 - 18401<br />\
    <img src="styles/legend/economie_epciNombretotaldesalaristousdomaines_2_4.png" /> 18401 - 28704<br />' });
var format_economie_communeNombretotaldesalaristousdomaines_3 = new ol.format.GeoJSON();
var features_economie_communeNombretotaldesalaristousdomaines_3 = format_economie_communeNombretotaldesalaristousdomaines_3.readFeatures(json_economie_communeNombretotaldesalaristousdomaines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_economie_communeNombretotaldesalaristousdomaines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_economie_communeNombretotaldesalaristousdomaines_3.addFeatures(features_economie_communeNombretotaldesalaristousdomaines_3);
var lyr_economie_communeNombretotaldesalaristousdomaines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_economie_communeNombretotaldesalaristousdomaines_3, 
                style: style_economie_communeNombretotaldesalaristousdomaines_3,
                popuplayertitle: 'economie_commune (Nombre total de salariés tous domaines)',
                interactive: true,
    title: 'economie_commune (Nombre total de salariés tous domaines)<br />\
    <img src="styles/legend/economie_communeNombretotaldesalaristousdomaines_3_0.png" /> 1 - 203<br />\
    <img src="styles/legend/economie_communeNombretotaldesalaristousdomaines_3_1.png" /> 203 - 649<br />\
    <img src="styles/legend/economie_communeNombretotaldesalaristousdomaines_3_2.png" /> 649 - 1374<br />\
    <img src="styles/legend/economie_communeNombretotaldesalaristousdomaines_3_3.png" /> 1374 - 7239<br />\
    <img src="styles/legend/economie_communeNombretotaldesalaristousdomaines_3_4.png" /> 7239 - 17687<br />' });
var format_zone_d_interet_4 = new ol.format.GeoJSON();
var features_zone_d_interet_4 = format_zone_d_interet_4.readFeatures(json_zone_d_interet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_d_interet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_d_interet_4.addFeatures(features_zone_d_interet_4);
var lyr_zone_d_interet_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_d_interet_4, 
                style: style_zone_d_interet_4,
                popuplayertitle: 'zone_d_interet',
                interactive: true,
    title: 'zone_d_interet<br />\
    <img src="styles/legend/zone_d_interet_4_0.png" /> Administratif ou militaire<br />\
    <img src="styles/legend/zone_d_interet_4_1.png" /> Culture et loisirs<br />\
    <img src="styles/legend/zone_d_interet_4_2.png" /> Gestion des eaux<br />\
    <img src="styles/legend/zone_d_interet_4_3.png" /> Industriel et commercial<br />\
    <img src="styles/legend/zone_d_interet_4_4.png" /> Religieux<br />\
    <img src="styles/legend/zone_d_interet_4_5.png" /> Sport<br />' });
var format_circuits_rando_5 = new ol.format.GeoJSON();
var features_circuits_rando_5 = format_circuits_rando_5.readFeatures(json_circuits_rando_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_circuits_rando_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_circuits_rando_5.addFeatures(features_circuits_rando_5);
var lyr_circuits_rando_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_circuits_rando_5, 
                style: style_circuits_rando_5,
                popuplayertitle: 'circuits_rando',
                interactive: true,
    title: 'circuits_rando<br />\
    <img src="styles/legend/circuits_rando_5_0.png" /> equestre<br />\
    <img src="styles/legend/circuits_rando_5_1.png" /> pedestre<br />\
    <img src="styles/legend/circuits_rando_5_2.png" /> pedestre, equestre<br />\
    <img src="styles/legend/circuits_rando_5_3.png" /> pedestre, equestre, VTT<br />\
    <img src="styles/legend/circuits_rando_5_4.png" /> pedestre, velo<br />\
    <img src="styles/legend/circuits_rando_5_5.png" /> pedestre, velo, equestre<br />\
    <img src="styles/legend/circuits_rando_5_6.png" /> VTT<br />' });
var format_arrete_de_biotope_6 = new ol.format.GeoJSON();
var features_arrete_de_biotope_6 = format_arrete_de_biotope_6.readFeatures(json_arrete_de_biotope_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrete_de_biotope_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrete_de_biotope_6.addFeatures(features_arrete_de_biotope_6);
var lyr_arrete_de_biotope_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrete_de_biotope_6, 
                style: style_arrete_de_biotope_6,
                popuplayertitle: 'arrete_de_biotope',
                interactive: true,
                title: '<img src="styles/legend/arrete_de_biotope_6.png" /> arrete_de_biotope'
            });
var format_zps_7 = new ol.format.GeoJSON();
var features_zps_7 = format_zps_7.readFeatures(json_zps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zps_7.addFeatures(features_zps_7);
var lyr_zps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zps_7, 
                style: style_zps_7,
                popuplayertitle: 'zps',
                interactive: true,
                title: '<img src="styles/legend/zps_7.png" /> zps'
            });
var format_znieff_type2_8 = new ol.format.GeoJSON();
var features_znieff_type2_8 = format_znieff_type2_8.readFeatures(json_znieff_type2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_znieff_type2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_znieff_type2_8.addFeatures(features_znieff_type2_8);
var lyr_znieff_type2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_znieff_type2_8, 
                style: style_znieff_type2_8,
                popuplayertitle: 'znieff_type2',
                interactive: true,
                title: '<img src="styles/legend/znieff_type2_8.png" /> znieff_type2'
            });
var format_zone_natura_2000_9 = new ol.format.GeoJSON();
var features_zone_natura_2000_9 = format_zone_natura_2000_9.readFeatures(json_zone_natura_2000_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_natura_2000_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_natura_2000_9.addFeatures(features_zone_natura_2000_9);
var lyr_zone_natura_2000_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_natura_2000_9, 
                style: style_zone_natura_2000_9,
                popuplayertitle: 'zone_natura_2000',
                interactive: true,
                title: '<img src="styles/legend/zone_natura_2000_9.png" /> zone_natura_2000'
            });
var format_sic_10 = new ol.format.GeoJSON();
var features_sic_10 = format_sic_10.readFeatures(json_sic_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sic_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sic_10.addFeatures(features_sic_10);
var lyr_sic_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sic_10, 
                style: style_sic_10,
                popuplayertitle: 'sic',
                interactive: true,
                title: '<img src="styles/legend/sic_10.png" /> sic'
            });
var format_plan_gest_11 = new ol.format.GeoJSON();
var features_plan_gest_11 = format_plan_gest_11.readFeatures(json_plan_gest_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plan_gest_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plan_gest_11.addFeatures(features_plan_gest_11);
var lyr_plan_gest_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plan_gest_11, 
                style: style_plan_gest_11,
                popuplayertitle: 'plan_gest',
                interactive: true,
    title: 'plan_gest<br />\
    <img src="styles/legend/plan_gest_11_0.png" /> CBPS<br />\
    <img src="styles/legend/plan_gest_11_1.png" /> PSG<br />' });
var format_ibp_12 = new ol.format.GeoJSON();
var features_ibp_12 = format_ibp_12.readFeatures(json_ibp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ibp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ibp_12.addFeatures(features_ibp_12);
var lyr_ibp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ibp_12, 
                style: style_ibp_12,
                popuplayertitle: 'ibp',
                interactive: true,
    title: 'ibp<br />\
    <img src="styles/legend/ibp_12_0.png" /> 0 - 5<br />\
    <img src="styles/legend/ibp_12_1.png" /> 5 - 10<br />\
    <img src="styles/legend/ibp_12_2.png" /> 10 - 15<br />\
    <img src="styles/legend/ibp_12_3.png" /> 15 - 20<br />\
    <img src="styles/legend/ibp_12_4.png" /> 20 - 25<br />\
    <img src="styles/legend/ibp_12_5.png" /> 25 - 30<br />\
    <img src="styles/legend/ibp_12_6.png" /> 30 - 32<br />' });
var format_corridor_ecologique_cours_eau_13 = new ol.format.GeoJSON();
var features_corridor_ecologique_cours_eau_13 = format_corridor_ecologique_cours_eau_13.readFeatures(json_corridor_ecologique_cours_eau_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corridor_ecologique_cours_eau_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_corridor_ecologique_cours_eau_13.addFeatures(features_corridor_ecologique_cours_eau_13);
var lyr_corridor_ecologique_cours_eau_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_corridor_ecologique_cours_eau_13, 
                style: style_corridor_ecologique_cours_eau_13,
                popuplayertitle: 'corridor_ecologique_cours_eau',
                interactive: true,
                title: '<img src="styles/legend/corridor_ecologique_cours_eau_13.png" /> corridor_ecologique_cours_eau'
            });
var format_foret_pnr_regroupe_14 = new ol.format.GeoJSON();
var features_foret_pnr_regroupe_14 = format_foret_pnr_regroupe_14.readFeatures(json_foret_pnr_regroupe_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_foret_pnr_regroupe_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_foret_pnr_regroupe_14.addFeatures(features_foret_pnr_regroupe_14);
var lyr_foret_pnr_regroupe_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_foret_pnr_regroupe_14, 
                style: style_foret_pnr_regroupe_14,
                popuplayertitle: 'foret_pnr_regroupe',
                interactive: false,
    title: 'foret_pnr_regroupe<br />\
    <img src="styles/legend/foret_pnr_regroupe_14_0.png" /> prive<br />\
    <img src="styles/legend/foret_pnr_regroupe_14_1.png" /> publique<br />' });
var format_faun_flor_15 = new ol.format.GeoJSON();
var features_faun_flor_15 = format_faun_flor_15.readFeatures(json_faun_flor_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faun_flor_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faun_flor_15.addFeatures(features_faun_flor_15);
var lyr_faun_flor_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_faun_flor_15, 
                style: style_faun_flor_15,
                popuplayertitle: 'faun_flor',
                interactive: true,
    title: 'faun_flor<br />\
    <img src="styles/legend/faun_flor_15_0.png" /> faune<br />\
    <img src="styles/legend/faun_flor_15_1.png" /> flore<br />' });
var format_chiros_publique_privee_16 = new ol.format.GeoJSON();
var features_chiros_publique_privee_16 = format_chiros_publique_privee_16.readFeatures(json_chiros_publique_privee_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chiros_publique_privee_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chiros_publique_privee_16.addFeatures(features_chiros_publique_privee_16);
var lyr_chiros_publique_privee_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chiros_publique_privee_16, 
                style: style_chiros_publique_privee_16,
                popuplayertitle: 'chiros_publique_privee',
                interactive: true,
    title: 'chiros_publique_privee<br />\
    <img src="styles/legend/chiros_publique_privee_16_0.png" /> Foret publique<br />\
    <img src="styles/legend/chiros_publique_privee_16_1.png" /> Foret privée<br />' });
var format_sols_dominants_pnr_17 = new ol.format.GeoJSON();
var features_sols_dominants_pnr_17 = format_sols_dominants_pnr_17.readFeatures(json_sols_dominants_pnr_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sols_dominants_pnr_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sols_dominants_pnr_17.addFeatures(features_sols_dominants_pnr_17);
var lyr_sols_dominants_pnr_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sols_dominants_pnr_17, 
                style: style_sols_dominants_pnr_17,
                popuplayertitle: 'sols_dominants_pnr',
                interactive: true,
    title: 'sols_dominants_pnr<br />\
    <img src="styles/legend/sols_dominants_pnr_17_0.png" /> CALCISOLS<br />\
    <img src="styles/legend/sols_dominants_pnr_17_1.png" /> CAMBISOLS<br />\
    <img src="styles/legend/sols_dominants_pnr_17_2.png" /> FLUVISOLS<br />\
    <img src="styles/legend/sols_dominants_pnr_17_3.png" /> LUVISOLS<br />\
    <img src="styles/legend/sols_dominants_pnr_17_4.png" /> PODZOLS<br />' });
var format_essence_foret_regroupe_18 = new ol.format.GeoJSON();
var features_essence_foret_regroupe_18 = format_essence_foret_regroupe_18.readFeatures(json_essence_foret_regroupe_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_essence_foret_regroupe_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_essence_foret_regroupe_18.addFeatures(features_essence_foret_regroupe_18);
var lyr_essence_foret_regroupe_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_essence_foret_regroupe_18, 
                style: style_essence_foret_regroupe_18,
                popuplayertitle: 'essence_foret_regroupe',
                interactive: true,
    title: 'essence_foret_regroupe<br />\
    <img src="styles/legend/essence_foret_regroupe_18_0.png" /> Châtaignier<br />\
    <img src="styles/legend/essence_foret_regroupe_18_1.png" /> Chênes décidus<br />\
    <img src="styles/legend/essence_foret_regroupe_18_2.png" /> Conifères<br />\
    <img src="styles/legend/essence_foret_regroupe_18_3.png" /> Douglas<br />\
    <img src="styles/legend/essence_foret_regroupe_18_4.png" /> Feuillus<br />\
    <img src="styles/legend/essence_foret_regroupe_18_5.png" /> Hêtre<br />\
    <img src="styles/legend/essence_foret_regroupe_18_6.png" /> Mélèze<br />\
    <img src="styles/legend/essence_foret_regroupe_18_7.png" /> Mixte<br />\
    <img src="styles/legend/essence_foret_regroupe_18_8.png" /> NC<br />\
    <img src="styles/legend/essence_foret_regroupe_18_9.png" /> NR<br />\
    <img src="styles/legend/essence_foret_regroupe_18_10.png" /> Peuplier<br />\
    <img src="styles/legend/essence_foret_regroupe_18_11.png" /> Pin laricio, pin noir<br />\
    <img src="styles/legend/essence_foret_regroupe_18_12.png" /> Pin maritime<br />\
    <img src="styles/legend/essence_foret_regroupe_18_13.png" /> Pin sylvestre<br />\
    <img src="styles/legend/essence_foret_regroupe_18_14.png" /> Pins mélangés<br />\
    <img src="styles/legend/essence_foret_regroupe_18_15.png" /> Sapin, épicéa<br />' });
var lyr_natpot_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'natpot<br />\
    <img src="styles/legend/natpot_19_0.png" /> 150<br />\
    <img src="styles/legend/natpot_19_1.png" /> 590<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/natpot_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-107324.266519, 6123673.055465, 50176.548168, 6231151.411685]
        })
    });
var format_limite_pnr_20 = new ol.format.GeoJSON();
var features_limite_pnr_20 = format_limite_pnr_20.readFeatures(json_limite_pnr_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_pnr_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_pnr_20.addFeatures(features_limite_pnr_20);
var lyr_limite_pnr_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_pnr_20, 
                style: style_limite_pnr_20,
                popuplayertitle: 'limite_pnr',
                interactive: false,
                title: '<img src="styles/legend/limite_pnr_20.png" /> limite_pnr'
            });
var group_BIOLOGIE = new ol.layer.Group({
                                layers: [lyr_foret_pnr_regroupe_14,lyr_faun_flor_15,lyr_chiros_publique_privee_16,lyr_sols_dominants_pnr_17,lyr_essence_foret_regroupe_18,lyr_natpot_19,],
                                fold: "open",
                                title: 'BIOLOGIE'});
var group_GESTION = new ol.layer.Group({
                                layers: [lyr_arrete_de_biotope_6,lyr_zps_7,lyr_znieff_type2_8,lyr_zone_natura_2000_9,lyr_sic_10,lyr_plan_gest_11,lyr_ibp_12,lyr_corridor_ecologique_cours_eau_13,],
                                fold: "open",
                                title: 'GESTION'});
var group_USAGES = new ol.layer.Group({
                                layers: [lyr_zone_d_interet_4,lyr_circuits_rando_5,],
                                fold: "open",
                                title: 'USAGES'});
var group_ECONOMIE = new ol.layer.Group({
                                layers: [lyr_economie_epciNombretotaldesalaristousdomaines_2,lyr_economie_communeNombretotaldesalaristousdomaines_3,],
                                fold: "open",
                                title: 'ECONOMIE'});

lyr_ESRISatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_economie_epciNombretotaldesalaristousdomaines_2.setVisible(false);lyr_economie_communeNombretotaldesalaristousdomaines_3.setVisible(false);lyr_zone_d_interet_4.setVisible(false);lyr_circuits_rando_5.setVisible(false);lyr_arrete_de_biotope_6.setVisible(false);lyr_zps_7.setVisible(false);lyr_znieff_type2_8.setVisible(false);lyr_zone_natura_2000_9.setVisible(false);lyr_sic_10.setVisible(false);lyr_plan_gest_11.setVisible(false);lyr_ibp_12.setVisible(false);lyr_corridor_ecologique_cours_eau_13.setVisible(false);lyr_foret_pnr_regroupe_14.setVisible(false);lyr_faun_flor_15.setVisible(false);lyr_chiros_publique_privee_16.setVisible(false);lyr_sols_dominants_pnr_17.setVisible(false);lyr_essence_foret_regroupe_18.setVisible(false);lyr_natpot_19.setVisible(false);lyr_limite_pnr_20.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OpenStreetMap_1,group_ECONOMIE,group_USAGES,group_GESTION,group_BIOLOGIE,lyr_limite_pnr_20];
lyr_economie_epciNombretotaldesalaristousdomaines_2.set('fieldAliases', {'id_eco_epc': 'id_eco_epc', 'nom': 'nom', 'siren_epci': 'siren_epci', 'sa_td21': 'sa_td21', 'sa_sy21': 'sa_sy21', 'sa_sc21': 'sa_sc21', 'sa_pa21': 'sa_pa21', 'et_td21': 'et_td21', 'et_sy21': 'et_sy21', 'et_sc21': 'et_sc21', 'et_pa21': 'et_pa21', 'sa_td17': 'sa_td17', 'sa_sy17': 'sa_sy17', 'sa_sc17': 'sa_sc17', 'sa_pa17': 'sa_pa17', 'et_td17': 'et_td17', 'et_sy17': 'et_sy17', 'et_sc17': 'et_sc17', 'et_pa17': 'et_pa17', 'nb_sa_b21': 'nb_sa_b21', 'tx_sa_b21': 'tx_sa_b21', 'nb_et_b21': 'nb_et_b21', 'tx_et_b21': 'tx_et_b21', 'nb_sa_b17': 'nb_sa_b17', 'tx_sa_b17': 'tx_sa_b17', 'nb_et_b17': 'nb_et_b17', 'tx_et_b17': 'tx_et_b17', 'ev_sa_b_t': 'ev_sa_b_t', 'ev_et_b_t': 'ev_et_b_t', 'tx_sa_sy21': 'tx_sa_sy21', 'tx_sa_sc21': 'tx_sa_sc21', 'tx_sa_pa21': 'tx_sa_pa21', 'tx_et_sy21': 'tx_et_sy21', 'tx_et_sc21': 'tx_et_sc21', 'tx_et_pa21': 'tx_et_pa21', 'tx_sa_sy17': 'tx_sa_sy17', 'tx_sa_sc17': 'tx_sa_sc17', 'tx_sa_pa17': 'tx_sa_pa17', 'tx_et_sy17': 'tx_et_sy17', 'tx_et_sc17': 'tx_et_sc17', 'tx_et_pa17': 'tx_et_pa17', });
lyr_economie_communeNombretotaldesalaristousdomaines_3.set('fieldAliases', {'id_eco_pnr': 'id_eco_pnr', 'nom': 'nom', 'insee_com': 'insee_com', 'sa_td_c21': 'sa_td_c21', 'sa_sy_c21': 'sa_sy_c21', 'sa_sc_c21': 'sa_sc_c21', 'sa_pa_c21': 'sa_pa_c21', 'et_td_c21': 'et_td_c21', 'et_sy_c21': 'et_sy_c21', 'et_sc_c21': 'et_sc_c21', 'et_pa_c21': 'et_pa_c21', 'sa_td_c17': 'sa_td_c17', 'sa_sy_c17': 'sa_sy_c17', 'sa_sc_c17': 'sa_sc_c17', 'sa_pa_c17': 'sa_pa_c17', 'et_td_c17': 'et_td_c17', 'et_sy_c17': 'et_sy_c17', 'et_sc_c17': 'et_sc_c17', 'et_pa_c17': 'et_pa_c17', 'nb_sa_t21': 'nb_sa_t21', 'nb_sa_b21': 'nb_sa_b21', 'tx_sa_b21': 'tx_sa_b21', 'nb_et_t21': 'nb_et_t21', 'nb_et_b21': 'nb_et_b21', 'tx_et_b21': 'tx_et_b21', 'nb_sa_t17': 'nb_sa_t17', 'nb_sa_b17': 'nb_sa_b17', 'tx_sa_b17': 'tx_sa_b17', 'nb_et_t17': 'nb_et_t17', 'nb_et_b17': 'nb_et_b17', 'tx_et_b17': 'tx_et_b17', 'ev_sa_b_t': 'ev_sa_b_t', 'ev_et_b_t': 'ev_et_b_t', 'nb_sa_c21': 'nb_sa_c21', 'nb_sa_c17': 'nb_sa_c17', 'nb_et_c21': 'nb_et_c21', 'nb_et_c17': 'nb_et_c17', 'ev_sa_b_c': 'ev_sa_b_c', 'ev_et_b_c': 'ev_et_b_c', 'sa_sy21': 'sa_sy21', 'sa_sc21': 'sa_sc21', 'sa_pa21': 'sa_pa21', 'tx_sa_sy21': 'tx_sa_sy21', 'tx_sa_sc21': 'tx_sa_sc21', 'et_sy21': 'et_sy21', 'et_sc21': 'et_sc21', 'et_pa21': 'et_pa21', 'tx_et_sy21': 'tx_et_sy21', 'tx_et_sc21': 'tx_et_sc21', 'tx_et_pa21': 'tx_et_pa21', 'sa_sy17': 'sa_sy17', 'sa_sc17': 'sa_sc17', 'sa_pa17': 'sa_pa17', 'tx_sa_pa21': 'tx_sa_pa21', 'tx_sa_sy17': 'tx_sa_sy17', 'tx_sa_sc17': 'tx_sa_sc17', 'tx_sa_pa17': 'tx_sa_pa17', 'et_sy17': 'et_sy17', 'et_sc17': 'et_sc17', 'et_pa17': 'et_pa17', 'tx_et_sy17': 'tx_et_sy17', 'tx_et_sc17': 'tx_et_sc17', 'tx_et_pa17': 'tx_et_pa17', 'lim_pnr': 'lim_pnr', });
lyr_zone_d_interet_4.set('fieldAliases', {'id_zone': 'id_zone', 'categorie': 'categorie', 'nature': 'nature', 'nat_detail': 'nat_detail', 'toponyme': 'toponyme', 'statut_top': 'statut_top', 'importance': 'importance', 'fictif': 'fictif', 'etat': 'etat', 'date_creat': 'date_creat', 'date_maj': 'date_maj', 'acqu_plani': 'acqu_plani', 'prec_plani': 'prec_plani', 'cou_source': 'cou_source', 'type_foret': 'type_foret', 'foret': 'foret', });
lyr_circuits_rando_5.set('fieldAliases', {'id_circuit': 'id_circuit', 'nb_circuit': 'nb_circuit', 'nom_circui': 'nom_circui', 'longueur': 'longueur', 'difficulte': 'difficulte', 'source': 'source', 'long': 'long', 'foret': 'foret', 'type_circu': 'type_circu', 'km': 'km', 'type_foret': 'type_foret', });
lyr_arrete_de_biotope_6.set('fieldAliases', {'id_ar_biot': 'id_ar_biot', 'nom_site': 'nom_site', 'superficie': 'superficie', 'code_dept': 'code_dept', 'nom_dept': 'nom_dept', });
lyr_zps_7.set('fieldAliases', {'id_zps': 'id_zps', 'nom_site': 'nom_site', 'superficie': 'superficie', 'code_dept': 'code_dept', 'nom_dept': 'nom_dept', 'annee': 'annee', });
lyr_znieff_type2_8.set('fieldAliases', {'id_znieff2': 'id_znieff2', 'nom_site': 'nom_site', 'superficie': 'superficie', 'code_dept': 'code_dept', 'nom_dept': 'nom_dept', });
lyr_zone_natura_2000_9.set('fieldAliases', {'id_nat2000': 'id_nat2000', 'nom_site': 'nom_site', 'superficie': 'superficie', 'code_dept': 'code_dept', 'nom_dept': 'nom_dept', });
lyr_sic_10.set('fieldAliases', {'id_sic': 'id_sic', 'nom_site': 'nom_site', 'superficie': 'superficie', 'code_dept': 'code_dept', 'nom_dept': 'nom_dept', 'annee': 'annee', });
lyr_plan_gest_11.set('fieldAliases', {'id_pl_gest': 'id_pl_gest', 'statut': 'statut', 'annee': 'annee', 'superficie': 'superficie', });
lyr_ibp_12.set('fieldAliases', {'id_ibp': 'id_ibp', 'numreleve': 'numreleve', 'date_j': 'date_j', 'surface': 'surface', 'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'ibpgestion': 'ibpgestion', 'ibpcontext': 'ibpcontext', 'foret': 'foret', 'layer': 'layer', });
lyr_corridor_ecologique_cours_eau_13.set('fieldAliases', {'id_srce': 'id_srce', 'nom_corr': 'nom_corr', });
lyr_foret_pnr_regroupe_14.set('fieldAliases', {'id_foret': 'id_foret', 'pub_prive': 'pub_prive', 'libelle': 'libelle', 'surface': 'surface', 'insee_dep': 'insee_dep', 'alt_mean': 'alt_mean', 'alt_min': 'alt_min', 'alt_max': 'alt_max', });
lyr_faun_flor_15.set('fieldAliases', {'id_faunflo': 'id_faunflo', 'libellecad': 'libellecad', 'faun_flor': 'faun_flor', 'descriptio': 'descriptio', 'motsclefsc': 'motsclefsc', 'maitreouvr': 'maitreouvr', 'maitreoeuv': 'maitreoeuv', 'contactpri': 'contactpri', 'libellejeu': 'libellejeu', 'descript_1': 'descript_1', 'objectifje': 'objectifje', 'motsclefsj': 'motsclefsj', 'fournisseu': 'fournisseu', 'producteur': 'producteur', 'observateu': 'observateu', 'nomvernacu': 'nomvernacu', 'cdnom': 'cdnom', 'cdref': 'cdref', 'rangtaxo': 'rangtaxo', 'classe': 'classe', 'ordre': 'ordre', 'famille': 'famille', 'espece': 'espece', 'groupeta_1': 'groupeta_1', 'dateobserv': 'dateobserv', 'annee': 'annee', 'mois': 'mois', 'latitude': 'latitude', 'longitude': 'longitude', 'commune': 'commune', 'codeInseec': 'codeInseec', 'epci': 'epci', 'departemen': 'departemen', 'region': 'region', 'altitudemi': 'altitudemi', 'atitudemax': 'atitudemax', 'codemaille': 'codemaille', 'commentair': 'commentair', 'validateur': 'validateur', 'datectrlna': 'datectrlna', 'protocolev': 'protocolev', });
lyr_chiros_publique_privee_16.set('fieldAliases', {'id_chiro': 'id_chiro', 'observateu': 'observateu', 'source_bib': 'source_bib', 'dates': 'dates', 'nom_com': 'nom_com', 'insee_com': 'insee_com', 'lieu_dit': 'lieu_dit', 'x': 'x', 'y': 'y', 'xl93': 'xl93', 'yl93': 'yl93', 'syst_coord': 'syst_coord', 'espece_ser': 'espece_ser', 'effectif_n': 'effectif_n', 'comm_effec': 'comm_effec', 'categories': 'categories', 'comport': 'comport', 'comport_ma': 'comport_ma', 'habitat': 'habitat', 'commentair': 'commentair', 'prop_intel': 'prop_intel', 'prop_comme': 'prop_comme', 'comment': 'comment', 'enjeu': 'enjeu', 'sensible': 'sensible', 'foret': 'foret', 'cdom_frt': 'cdom_frt', 'methode': 'methode', 'periode': 'periode', 'layer': 'layer', 'path': 'path', });
lyr_sols_dominants_pnr_17.set('fieldAliases', {'id_sol': 'id_sol', 'area': 'area', 'perimeter': 'perimeter', 'soil_': 'soil_', 'soil_id': 'soil_id', 'smu': 'smu', 'wrbdom': 'wrbdom', });
lyr_essence_foret_regroupe_18.set('fieldAliases', {'id_foret_p': 'id_foret_p', 'tfv': 'tfv', 'tfv_g11': 'tfv_g11', 'essence': 'essence', 'surface_m2': 'surface_m2', });
lyr_limite_pnr_20.set('fieldAliases', {'id_lim': 'id_lim', });
lyr_economie_epciNombretotaldesalaristousdomaines_2.set('fieldImages', {'id_eco_epc': 'TextEdit', 'nom': 'TextEdit', 'siren_epci': 'TextEdit', 'sa_td21': 'TextEdit', 'sa_sy21': 'TextEdit', 'sa_sc21': 'TextEdit', 'sa_pa21': 'TextEdit', 'et_td21': 'TextEdit', 'et_sy21': 'TextEdit', 'et_sc21': 'TextEdit', 'et_pa21': 'TextEdit', 'sa_td17': 'TextEdit', 'sa_sy17': 'TextEdit', 'sa_sc17': 'TextEdit', 'sa_pa17': 'TextEdit', 'et_td17': 'TextEdit', 'et_sy17': 'TextEdit', 'et_sc17': 'TextEdit', 'et_pa17': 'TextEdit', 'nb_sa_b21': 'TextEdit', 'tx_sa_b21': 'TextEdit', 'nb_et_b21': 'TextEdit', 'tx_et_b21': 'TextEdit', 'nb_sa_b17': 'TextEdit', 'tx_sa_b17': 'TextEdit', 'nb_et_b17': 'TextEdit', 'tx_et_b17': 'TextEdit', 'ev_sa_b_t': 'TextEdit', 'ev_et_b_t': 'TextEdit', 'tx_sa_sy21': 'TextEdit', 'tx_sa_sc21': 'TextEdit', 'tx_sa_pa21': 'TextEdit', 'tx_et_sy21': 'TextEdit', 'tx_et_sc21': 'TextEdit', 'tx_et_pa21': 'TextEdit', 'tx_sa_sy17': 'TextEdit', 'tx_sa_sc17': 'TextEdit', 'tx_sa_pa17': 'TextEdit', 'tx_et_sy17': 'TextEdit', 'tx_et_sc17': 'TextEdit', 'tx_et_pa17': 'TextEdit', });
lyr_economie_communeNombretotaldesalaristousdomaines_3.set('fieldImages', {'id_eco_pnr': 'TextEdit', 'nom': 'TextEdit', 'insee_com': 'TextEdit', 'sa_td_c21': 'TextEdit', 'sa_sy_c21': 'TextEdit', 'sa_sc_c21': 'TextEdit', 'sa_pa_c21': 'TextEdit', 'et_td_c21': 'TextEdit', 'et_sy_c21': 'TextEdit', 'et_sc_c21': 'TextEdit', 'et_pa_c21': 'TextEdit', 'sa_td_c17': 'TextEdit', 'sa_sy_c17': 'TextEdit', 'sa_sc_c17': 'TextEdit', 'sa_pa_c17': 'TextEdit', 'et_td_c17': 'TextEdit', 'et_sy_c17': 'TextEdit', 'et_sc_c17': 'TextEdit', 'et_pa_c17': 'TextEdit', 'nb_sa_t21': 'TextEdit', 'nb_sa_b21': 'TextEdit', 'tx_sa_b21': 'TextEdit', 'nb_et_t21': 'TextEdit', 'nb_et_b21': 'TextEdit', 'tx_et_b21': 'TextEdit', 'nb_sa_t17': 'TextEdit', 'nb_sa_b17': 'TextEdit', 'tx_sa_b17': 'TextEdit', 'nb_et_t17': 'TextEdit', 'nb_et_b17': 'TextEdit', 'tx_et_b17': 'TextEdit', 'ev_sa_b_t': 'TextEdit', 'ev_et_b_t': 'TextEdit', 'nb_sa_c21': 'TextEdit', 'nb_sa_c17': 'TextEdit', 'nb_et_c21': 'TextEdit', 'nb_et_c17': 'TextEdit', 'ev_sa_b_c': 'TextEdit', 'ev_et_b_c': 'TextEdit', 'sa_sy21': 'TextEdit', 'sa_sc21': 'TextEdit', 'sa_pa21': 'TextEdit', 'tx_sa_sy21': 'TextEdit', 'tx_sa_sc21': 'TextEdit', 'et_sy21': 'TextEdit', 'et_sc21': 'TextEdit', 'et_pa21': 'TextEdit', 'tx_et_sy21': 'TextEdit', 'tx_et_sc21': 'TextEdit', 'tx_et_pa21': 'TextEdit', 'sa_sy17': 'TextEdit', 'sa_sc17': 'TextEdit', 'sa_pa17': 'TextEdit', 'tx_sa_pa21': 'TextEdit', 'tx_sa_sy17': 'TextEdit', 'tx_sa_sc17': 'TextEdit', 'tx_sa_pa17': 'TextEdit', 'et_sy17': 'TextEdit', 'et_sc17': 'TextEdit', 'et_pa17': 'TextEdit', 'tx_et_sy17': 'TextEdit', 'tx_et_sc17': 'TextEdit', 'tx_et_pa17': 'TextEdit', 'lim_pnr': 'TextEdit', });
lyr_zone_d_interet_4.set('fieldImages', {'id_zone': 'TextEdit', 'categorie': 'TextEdit', 'nature': 'TextEdit', 'nat_detail': 'TextEdit', 'toponyme': 'TextEdit', 'statut_top': 'TextEdit', 'importance': 'TextEdit', 'fictif': 'TextEdit', 'etat': 'TextEdit', 'date_creat': 'TextEdit', 'date_maj': 'TextEdit', 'acqu_plani': 'TextEdit', 'prec_plani': 'TextEdit', 'cou_source': 'TextEdit', 'type_foret': 'TextEdit', 'foret': 'TextEdit', });
lyr_circuits_rando_5.set('fieldImages', {'id_circuit': 'TextEdit', 'nb_circuit': 'TextEdit', 'nom_circui': 'TextEdit', 'longueur': 'TextEdit', 'difficulte': 'TextEdit', 'source': 'TextEdit', 'long': 'TextEdit', 'foret': 'TextEdit', 'type_circu': 'TextEdit', 'km': 'TextEdit', 'type_foret': 'TextEdit', });
lyr_arrete_de_biotope_6.set('fieldImages', {'id_ar_biot': 'TextEdit', 'nom_site': 'TextEdit', 'superficie': 'TextEdit', 'code_dept': 'TextEdit', 'nom_dept': 'TextEdit', });
lyr_zps_7.set('fieldImages', {'id_zps': 'TextEdit', 'nom_site': 'TextEdit', 'superficie': 'TextEdit', 'code_dept': 'TextEdit', 'nom_dept': 'TextEdit', 'annee': 'TextEdit', });
lyr_znieff_type2_8.set('fieldImages', {'id_znieff2': 'TextEdit', 'nom_site': 'TextEdit', 'superficie': 'TextEdit', 'code_dept': 'TextEdit', 'nom_dept': 'TextEdit', });
lyr_zone_natura_2000_9.set('fieldImages', {'id_nat2000': 'TextEdit', 'nom_site': 'TextEdit', 'superficie': 'TextEdit', 'code_dept': 'TextEdit', 'nom_dept': 'TextEdit', });
lyr_sic_10.set('fieldImages', {'id_sic': 'TextEdit', 'nom_site': 'TextEdit', 'superficie': 'TextEdit', 'code_dept': 'TextEdit', 'nom_dept': 'TextEdit', 'annee': 'TextEdit', });
lyr_plan_gest_11.set('fieldImages', {'id_pl_gest': 'TextEdit', 'statut': 'TextEdit', 'annee': 'TextEdit', 'superficie': 'TextEdit', });
lyr_ibp_12.set('fieldImages', {'id_ibp': 'TextEdit', 'numreleve': 'TextEdit', 'date_j': 'TextEdit', 'surface': 'TextEdit', 'a': 'TextEdit', 'b': 'TextEdit', 'c': 'TextEdit', 'd': 'TextEdit', 'e': 'TextEdit', 'f': 'TextEdit', 'g': 'TextEdit', 'h': 'TextEdit', 'i': 'TextEdit', 'j': 'TextEdit', 'ibpgestion': 'TextEdit', 'ibpcontext': 'TextEdit', 'foret': 'TextEdit', 'layer': 'TextEdit', });
lyr_corridor_ecologique_cours_eau_13.set('fieldImages', {'id_srce': 'TextEdit', 'nom_corr': 'TextEdit', });
lyr_foret_pnr_regroupe_14.set('fieldImages', {'id_foret': 'TextEdit', 'pub_prive': 'TextEdit', 'libelle': 'TextEdit', 'surface': 'TextEdit', 'insee_dep': 'TextEdit', 'alt_mean': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', });
lyr_faun_flor_15.set('fieldImages', {'id_faunflo': 'TextEdit', 'libellecad': 'TextEdit', 'faun_flor': 'TextEdit', 'descriptio': 'TextEdit', 'motsclefsc': 'TextEdit', 'maitreouvr': 'TextEdit', 'maitreoeuv': 'TextEdit', 'contactpri': 'TextEdit', 'libellejeu': 'TextEdit', 'descript_1': 'TextEdit', 'objectifje': 'TextEdit', 'motsclefsj': 'TextEdit', 'fournisseu': 'TextEdit', 'producteur': 'TextEdit', 'observateu': 'TextEdit', 'nomvernacu': 'TextEdit', 'cdnom': 'TextEdit', 'cdref': 'TextEdit', 'rangtaxo': 'TextEdit', 'classe': 'TextEdit', 'ordre': 'TextEdit', 'famille': 'TextEdit', 'espece': 'TextEdit', 'groupeta_1': 'TextEdit', 'dateobserv': 'TextEdit', 'annee': 'TextEdit', 'mois': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'commune': 'TextEdit', 'codeInseec': 'TextEdit', 'epci': 'TextEdit', 'departemen': 'TextEdit', 'region': 'TextEdit', 'altitudemi': 'TextEdit', 'atitudemax': 'TextEdit', 'codemaille': 'TextEdit', 'commentair': 'TextEdit', 'validateur': 'TextEdit', 'datectrlna': 'DateTime', 'protocolev': 'TextEdit', });
lyr_chiros_publique_privee_16.set('fieldImages', {'id_chiro': 'TextEdit', 'observateu': 'TextEdit', 'source_bib': 'TextEdit', 'dates': 'TextEdit', 'nom_com': 'TextEdit', 'insee_com': 'Range', 'lieu_dit': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'xl93': 'TextEdit', 'yl93': 'TextEdit', 'syst_coord': 'TextEdit', 'espece_ser': 'TextEdit', 'effectif_n': 'TextEdit', 'comm_effec': 'TextEdit', 'categories': 'TextEdit', 'comport': 'TextEdit', 'comport_ma': 'TextEdit', 'habitat': 'TextEdit', 'commentair': 'TextEdit', 'prop_intel': 'TextEdit', 'prop_comme': 'TextEdit', 'comment': 'TextEdit', 'enjeu': 'TextEdit', 'sensible': 'TextEdit', 'foret': 'TextEdit', 'cdom_frt': 'TextEdit', 'methode': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_sols_dominants_pnr_17.set('fieldImages', {'id_sol': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'soil_': 'TextEdit', 'soil_id': 'TextEdit', 'smu': 'TextEdit', 'wrbdom': 'TextEdit', });
lyr_essence_foret_regroupe_18.set('fieldImages', {'id_foret_p': 'TextEdit', 'tfv': 'TextEdit', 'tfv_g11': 'TextEdit', 'essence': 'TextEdit', 'surface_m2': 'TextEdit', });
lyr_limite_pnr_20.set('fieldImages', {'id_lim': 'TextEdit', });
lyr_economie_epciNombretotaldesalaristousdomaines_2.set('fieldLabels', {'id_eco_epc': 'inline label - visible with data', 'nom': 'inline label - visible with data', 'siren_epci': 'inline label - visible with data', 'sa_td21': 'inline label - visible with data', 'sa_sy21': 'inline label - visible with data', 'sa_sc21': 'inline label - visible with data', 'sa_pa21': 'inline label - visible with data', 'et_td21': 'inline label - visible with data', 'et_sy21': 'inline label - visible with data', 'et_sc21': 'inline label - visible with data', 'et_pa21': 'inline label - visible with data', 'sa_td17': 'inline label - visible with data', 'sa_sy17': 'inline label - visible with data', 'sa_sc17': 'inline label - visible with data', 'sa_pa17': 'inline label - visible with data', 'et_td17': 'inline label - visible with data', 'et_sy17': 'inline label - visible with data', 'et_sc17': 'inline label - visible with data', 'et_pa17': 'inline label - visible with data', 'nb_sa_b21': 'inline label - visible with data', 'tx_sa_b21': 'inline label - visible with data', 'nb_et_b21': 'inline label - visible with data', 'tx_et_b21': 'inline label - visible with data', 'nb_sa_b17': 'inline label - visible with data', 'tx_sa_b17': 'inline label - visible with data', 'nb_et_b17': 'inline label - visible with data', 'tx_et_b17': 'inline label - visible with data', 'ev_sa_b_t': 'inline label - visible with data', 'ev_et_b_t': 'inline label - visible with data', 'tx_sa_sy21': 'inline label - visible with data', 'tx_sa_sc21': 'inline label - visible with data', 'tx_sa_pa21': 'inline label - visible with data', 'tx_et_sy21': 'inline label - visible with data', 'tx_et_sc21': 'inline label - visible with data', 'tx_et_pa21': 'inline label - visible with data', 'tx_sa_sy17': 'inline label - visible with data', 'tx_sa_sc17': 'inline label - visible with data', 'tx_sa_pa17': 'inline label - visible with data', 'tx_et_sy17': 'inline label - visible with data', 'tx_et_sc17': 'inline label - visible with data', 'tx_et_pa17': 'inline label - visible with data', });
lyr_economie_communeNombretotaldesalaristousdomaines_3.set('fieldLabels', {'id_eco_pnr': 'inline label - visible with data', 'nom': 'inline label - visible with data', 'insee_com': 'inline label - visible with data', 'sa_td_c21': 'inline label - visible with data', 'sa_sy_c21': 'inline label - visible with data', 'sa_sc_c21': 'inline label - visible with data', 'sa_pa_c21': 'inline label - visible with data', 'et_td_c21': 'inline label - visible with data', 'et_sy_c21': 'inline label - visible with data', 'et_sc_c21': 'inline label - visible with data', 'et_pa_c21': 'inline label - visible with data', 'sa_td_c17': 'inline label - visible with data', 'sa_sy_c17': 'inline label - visible with data', 'sa_sc_c17': 'inline label - visible with data', 'sa_pa_c17': 'inline label - visible with data', 'et_td_c17': 'inline label - visible with data', 'et_sy_c17': 'inline label - visible with data', 'et_sc_c17': 'inline label - visible with data', 'et_pa_c17': 'inline label - visible with data', 'nb_sa_t21': 'inline label - visible with data', 'nb_sa_b21': 'inline label - visible with data', 'tx_sa_b21': 'inline label - visible with data', 'nb_et_t21': 'inline label - visible with data', 'nb_et_b21': 'inline label - visible with data', 'tx_et_b21': 'inline label - visible with data', 'nb_sa_t17': 'inline label - visible with data', 'nb_sa_b17': 'inline label - visible with data', 'tx_sa_b17': 'inline label - visible with data', 'nb_et_t17': 'inline label - visible with data', 'nb_et_b17': 'inline label - visible with data', 'tx_et_b17': 'inline label - visible with data', 'ev_sa_b_t': 'inline label - visible with data', 'ev_et_b_t': 'inline label - visible with data', 'nb_sa_c21': 'inline label - visible with data', 'nb_sa_c17': 'inline label - visible with data', 'nb_et_c21': 'inline label - visible with data', 'nb_et_c17': 'inline label - visible with data', 'ev_sa_b_c': 'inline label - visible with data', 'ev_et_b_c': 'inline label - visible with data', 'sa_sy21': 'inline label - visible with data', 'sa_sc21': 'inline label - visible with data', 'sa_pa21': 'inline label - visible with data', 'tx_sa_sy21': 'inline label - visible with data', 'tx_sa_sc21': 'inline label - visible with data', 'et_sy21': 'inline label - visible with data', 'et_sc21': 'inline label - visible with data', 'et_pa21': 'inline label - visible with data', 'tx_et_sy21': 'inline label - visible with data', 'tx_et_sc21': 'inline label - visible with data', 'tx_et_pa21': 'inline label - visible with data', 'sa_sy17': 'inline label - visible with data', 'sa_sc17': 'inline label - visible with data', 'sa_pa17': 'inline label - visible with data', 'tx_sa_pa21': 'inline label - visible with data', 'tx_sa_sy17': 'inline label - visible with data', 'tx_sa_sc17': 'inline label - visible with data', 'tx_sa_pa17': 'inline label - visible with data', 'et_sy17': 'inline label - visible with data', 'et_sc17': 'inline label - visible with data', 'et_pa17': 'inline label - visible with data', 'tx_et_sy17': 'inline label - visible with data', 'tx_et_sc17': 'inline label - visible with data', 'tx_et_pa17': 'inline label - visible with data', 'lim_pnr': 'inline label - visible with data', });
lyr_zone_d_interet_4.set('fieldLabels', {'id_zone': 'inline label - visible with data', 'categorie': 'inline label - visible with data', 'nature': 'inline label - visible with data', 'nat_detail': 'inline label - visible with data', 'toponyme': 'inline label - visible with data', 'statut_top': 'inline label - visible with data', 'importance': 'inline label - visible with data', 'fictif': 'inline label - visible with data', 'etat': 'inline label - visible with data', 'date_creat': 'inline label - visible with data', 'date_maj': 'inline label - visible with data', 'acqu_plani': 'inline label - visible with data', 'prec_plani': 'inline label - visible with data', 'cou_source': 'inline label - visible with data', 'type_foret': 'inline label - visible with data', 'foret': 'inline label - visible with data', });
lyr_circuits_rando_5.set('fieldLabels', {'id_circuit': 'inline label - visible with data', 'nb_circuit': 'inline label - visible with data', 'nom_circui': 'inline label - visible with data', 'longueur': 'inline label - visible with data', 'difficulte': 'inline label - visible with data', 'source': 'inline label - visible with data', 'long': 'inline label - visible with data', 'foret': 'inline label - visible with data', 'type_circu': 'inline label - visible with data', 'km': 'inline label - visible with data', 'type_foret': 'inline label - visible with data', });
lyr_arrete_de_biotope_6.set('fieldLabels', {'id_ar_biot': 'inline label - visible with data', 'nom_site': 'inline label - visible with data', 'superficie': 'inline label - visible with data', 'code_dept': 'inline label - visible with data', 'nom_dept': 'inline label - visible with data', });
lyr_zps_7.set('fieldLabels', {'id_zps': 'inline label - visible with data', 'nom_site': 'inline label - visible with data', 'superficie': 'inline label - visible with data', 'code_dept': 'inline label - visible with data', 'nom_dept': 'inline label - visible with data', 'annee': 'inline label - visible with data', });
lyr_znieff_type2_8.set('fieldLabels', {'id_znieff2': 'inline label - visible with data', 'nom_site': 'inline label - visible with data', 'superficie': 'inline label - visible with data', 'code_dept': 'inline label - visible with data', 'nom_dept': 'inline label - visible with data', });
lyr_zone_natura_2000_9.set('fieldLabels', {'id_nat2000': 'inline label - visible with data', 'nom_site': 'inline label - visible with data', 'superficie': 'inline label - visible with data', 'code_dept': 'inline label - visible with data', 'nom_dept': 'inline label - visible with data', });
lyr_sic_10.set('fieldLabels', {'id_sic': 'inline label - visible with data', 'nom_site': 'inline label - visible with data', 'superficie': 'inline label - visible with data', 'code_dept': 'inline label - visible with data', 'nom_dept': 'inline label - visible with data', 'annee': 'inline label - visible with data', });
lyr_plan_gest_11.set('fieldLabels', {'id_pl_gest': 'inline label - visible with data', 'statut': 'inline label - visible with data', 'annee': 'inline label - visible with data', 'superficie': 'inline label - visible with data', });
lyr_ibp_12.set('fieldLabels', {'id_ibp': 'inline label - visible with data', 'numreleve': 'inline label - visible with data', 'date_j': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'a': 'inline label - visible with data', 'b': 'inline label - visible with data', 'c': 'inline label - visible with data', 'd': 'inline label - visible with data', 'e': 'inline label - visible with data', 'f': 'inline label - visible with data', 'g': 'inline label - visible with data', 'h': 'inline label - visible with data', 'i': 'inline label - visible with data', 'j': 'inline label - visible with data', 'ibpgestion': 'inline label - visible with data', 'ibpcontext': 'inline label - visible with data', 'foret': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_corridor_ecologique_cours_eau_13.set('fieldLabels', {'id_srce': 'inline label - visible with data', 'nom_corr': 'inline label - visible with data', });
lyr_foret_pnr_regroupe_14.set('fieldLabels', {'id_foret': 'inline label - visible with data', 'pub_prive': 'inline label - visible with data', 'libelle': 'inline label - visible with data', 'surface': 'inline label - visible with data', 'insee_dep': 'inline label - visible with data', 'alt_mean': 'inline label - visible with data', 'alt_min': 'inline label - visible with data', 'alt_max': 'inline label - visible with data', });
lyr_faun_flor_15.set('fieldLabels', {'id_faunflo': 'inline label - visible with data', 'libellecad': 'inline label - visible with data', 'faun_flor': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'motsclefsc': 'inline label - visible with data', 'maitreouvr': 'inline label - visible with data', 'maitreoeuv': 'inline label - visible with data', 'contactpri': 'inline label - visible with data', 'libellejeu': 'inline label - visible with data', 'descript_1': 'inline label - visible with data', 'objectifje': 'inline label - visible with data', 'motsclefsj': 'inline label - visible with data', 'fournisseu': 'inline label - visible with data', 'producteur': 'inline label - visible with data', 'observateu': 'inline label - visible with data', 'nomvernacu': 'inline label - visible with data', 'cdnom': 'inline label - visible with data', 'cdref': 'inline label - visible with data', 'rangtaxo': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'ordre': 'inline label - visible with data', 'famille': 'inline label - visible with data', 'espece': 'inline label - visible with data', 'groupeta_1': 'inline label - visible with data', 'dateobserv': 'inline label - visible with data', 'annee': 'inline label - visible with data', 'mois': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'commune': 'inline label - visible with data', 'codeInseec': 'inline label - visible with data', 'epci': 'inline label - visible with data', 'departemen': 'inline label - visible with data', 'region': 'inline label - visible with data', 'altitudemi': 'inline label - visible with data', 'atitudemax': 'inline label - visible with data', 'codemaille': 'inline label - visible with data', 'commentair': 'inline label - visible with data', 'validateur': 'inline label - visible with data', 'datectrlna': 'inline label - visible with data', 'protocolev': 'inline label - visible with data', });
lyr_chiros_publique_privee_16.set('fieldLabels', {'id_chiro': 'inline label - visible with data', 'observateu': 'inline label - visible with data', 'source_bib': 'inline label - visible with data', 'dates': 'inline label - visible with data', 'nom_com': 'inline label - visible with data', 'insee_com': 'inline label - visible with data', 'lieu_dit': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'xl93': 'inline label - visible with data', 'yl93': 'inline label - visible with data', 'syst_coord': 'inline label - visible with data', 'espece_ser': 'inline label - visible with data', 'effectif_n': 'inline label - visible with data', 'comm_effec': 'inline label - visible with data', 'categories': 'inline label - visible with data', 'comport': 'inline label - visible with data', 'comport_ma': 'inline label - visible with data', 'habitat': 'inline label - visible with data', 'commentair': 'inline label - visible with data', 'prop_intel': 'inline label - visible with data', 'prop_comme': 'inline label - visible with data', 'comment': 'inline label - visible with data', 'enjeu': 'inline label - visible with data', 'sensible': 'inline label - visible with data', 'foret': 'inline label - visible with data', 'cdom_frt': 'inline label - visible with data', 'methode': 'inline label - visible with data', 'periode': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_sols_dominants_pnr_17.set('fieldLabels', {'id_sol': 'inline label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'soil_': 'inline label - visible with data', 'soil_id': 'inline label - visible with data', 'smu': 'inline label - visible with data', 'wrbdom': 'inline label - visible with data', });
lyr_essence_foret_regroupe_18.set('fieldLabels', {'id_foret_p': 'inline label - visible with data', 'tfv': 'inline label - visible with data', 'tfv_g11': 'inline label - visible with data', 'essence': 'inline label - visible with data', 'surface_m2': 'inline label - visible with data', });
lyr_limite_pnr_20.set('fieldLabels', {'id_lim': 'inline label - visible with data', });
lyr_limite_pnr_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});