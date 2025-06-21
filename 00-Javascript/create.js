function createRowElement(visualization_id, row_id, row_element_id) {

    let rowElement = document.createElement('div');

    rowElement.id = row_element_id;
    rowElement.className = 'row-element';

    if ('width' in eval(visualization_id).visualizationRowDetails[row_id][row_element_id]) {
        rowElement.style.width = eval(visualization_id).visualizationRowDetails[row_id][row_element_id].width;
    };

    if ('justifyContent' in eval(visualization_id).visualizationRowDetails[row_id][row_element_id]) {
        rowElement.style.justifyContent = eval(visualization_id).visualizationRowDetails[row_id][row_element_id].justifyContent;
    };

    if ('flexGrow' in eval(visualization_id).visualizationRowDetails[row_id][row_element_id]) {
        rowElement.style.flexGrow = eval(visualization_id).visualizationRowDetails[row_id][row_element_id].flexGrow;
    };

    return rowElement;
};

function createTextbox(visualization_id, textbox_id) {
    let textBox = document.createElement('div');

    textBox.id = textbox_id;
    textBox.className = 'text-box';
    textBox.style.textAlign = eval(visualization_id).textBoxDetails[textbox_id].textAlign;

    let textBoxContent = document.createElement('span');
    textBox.appendChild(textBoxContent);
    //textBoxContent.setAttribute('contenteditable', 'true');
    textBoxContent.style.display = 'block';
    textBoxContent.style.color = eval(visualization_id).textBoxDetails[textbox_id].color;
    textBoxContent.style.fontFamily = eval(visualization_id).textBoxDetails[textbox_id].fontFamily;
    textBoxContent.style.fontSize = eval(visualization_id).textBoxDetails[textbox_id].fontSize;
    textBoxContent.style.fontWeight = eval(visualization_id).textBoxDetails[textbox_id].fontWeight;
    textBoxContent.style.overflowWrap = 'break-word';
    textBoxContent.innerHTML = eval(visualization_id).textBoxDetails[textbox_id].string;

    return textBox;
};

function createCartesianGraphOverlay(visualization_id, cartesian_graph_id) {
    let cartesianGraphOverlay = document.createElement('div');
    cartesianGraphOverlay.setAttribute('class', 'cartesian-graph-overlay');

    cartesianGraphOverlay.style.position = 'absolute';
    cartesianGraphOverlay.style.height = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].height + 'px';

    let cartesianGraphBodyOverlay = createCartesianGraphBodyOverlay(visualization_id, cartesian_graph_id);
    cartesianGraphOverlay.appendChild(cartesianGraphBodyOverlay);

    let axesOverlay = createAxesOverlay(visualization_id, cartesian_graph_id, cartesianGraphBodyOverlay);
    cartesianGraphOverlay.appendChild(axesOverlay);

    return cartesianGraphOverlay;
};

function createCartesianGraphBodyOverlay(visualization_id, cartesian_graph_id) {
    let cartesianGraphBodyOverlay = document.createElement('div');
    cartesianGraphBodyOverlay.setAttribute('class', 'cartesian-graph-body-overlay');

    cartesianGraphBodyOverlay.style.position = 'absolute';

    for (const annotation_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails) {
        let annotationOverlay = createPointAnnotationOverlay(visualization_id, cartesian_graph_id, annotation_id);
        cartesianGraphBodyOverlay.appendChild(annotationOverlay);
    };


    for (const annotation_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails) {
        let annotationOverlay = createTimeSpanAnnotationOverlay(visualization_id, cartesian_graph_id, annotation_id);
        cartesianGraphBodyOverlay.appendChild(annotationOverlay);
    };


    return cartesianGraphBodyOverlay;
};



