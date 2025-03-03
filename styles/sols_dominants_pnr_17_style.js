var size = 0;
var placement = 'point';
function categories_sols_dominants_pnr_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'CALCISOLS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.33725490196078434)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(203,91,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CAMBISOLS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.33725490196078434)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(128,229,160,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FLUVISOLS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.33725490196078434)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(135,95,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LUVISOLS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.33725490196078434)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(214,119,184,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PODZOLS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.33725490196078434)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(84,177,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_sols_dominants_pnr_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("wrbdom");
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
    
    var style = categories_sols_dominants_pnr_17(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
