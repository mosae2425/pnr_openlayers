var size = 0;
var placement = 'point';
function categories_zone_d_interet_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Administratif ou militaire':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(255,0,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Culture et loisirs':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(51,210,62,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gestion des eaux':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(171,75,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Industriel et commercial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(222,88,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Religieux':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(13,200,184,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sport':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(177,206,61,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_zone_d_interet_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("categorie");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_zone_d_interet_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