function createTimeSpanAnnotationOverlay(visualization_id, cartesian_graph_id, annotation_id) {
    let annotationOverlay = document.createElement('span');
    annotationOverlay.setAttribute('class', 'time-span-annotation-overlay');
    //annotationOverlay.setAttribute('contenteditable', 'true');

    annotationOverlay.style.display = 'inline-block';
    annotationOverlay.style.position = 'absolute';
    annotationOverlay.style.overflow = 'hidden';
    annotationOverlay.style.textOverflow = 'ellipsis';
    annotationOverlay.style.whiteSpace = 'no-wrap';

    annotationOverlay.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].fontSize;
    annotationOverlay.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].fontFamily;

    annotationOverlay.innerHTML = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].string;

    return annotationOverlay;
};




function createPointAnnotationOverlay(visualization_id, cartesian_graph_id, annotation_id) {
    let annotationOverlay = document.createElement('span');
    annotationOverlay.setAttribute('class', 'point-annotation-overlay');
    //annotationOverlay.setAttribute('contenteditable', 'true');

    annotationOverlay.style.textAlign = 'left';
    annotationOverlay.style.display = 'inline-block';
    annotationOverlay.style.position = 'absolute';
    annotationOverlay.style.overflow = 'hidden';
    annotationOverlay.style.textOverflow = 'ellipsis';
    annotationOverlay.style.textWrapMode = 'wrap';
    annotationOverlay.style.whiteSpaceCollapse = 'preserve';

    annotationOverlay.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].fontSize;
    annotationOverlay.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].fontFamily;

    annotationOverlay.dataset.horizontalLowerBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].horizontalBounds.lowerBound;
    annotationOverlay.dataset.horizontalUpperBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].horizontalBounds.upperBound;
    annotationOverlay.dataset.verticalLowerBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].verticalBounds.lowerBound;
    annotationOverlay.dataset.verticalUpperBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].verticalBounds.upperBound;
    annotationOverlay.dataset.calloutAttachesVertical = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].calloutAttaches.verticalPosition;
    annotationOverlay.dataset.calloutAttachesHorizontal = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].calloutAttaches.horizontalPosition;

    annotationOverlay.innerHTML = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].string;

    return annotationOverlay;
};

function createAxesOverlay(visualization_id, cartesian_graph_id, cartesianGraphBodyOverlay) {
    let axesOverlay = document.createElement('div');
    axesOverlay.setAttribute('class', 'cartesian-graph-axes-overlay');

    axesOverlay.style.width = '100%';
    axesOverlay.style.height = '100%';

    for (const verticalAxisID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails) {
        let vertical_axis_overlay = createVerticalAxisOverlay(visualization_id, cartesian_graph_id, verticalAxisID, cartesianGraphBodyOverlay);
        axesOverlay.appendChild(vertical_axis_overlay);
    };


    for (const horizontalAxisID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails) {
        let horizontal_axis_overlay = createHorizontalAxisOverlay(visualization_id, cartesian_graph_id, horizontalAxisID, cartesianGraphBodyOverlay);
        axesOverlay.appendChild(horizontal_axis_overlay);
    };

    return axesOverlay;
};


function createVerticalAxisLabelOverlay(visualization_id, cartesian_graph_id, verticalAxisID) {

    let vertical_axis_label_overlay = document.createElement('div');

    vertical_axis_label_overlay.style.display = 'inline-block';
    vertical_axis_label_overlay.style.position = 'absolute';
    vertical_axis_label_overlay.setAttribute('class', 'vertical-axis-label-overlay');


    let vertical_axis_label_spacer = document.createElement('span');
    vertical_axis_label_overlay.appendChild(vertical_axis_label_spacer);
    vertical_axis_label_spacer.innerHTML = '&nbsp;';



    let vertical_axis_label = document.createElement('span');
    vertical_axis_label_overlay.appendChild(vertical_axis_label);
    //vertical_axis_label.setAttribute('contenteditable', 'true');
    vertical_axis_label.setAttribute('class', 'vertical-axis-label');

    vertical_axis_label.style.textAlign = 'left';
    vertical_axis_label.style.whiteSpace = 'nowrap';
    vertical_axis_label_spacer.style.textAlign = 'left';
    vertical_axis_label_spacer.style.whiteSpace = 'pre';

    vertical_axis_label.innerHTML = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[verticalAxisID].verticalAxisLabelDetails.string;
    vertical_axis_label.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[verticalAxisID].verticalAxisLabelDetails.fontSize;
    vertical_axis_label.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[verticalAxisID].verticalAxisLabelDetails.fontFamily;
    vertical_axis_label_spacer.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[verticalAxisID].verticalAxisLabelDetails.fontFamily;
    vertical_axis_label_spacer.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[verticalAxisID].verticalAxisLabelDetails.fontSize;

    return vertical_axis_label_overlay
};


function createVerticalAxisOverlay(visualization_id, cartesian_graph_id, vertical_axis_id, cartesian_graph_body) {
    let verticalAxisOverlay = document.createElement('div');
    verticalAxisOverlay.setAttribute('class', 'vertical-axis-overlay');

    verticalAxisOverlay.style.height = '100%';
    verticalAxisOverlay.style.position = 'absolute';

    verticalAxisOverlay.dataset.horizontalBuffer = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].horizontalBuffer;
    verticalAxisOverlay.dataset.axisId = vertical_axis_id;


    for (const verticalTickLabelGroupID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails) {
        let verticalTickLabelGroupOverlay = createVerticalTickLabelGroupOverlay(visualization_id, cartesian_graph_id, vertical_axis_id, verticalTickLabelGroupID);
        verticalAxisOverlay.appendChild(verticalTickLabelGroupOverlay);
    };

    let vertical_axis_label_overlay = createVerticalAxisLabelOverlay(visualization_id, cartesian_graph_id, vertical_axis_id);
    verticalAxisOverlay.appendChild(vertical_axis_label_overlay);

    return verticalAxisOverlay;
};

function createVerticalTickLabelGroupOverlay(visualization_id, cartesian_graph_id, vertical_axis_id, verticalTickLabelGroupID) {
    let verticalTickLabelGroupOverlay = document.createElement('div');
    verticalTickLabelGroupOverlay.setAttribute('class', 'vertical-tick-label-group-overlay');

    verticalTickLabelGroupOverlay.style.height = '100%';

    for (const verticalTickLabelID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails[verticalTickLabelGroupID]) {
        let verticalTickLabelOverlay = createVerticalTickLabelOverlay(visualization_id, cartesian_graph_id, vertical_axis_id, verticalTickLabelGroupID, verticalTickLabelID);
        verticalTickLabelGroupOverlay.appendChild(verticalTickLabelOverlay);
    };

    return verticalTickLabelGroupOverlay;
};

function createVerticalTickLabelOverlay(visualization_id, cartesian_graph_id, vertical_axis_id, verticalTickLabelGroupID, verticalTickLabelID) {

    let verticalTickLabelOverlay = document.createElement('span');

    verticalTickLabelOverlay.setAttribute('class', 'vertical-tick-label-overlay');

    //verticalTickLabelOverlay.setAttribute('contenteditable', 'true');

    verticalTickLabelOverlay.dataset.value = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails[verticalTickLabelGroupID][verticalTickLabelID].value;


    verticalTickLabelOverlay.style.textAlign = 'right';
    verticalTickLabelOverlay.style.display = 'inline-block';
    verticalTickLabelOverlay.style.position = 'absolute';
    verticalTickLabelOverlay.style.right = '0px';
    verticalTickLabelOverlay.style.whiteSpace = 'nowrap';

    verticalTickLabelOverlay.innerHTML = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails[verticalTickLabelGroupID][verticalTickLabelID].string;
    verticalTickLabelOverlay.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails[verticalTickLabelGroupID][verticalTickLabelID].fontSize;
    verticalTickLabelOverlay.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].verticalTickLabelGroupDetails[verticalTickLabelGroupID][verticalTickLabelID].fontFamily;

    return verticalTickLabelOverlay;
};

function createHorizontalAxisOverlay(visualization_id, cartesian_graph_id, horizontal_axis_id, cartesian_graph_body) {
    let horizontalAxisOverlay = document.createElement('div');
    horizontalAxisOverlay.setAttribute('class', 'horizontal-axis-overlay');

    horizontalAxisOverlay.style.position = 'absolute';

    horizontalAxisOverlay.dataset.verticalBuffer = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].verticalBuffer;

    for (const horizontalTickLabelGroupID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails) {
        let horizontalTickLabelGroupOverlay = createHorizontalTickLabelGroupOverlay(visualization_id, cartesian_graph_id, horizontal_axis_id, horizontalTickLabelGroupID);
        horizontalAxisOverlay.appendChild(horizontalTickLabelGroupOverlay);
    };

    return horizontalAxisOverlay;
};

function createHorizontalTickLabelGroupOverlay(visualization_id, cartesian_graph_id, horizontal_axis_id, horizontalTickLabelGroupID) {
    let horizontalTickLabelGroupOverlay = document.createElement('div');
    horizontalTickLabelGroupOverlay.setAttribute('class', 'horizontal-tick-label-group-overlay');
    horizontalTickLabelGroupOverlay.setAttribute('id', horizontalTickLabelGroupID);

    horizontalTickLabelGroupOverlay.style.position = 'absolute';

    for (const horizontalTickLabelID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails[horizontalTickLabelGroupID]) {
        let horizontalTickLabelOverlay = createHorizontalTickLabelOverlay(visualization_id, cartesian_graph_id, horizontal_axis_id, horizontalTickLabelGroupID, horizontalTickLabelID);
        horizontalTickLabelGroupOverlay.appendChild(horizontalTickLabelOverlay);
    };

    return horizontalTickLabelGroupOverlay;
};

function createHorizontalTickLabelOverlay(visualization_id, cartesian_graph_id, horizontal_axis_id, horizontalTickLabelGroupID, horizontalTickLabelID) {

    let horizontalTickLabelOverlay = document.createElement('span');
    horizontalTickLabelOverlay.setAttribute('class', 'horizontal-tick-label-overlay');
    //horizontalTickLabelOverlay.setAttribute('contenteditable', 'true');

    horizontalTickLabelOverlay.dataset.value = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails[horizontalTickLabelGroupID][horizontalTickLabelID].value;


    horizontalTickLabelOverlay.style.textAlign = 'right';
    horizontalTickLabelOverlay.style.display = 'inline-block';
    horizontalTickLabelOverlay.style.position = 'absolute';
    horizontalTickLabelOverlay.style.whiteSpace = 'nowrap';

    horizontalTickLabelOverlay.style.fontSize = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails[horizontalTickLabelGroupID][horizontalTickLabelID].fontSize;
    horizontalTickLabelOverlay.style.fontFamily = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails[horizontalTickLabelGroupID][horizontalTickLabelID].fontFamily;

    horizontalTickLabelOverlay.innerHTML = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].horizontalTickLabelGroupDetails[horizontalTickLabelGroupID][horizontalTickLabelID].string;

    return horizontalTickLabelOverlay;
};

function createCartesianGraph(visualization_id, cartesian_graph_id) {

    let cartesianGraph = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    cartesianGraph.setAttribute('class', 'cartesian-graph');
    cartesianGraph.setAttribute('height', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].height);
    cartesianGraph.setAttribute('id', cartesian_graph_id);

    let cartesianGraphMarkers = createCartesianGraphMarkers(cartesian_graph_id);
    cartesianGraph.appendChild(cartesianGraphMarkers);

    let cartesianGraphBody = createCartesianGraphBody(visualization_id, cartesian_graph_id);
    cartesianGraph.appendChild(cartesianGraphBody);



    let axes = createAxes(visualization_id, cartesian_graph_id, cartesianGraphBody);
    cartesianGraph.appendChild(axes);


    for (const bar_group_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails) {
        let barGroup = createBarGroup(visualization_id, cartesian_graph_id, bar_group_id);
        cartesianGraphBody.appendChild(barGroup);
    };


    let lines = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    cartesianGraphBody.appendChild(lines);
    lines.setAttribute('class', 'lines');
    for (const line_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails) {
        let line = createLine(visualization_id, cartesian_graph_id, line_id);
        lines.appendChild(line);
    };

    return cartesianGraph;
};


function createLine(visualization_id, cartesian_graph_id, line_id) {
    let line = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    line.setAttribute('id', line_id);
    line.setAttribute('class', 'line');

    line.dataset.horizontalAxis = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].horizontalAxis;
    line.dataset.verticalAxis = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].verticalAxis;
    line.dataset.stroke = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].stroke;
    line.dataset.interpolation = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].interpolation;

    line.dataset.horizontalSeries = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].horizontalSeries;
    line.dataset.verticalSeries = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].lineDetails[line_id].verticalSeries;

    return line
};


function createCartesianGraphMarkers(cartesian_graph_id) {
    let cartesianGraphMarkers = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    let arrowMarker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    cartesianGraphMarkers.appendChild(arrowMarker);

    arrowMarker.setAttribute('id', 'arrow');
    arrowMarker.setAttribute('viewBox', '0 0 10 10');
    arrowMarker.setAttribute('refX', '5');
    arrowMarker.setAttribute('refY', '5');
    arrowMarker.setAttribute('markerWidth', '6');
    arrowMarker.setAttribute('markerHeight', '6');
    arrowMarker.setAttribute('orient', 'auto-start-reverse');

    let arrowMarkerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    arrowMarker.appendChild(arrowMarkerPath);
    arrowMarkerPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');

    return cartesianGraphMarkers;
};




function createTimeSpanAnnotationCallout(visualization_id, cartesian_graph_id, annotation_id) {

    let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    rect.setAttribute('class', 'time-span-annotation-rectangle');

    rect.style.opacity = '50%';

    rect.setAttribute('fill', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].fill);
    rect.dataset.lowerBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].lowerBound;
    rect.dataset.upperBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].upperBound;
    rect.dataset.axisId = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails[annotation_id].axisId;

    return rect;
};






function createPointAnnotationCallout(visualization_id, cartesian_graph_id, annotation_id) {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute('class', 'annotation-callout');

    path.setAttribute('fill', 'transparent');
    path.setAttribute('stroke', 'black');
    path.setAttribute('stroke-width', 2);
    path.setAttribute('marker-end', 'url(#arrow)');

    path.dataset.tailBuffer = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].tailBuffer;
    path.dataset.headBuffer = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].headBuffer;
    path.dataset.verticalAxis = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].verticalAxis;
    path.dataset.horizontalAxis = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].horizontalAxis;
    path.dataset.verticalValue = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].verticalValue;
    path.dataset.horizontalValue = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].horizontalValue;
    path.dataset.markerRefX = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails[annotation_id].markerRefX;

    return path;
};

function createCartesianGraphBody(visualization_id, cartesian_graph_id) {
    let cartesianGraphBody = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    cartesianGraphBody.setAttribute('class', 'cartesian-graph-body');

    for (const horizontalGridLineGroupID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails) {
        let horizontalGridLineGroup = createHorizontalGridLineGroup(visualization_id, cartesian_graph_id, horizontalGridLineGroupID);
        cartesianGraphBody.appendChild(horizontalGridLineGroup);
    };

    for (const annotation_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.timeSpanAnnotationDetails) {
        let annotationCallout = createTimeSpanAnnotationCallout(visualization_id, cartesian_graph_id, annotation_id);
        cartesianGraphBody.appendChild(annotationCallout, annotation_id);
    };


    for (const annotation_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].annotationDetails.pointAnnotationDetails) {
        let annotationCallout = createPointAnnotationCallout(visualization_id, cartesian_graph_id, annotation_id);
        cartesianGraphBody.appendChild(annotationCallout, annotation_id);
    };

    let cartesianGraphBodyArea = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');

    cartesianGraphBodyArea.setAttribute('class', 'cartesian-graph-body-area');
    cartesianGraphBodyArea.setAttribute('fill', 'none');
    cartesianGraphBody.appendChild(cartesianGraphBodyArea);

    return cartesianGraphBody;
};

function createBarGroup(visualization_id, cartesian_graph_id, bar_group_id) {
    let barGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    barGroup.setAttribute('class', 'bar-group');

    barGroup.dataset.verticalAxisId = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].vertical_axis;
    barGroup.dataset.horizontalAxisId = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].horizontal_axis;
    barGroup.dataset.widthPercentage = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].width_percentage;

    for (const obs_id in eval(visualization_id).data.series[eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].independentSeries].observations) {
        let bar = createBar(visualization_id, cartesian_graph_id, bar_group_id, obs_id);
        barGroup.appendChild(bar);
    };

    return barGroup;
};

function createBar(visualization_id, cartesian_graph_id, bar_group_id, obs_id) {
    let bar = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');

    bar.setAttribute('class', 'bar');

    bar.dataset.verticalValue = eval(visualization_id).data.series[eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].dependentSeries].observations[obs_id];
    bar.dataset.horizontalValue = eval(visualization_id).data.series[eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].independentSeries].observations[obs_id];

    bar.setAttribute('stroke', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].stroke);
    bar.setAttribute('stroke-width', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].stroke_width);
    bar.setAttribute('fill', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].fill);

    if ('barDetails' in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id]) {
        if (obs_id in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails) {
            if ('stroke' in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id]) {
                bar.setAttribute('stroke', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id].stroke);
            };
            if ('stroke-width' in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id]) {
                bar.setAttribute('stroke-width', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id].stroke_width);
            };
            if ('fill' in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id]) {
                bar.setAttribute('fill', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id].fill);
            };
            if ('stroke_style' in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id]) {
                if (eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].barGroupsDetails[bar_group_id].barDetails[obs_id].stroke_style == 'dashed') {
                    bar.setAttribute('stroke-dasharray', "10 4");
                };
            };
        };
    };

    return bar;
};

function createAxes(visualization_id, cartesian_graph_id, cartesian_graph_body) {
    let axes = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    axes.setAttribute('class', 'cartesian-graph-axes');

    for (const verticalAxisID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails) {
        let verticalAxis = createVerticalAxis(visualization_id, cartesian_graph_id, verticalAxisID, cartesian_graph_body);
        axes.appendChild(verticalAxis);
    };

    for (const horizontalAxisID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails) {
        let horizontalAxis = createHorizontalAxis(visualization_id, cartesian_graph_id, horizontalAxisID);
        axes.appendChild(horizontalAxis);
    };

    return axes;
};

function createVerticalAxis(visualization_id, cartesian_graph_id, vertical_axis_id, cartesian_graph_body) {
    let verticalAxis = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    verticalAxis.setAttribute('class', 'vertical-axis');
    verticalAxis.setAttribute('id', vertical_axis_id);
    verticalAxis.dataset.axisType = 'float';
    verticalAxis.dataset.lowerBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].lowerBound;
    verticalAxis.dataset.upperBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].verticalAxesDetails[vertical_axis_id].upperBound;

    return verticalAxis;
};

function createHorizontalGridLineGroup(visualization_id, cartesian_graph_id, horizontalGridLineGroupID) {
    let horizontalGridLineGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    horizontalGridLineGroup.setAttribute('class', 'horizontal-grid-line-group');
    horizontalGridLineGroup.id = horizontalGridLineGroupID;
    horizontalGridLineGroup.dataset.axisId = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails[horizontalGridLineGroupID].verticalAxisID;

    for (const horizontalGridLineID in eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails[horizontalGridLineGroupID].horizontalGridLineDetails) {
        let horizontalGridLine = createHorizontalGridLine(visualization_id, cartesian_graph_id, horizontalGridLineGroup.dataset.axisId, horizontalGridLineGroupID, horizontalGridLineID);
        horizontalGridLineGroup.appendChild(horizontalGridLine);
    };

    return horizontalGridLineGroup;
};

function createHorizontalGridLine(visualization_id, cartesian_graph_id, vertical_axis_id, horizontalGridLineGroupID, horizontalGridLineID) {
    let horizontalGridLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');

    horizontalGridLine.setAttribute('class', 'horizontal-grid-line');
    horizontalGridLine.id = horizontalGridLineID;

    horizontalGridLine.setAttribute('stroke', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails[horizontalGridLineGroupID].horizontalGridLineDetails[horizontalGridLineID].stroke);
    horizontalGridLine.setAttribute('strokeWidth', eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails[horizontalGridLineGroupID].horizontalGridLineDetails[horizontalGridLineID].strokeWidth);

    horizontalGridLine.dataset.value = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalGridLineGroupDetails[horizontalGridLineGroupID].horizontalGridLineDetails[horizontalGridLineID].value;

    return horizontalGridLine;
};

function createHorizontalAxis(visualization_id, cartesian_graph_id, horizontal_axis_id) {
    let horizontalAxis = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    horizontalAxis.setAttribute('class', 'horizontal-axis');
    horizontalAxis.setAttribute('id', horizontal_axis_id);

    horizontalAxis.dataset.type = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].type;

    if (horizontalAxis.dataset.type == 'categorical') {
        horizontalAxis.dataset.categoryCount = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].category_count;
    } else if (horizontalAxis.dataset.type == 'datetime') {
        horizontalAxis.dataset.lowerBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].lowerBound;
        horizontalAxis.dataset.upperBound = eval(visualization_id).cartesianGraphDetails[cartesian_graph_id].horizontalAxesDetails[horizontal_axis_id].upperBound;
    };

    return horizontalAxis;
};


function createHorizontalTickLabelGroup(visualization_id, cartesian_graph_id, horizontal_axis_id, horizontalTickLabelGroupID) {
    let horizontalTickLabelGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');

    horizontalTickLabelGroup.setAttribute('class', 'horizontal-tick-label-group');
    horizontalTickLabelGroup.setAttribute('id', horizontalTickLabelGroupID);

    return horizontalTickLabelGroup;
};


function addContent(visualizationID) {

    let visualization = document.getElementById(visualizationID);

    let visualizationContent = document.createElement('div');

    visualization.appendChild(visualizationContent);
    visualizationContent.id = 'vc_id0';
    visualizationContent.className = 'visualization-content';
    visualizationContent.style.display = 'flex';
    visualizationContent.style.flexDirection = 'column';
    visualizationContent.style.gap = '16px';

    for (const rowID in eval(visualizationID).visualizationRowDetails) {

        let row = document.createElement('div');
        visualizationContent.appendChild(row);
        row.id = rowID;

        row.style.display = 'flex';
        row.style.flexDirection = 'row';
        row.style.gap = '10px';

        for (const rowElementID in eval(visualizationID).visualizationRowDetails[rowID]) {
            let rowElement = createRowElement(visualizationID, rowID, rowElementID);
            row.appendChild(rowElement);

            if (eval(visualizationID).visualizationRowDetails[rowID][rowElementID].type === 'textbox') {
                let textbox = createTextbox(visualizationID, eval(visualizationID).visualizationRowDetails[rowID][rowElementID].id);
                rowElement.appendChild(textbox);
            } else if (eval(visualizationID).visualizationRowDetails[rowID][rowElementID].type === 'cartesian_graph') {
                let cartesianGraph = createCartesianGraph(visualizationID, eval(visualizationID).visualizationRowDetails[rowID][rowElementID].id);
                rowElement.appendChild(cartesianGraph);

                let cartesianGraphOverlay = createCartesianGraphOverlay(visualizationID, eval(visualizationID).visualizationRowDetails[rowID][rowElementID].id);
                rowElement.appendChild(cartesianGraphOverlay);
            };

        };
    };
};

addContent(document.currentScript.dataset.visualizationId);
