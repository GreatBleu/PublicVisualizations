function structureCartesianGraphOverlay(cartesian_graph, vertical_axes_width) {

    let cartesianGraphOverlay = cartesian_graph.nextElementSibling;

    cartesianGraphOverlay.style.top = cartesian_graph.getBoundingClientRect().y + window.scrollY;
    cartesianGraphOverlay.style.left = cartesian_graph.getBoundingClientRect().x;
    cartesianGraphOverlay.style.width = cartesian_graph.getAttribute('width');

    let cartesianGraphBodyOverlay = cartesianGraphOverlay.getElementsByClassName('cartesian-graph-body-overlay')[0];
    structureCartesianGraphBodyOverlay(cartesian_graph, cartesianGraphBodyOverlay, vertical_axes_width);
};

function structureCartesianGraphBodyOverlay(cartesian_graph, cartesianGraphBodyOverlay, vertical_axes_width) {
    let cartesian_graph_body = cartesian_graph.getElementsByClassName('cartesian-graph-body')[0];

    cartesianGraphBodyOverlay.style.left = vertical_axes_width;
    cartesianGraphBodyOverlay.style.width = cartesian_graph_body.getBoundingClientRect().width;

    let pointAnnotationOverlays = cartesianGraphBodyOverlay.getElementsByClassName('point-annotation-overlay');
    let annotationCallouts = cartesian_graph.getElementsByClassName('annotation-callout');
    for (let i = 0; i < pointAnnotationOverlays.length; i++) {
        structurePointAnnotationOverlayAndCallout(cartesian_graph, pointAnnotationOverlays[i], annotationCallouts[i]);
    };

    let timeSpanAnnotationOverlays = cartesianGraphBodyOverlay.getElementsByClassName('time-span-annotation-overlay');
    let annotationRectangles = cartesian_graph.getElementsByClassName('time-span-annotation-rectangle');
    for (let i = 0; i < annotationRectangles.length; i++){
        structureTimeSpanAnnotationRectangleAndCallout(cartesian_graph, timeSpanAnnotationOverlays[i], annotationRectangles[i]);
    };

};




function structureTimeSpanAnnotationRectangleAndCallout(cartesian_graph, annotationOverlay, annotationRectangle){
    let cartesian_graph_body_area = cartesian_graph.getElementsByClassName('cartesian-graph-body')[0].getElementsByClassName('cartesian-graph-body-area')[0];
    let axis = cartesian_graph.getElementById(annotationRectangle.dataset.axisId);
    let vertical_axis = cartesian_graph.getElementsByClassName('vertical-axis')[0];

    let x_position_percentage = (new Date(annotationRectangle.dataset.lowerBound) - new Date(axis.dataset.lowerBound)) / (new Date(axis.dataset.upperBound) - new Date(axis.dataset.lowerBound));
    let x_position_absolute = cartesian_graph_body_area.getBoundingClientRect().width * x_position_percentage;
    let width_percentage = (new Date(annotationRectangle.dataset.upperBound) - new Date(annotationRectangle.dataset.lowerBound)) / (new Date(axis.dataset.upperBound) - new Date(axis.dataset.lowerBound));     
    let width_absolute = cartesian_graph_body_area.getBoundingClientRect().width * width_percentage;
    
    let y_position = 0;
    // See if such a grid line exists
    let grid_line = document.querySelectorAll(`[data-value="${vertical_axis.dataset.lowerBound}"]`)[0];
    let y_position_adjustment = grid_line.getAttribute('strokeWidth') / 2;
    //
    y_position += y_position_adjustment

    let height = cartesian_graph_body_area.getBoundingClientRect().height - y_position;

    annotationRectangle.setAttribute('x', x_position_absolute);
    annotationRectangle.setAttribute('y', y_position);
    annotationRectangle.setAttribute('width', width_absolute);
    annotationRectangle.setAttribute('height', height);

    annotationOverlay.style.left = (x_position_absolute + (width_absolute / 2)) - (annotationOverlay.getBoundingClientRect().width / 2);
    annotationOverlay.style.maxWidth = width_absolute;
};




function structurePointAnnotationOverlayAndCallout(cartesian_graph, annotationOverlay, annotationCallout) {

    let cartesian_graph_body_area = cartesian_graph.getElementsByClassName('cartesian-graph-body')[0].getElementsByClassName('cartesian-graph-body-area')[0];

    let left_position = (cartesian_graph_body_area.getBoundingClientRect().width * annotationOverlay.dataset.horizontalLowerBound);
    let top_position = cartesian_graph_body_area.getBoundingClientRect().height - (cartesian_graph_body_area.getBoundingClientRect().height * annotationOverlay.dataset.verticalUpperBound);

    annotationOverlay.style.left = left_position;
    annotationOverlay.style.top = top_position;
    annotationOverlay.style.maxWidth = cartesian_graph_body_area.getBoundingClientRect().width * (annotationOverlay.dataset.horizontalUpperBound - annotationOverlay.dataset.horizontalLowerBound);
    annotationOverlay.style.maxHeight = cartesian_graph_body_area.getBoundingClientRect().height * (annotationOverlay.dataset.verticalUpperBound - annotationOverlay.dataset.verticalLowerBound);

    let callout_tail_horizontal_position = left_position + (parseFloat(annotationOverlay.dataset.calloutAttachesHorizontal) * annotationOverlay.getBoundingClientRect().width);
    if (parseFloat(annotationOverlay.dataset.calloutAttachesHorizontal) == 0) {
        callout_tail_horizontal_position -= parseFloat(annotationCallout.dataset.tailBuffer);
    } else if (parseFloat(annotationOverlay.dataset.calloutAttachesHorizontal) == 1) {
        callout_tail_horizontal_position += parseFloat(annotationCallout.dataset.tailBuffer);
    };

    let callout_tail_vertical_position = cartesian_graph_body_area.getBoundingClientRect().height - top_position - (annotationOverlay.getBoundingClientRect().height * (1 - parseFloat(annotationOverlay.dataset.calloutAttachesVertical)));

    let horizontal_axis = cartesian_graph.getElementById(annotationCallout.dataset.horizontalAxis);
    let callout_head_horizontal_position = null;

    if (horizontal_axis.dataset.type == 'categorical'){
        let horizontal_tick_label = document.querySelectorAll(`[data-value="${annotationCallout.dataset.horizontalValue}"]`)[0];
        callout_head_horizontal_position = parseFloat(horizontal_tick_label.dataset.xTranslation);
    } else {
        let callout_head_horizontal_percent_position = (new Date(annotationCallout.dataset.horizontalValue) - new Date(horizontal_axis.dataset.lowerBound)) / (new Date(horizontal_axis.dataset.upperBound) - new Date(horizontal_axis.dataset.lowerBound));
        callout_head_horizontal_position = cartesian_graph_body_area.getBoundingClientRect().width * callout_head_horizontal_percent_position;
    }

    let vertical_axis = cartesian_graph.getElementById(annotationCallout.dataset.verticalAxis);

    let callout_head_vertical_position = cartesian_graph_body_area.getBoundingClientRect().height * (annotationCallout.dataset.verticalValue - vertical_axis.dataset.lowerBound) / (vertical_axis.dataset.upperBound - vertical_axis.dataset.lowerBound);
    if (callout_tail_vertical_position < (cartesian_graph_body_area.getBoundingClientRect().height * ((parseFloat(annotationCallout.dataset.verticalValue) - vertical_axis.dataset.lowerBound)/(vertical_axis.dataset.upperBound - vertical_axis.dataset.lowerBound)))){
        callout_head_vertical_position -= parseFloat(annotationCallout.dataset.headBuffer) + parseFloat(annotationCallout.dataset.markerRefX);
    } else {
        callout_head_vertical_position += parseFloat(annotationCallout.dataset.headBuffer) + parseFloat(annotationCallout.dataset.markerRefX);
    };


    annotationCallout.setAttribute('d', `M ${callout_tail_horizontal_position} ${callout_tail_vertical_position} C ${callout_head_horizontal_position} ${callout_tail_vertical_position} ${callout_head_horizontal_position} ${callout_tail_vertical_position} ${callout_head_horizontal_position} ${callout_head_vertical_position}`);
};

function structureCartesianGraph(visualization_id, cartesian_graph) {
    cartesian_graph.setAttribute('width', cartesian_graph.parentElement.offsetWidth);

    let vertical_axes_width = 0;


    let vertical_axis_overlays = cartesian_graph.parentElement.children[1].getElementsByClassName('cartesian-graph-axes-overlay')[0].getElementsByClassName('vertical-axis-overlay');




    for (let i = 0; i < vertical_axis_overlays.length; i++) {
        let vertical_axis_overlay = vertical_axis_overlays[i];
        let vertical_tick_label_overlays = vertical_axis_overlay.getElementsByClassName('vertical-tick-label-group-overlay')[0].getElementsByClassName('vertical-tick-label-overlay');
        let vertical_axis_width = 0;

        for (let j = 0; j < vertical_tick_label_overlays.length; j++) {
            if (vertical_tick_label_overlays[j].getBoundingClientRect().width > vertical_axis_width) {
                vertical_axis_width = vertical_tick_label_overlays[j].getBoundingClientRect().width
            };
        };

        vertical_axis_width += parseFloat(vertical_axis_overlay.dataset.horizontalBuffer);

        vertical_axes_width += vertical_axis_width;
    };

    let horizontal_axes_height = 0;
    let horizontal_axis_overlays = cartesian_graph.parentElement.children[1].getElementsByClassName('cartesian-graph-axes-overlay')[0].getElementsByClassName('horizontal-axis-overlay');

    for (let i = 0; i < horizontal_axis_overlays.length; i++) {

        let horizontal_axis = document.getElementsByClassName('horizontal-axis')[i];
        let horizontal_axis_overlay = horizontal_axis_overlays[i];


        let horizontal_tick_label_group_overlays = horizontal_axis_overlay.getElementsByClassName('horizontal-tick-label-group-overlay');
        let horizontal_axis_height = 0;


        for (let j = 0; j < horizontal_tick_label_group_overlays.length; j++) {

            let horizontal_tick_label_overlays = horizontal_tick_label_group_overlays[i].getElementsByClassName('horizontal-tick-label-overlay');
            let horizontal_tick_label_overlay_height = 0;

            for (let k = 0; k < horizontal_tick_label_overlays.length; k++) {

                let category_width = (cartesian_graph.getAttribute('width') - vertical_axes_width) / horizontal_axis.dataset.categoryCount;

                if (horizontal_tick_label_overlays[k].getBoundingClientRect().width > category_width) {
                    horizontal_tick_label_overlays[k].style.transform = 'rotate(45deg)';
                    horizontal_tick_label_overlays[k].style.transformOrigin = 'top left';
                } else {
                    horizontal_tick_label_overlays[k].style.transform = 'rotate(0deg)';
                    horizontal_tick_label_overlays[k].style.transformOrigin = 'top left';
                };

                if (horizontal_tick_label_overlays[k].getBoundingClientRect().height > horizontal_tick_label_overlay_height) {
                    horizontal_tick_label_overlay_height = horizontal_tick_label_overlays[k].getBoundingClientRect().height;
                };

                horizontal_tick_label_overlays[k].style.transform = 'rotate(0deg)';
                horizontal_tick_label_overlays[k].style.transformOrigin = 'top left';

            };

            horizontal_axis_height += horizontal_tick_label_overlay_height;
        };


        horizontal_axis_height += parseFloat(horizontal_axis_overlay.dataset.verticalBuffer);
        horizontal_axes_height += horizontal_axis_height

    };



    let axes = cartesian_graph.getElementsByClassName('cartesian-graph-axes')[0];
    structureAxes(cartesian_graph, axes, vertical_axes_width, horizontal_axes_height);

    let horizontal_axes = axes.getElementsByClassName('horizontal-axis');
    let vertical_axes = axes.getElementsByClassName('vertical-axis');


    let cartesian_graph_body = cartesian_graph.getElementsByClassName('cartesian-graph-body')[0];
    structureCartesianGraphBody(visualization_id, cartesian_graph, cartesian_graph_body, vertical_axes, vertical_axes_width, horizontal_axes_height);


    //
    //
    structureCartesianGraphOverlay(cartesian_graph, vertical_axes_width);
    //
    //
};


function structureCartesianGraphBody(visualization_id, cartesian_graph, cartesian_graph_body, vertical_axes, vertical_axes_width, horizontal_axes_height) {
    cartesian_graph_body.setAttribute('transform', `translate(${vertical_axes_width}, ${cartesian_graph.getAttribute('height') - horizontal_axes_height}) scale(1, -1)`);

    //
    //
    //
    let cartesian_graph_body_area = cartesian_graph_body.getElementsByClassName('cartesian-graph-body-area')[0];
    cartesian_graph_body_area.setAttribute('points', `${0},${0} ${0},${cartesian_graph.getAttribute('height') - horizontal_axes_height} ${cartesian_graph.getAttribute('width') - vertical_axes_width},${cartesian_graph.getAttribute('height') - horizontal_axes_height} ${cartesian_graph.getAttribute('width') - vertical_axes_width},${0}`);
    //
    //
    //

    let horizontal_grid_line_groups = cartesian_graph_body.getElementsByClassName('horizontal-grid-line-group');
    for (let horizontal_grid_line_group_number = 0; horizontal_grid_line_group_number < horizontal_grid_line_groups.length; horizontal_grid_line_group_number++) {
        structureHorizontalGridLineGroup(horizontal_grid_line_groups[horizontal_grid_line_group_number], cartesian_graph, horizontal_axes_height, vertical_axes_width, vertical_axes);
    };

    let bar_groups = cartesian_graph_body.getElementsByClassName('bar-group');
    for (let bar_group_number = 0; bar_group_number < bar_groups.length; bar_group_number++) {
        structureBarGroup(bar_groups[bar_group_number], cartesian_graph, vertical_axes_width);
    };


    let lines = cartesian_graph_body.getElementsByClassName('line');
    for (let line_number = 0; line_number < lines.length; line_number++){
        structureLine(visualization_id, lines[line_number], cartesian_graph, vertical_axes_width, horizontal_axes_height);
    }

};




//
// IS IT POSSIBLE TO DO THIS WITHOUT PASSING THE VISUALIZATION_ID FROM THE CREATION OBJECT?
//
function structureLine(visualization_id, line, cartesian_graph, vertical_axes_width, horizontal_axes_height){

    //
    //
    //console.log(visualization_id);
    //console.log(line);
    //
    //

    line.innerHTML = null;

    let horizontal_lower_bound = new Date(eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].horizontalAxesDetails[line.dataset.horizontalAxis].lowerBound);
    let horizontal_upper_bound = new Date(eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].horizontalAxesDetails[line.dataset.horizontalAxis].upperBound);
    
    let vertical_lower_bound = eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].verticalAxesDetails[line.dataset.verticalAxis].lowerBound;
    let vertical_upper_bound = eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].verticalAxesDetails[line.dataset.verticalAxis].upperBound;

    let horizontal_series = line.dataset.horizontalSeries;
    let vertical_series = line.dataset.verticalSeries;

    let path_data = '';

    let break_ending_points = [];

    for (const line_break in eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].lineDetails[line.getAttribute('id')].breakDetails){
        break_ending_points.push(eval(visualization_id).cartesianGraphDetails[cartesian_graph.getAttribute('id')].lineDetails[line.getAttribute('id')].breakDetails[line_break].endingObservation);
    };


    for (const observation in eval(visualization_id).data.series[horizontal_series].observations) {

        let horizontal_position_percentage = (eval(visualization_id).data['series'][horizontal_series]['observations'][observation] - horizontal_lower_bound) / (horizontal_upper_bound - horizontal_lower_bound);
        let horizontal_position_absolute = horizontal_position_percentage * (cartesian_graph.getBoundingClientRect().width - vertical_axes_width);

        let vertical_position_percentage = (eval(visualization_id).data['series'][vertical_series]['observations'][observation] - vertical_lower_bound) / (vertical_upper_bound - vertical_lower_bound);
        let vertical_position_absolute = vertical_position_percentage * (cartesian_graph.getBoundingClientRect().height - horizontal_axes_height);

        if (path_data == '' || break_ending_points.includes(observation)) {
            path_data += `M ${horizontal_position_absolute} ${vertical_position_absolute}`
        } else {
            path_data += `L ${horizontal_position_absolute} ${vertical_position_absolute}`
        };
    };

    line.innerHTML = `<path d="${path_data}" fill="none" stroke="#ED1C24" style="stroke-width:4px; stroke-linejoin:round; stroke-linecap:round"/>`;
};





function structureBarGroup(barGroup, cartesian_graph, vertical_axes_width) {
    let bars = barGroup.getElementsByClassName('bar');

    let vertical_axis = document.getElementById(barGroup.dataset.verticalAxisId);

    // See if there is a horizontal grid line equal to the lower bound of the vertical axis
    let grid_line = document.querySelectorAll(`[data-value="${vertical_axis.dataset.lowerBound}"]`)[0];
    let bar_bottom_height_adjustment = grid_line.getAttribute('strokeWidth') / 2;
    //





    let horizontal_axis = document.getElementById(barGroup.dataset.horizontalAxisId);

    let category_width = (cartesian_graph.getAttribute('width') - vertical_axes_width) / horizontal_axis.dataset.categoryCount;


    for (let bar_number = 0; bar_number < bars.length; bar_number++) {
        structureBar(bars[bar_number], vertical_axis, horizontal_axis, cartesian_graph, category_width, bar_bottom_height_adjustment);
    };

};


function structureBar(bar, vertical_axis, horizontal_axis, cartesian_graph, category_width, bar_bottom_height_adjustment) {
    let horizontal_tick_label = document.querySelectorAll(`[data-value="${bar.dataset.horizontalValue}"]`)[0];
    let bar_center_x_position = horizontal_tick_label.dataset.xTranslation;


    let bar_width = category_width * bar.dataset.widthPercentage;
    let bar_x_position = bar_center_x_position - .5 * bar_width;

    let cartesian_graph_body_area = cartesian_graph.getElementsByClassName('cartesian-graph-body')[0].getElementsByClassName('cartesian-graph-body-area')[0];

    let bar_height = cartesian_graph_body_area.getBoundingClientRect().height * (bar.dataset.verticalValue - vertical_axis.dataset.lowerBound) / (vertical_axis.dataset.upperBound - vertical_axis.dataset.lowerBound);

    let border_width = 5;

    bar.setAttribute('points', `${bar_x_position + border_width / 2},${0 + bar_bottom_height_adjustment} ${bar_x_position + border_width / 2},${bar_height - border_width / 2} ${bar_x_position + bar_width - border_width / 2},${bar_height - border_width / 2} ${bar_x_position + bar_width - border_width / 2},${0 + bar_bottom_height_adjustment}`)

};

function structureHorizontalGridLineGroup(horizontalGridLineGroup, cartesian_graph, horizontal_axes_height, vertical_axes_width, vertical_axes) {
    let horizontal_grid_lines = horizontalGridLineGroup.getElementsByClassName('horizontal-grid-line');

    let vertical_axis = cartesian_graph.getElementById(horizontalGridLineGroup.dataset.axisId);

    let visualization = vertical_axis.closest('.visualization')
    let vertical_axis_overlay = visualization.querySelectorAll(`[data-axis-id="${horizontalGridLineGroup.dataset.axisId}"].vertical-axis-overlay`)[0];
    let vertical_axis_label_overlay = vertical_axis_overlay.getElementsByClassName('vertical-axis-label-overlay')[0];

    for (let horizontal_grid_line_number = 0; horizontal_grid_line_number < horizontal_grid_lines.length; horizontal_grid_line_number++) {
        structureHorizontalGridLine(horizontal_grid_lines[horizontal_grid_line_number], vertical_axis, cartesian_graph, horizontal_axes_height, vertical_axes_width, vertical_axis_label_overlay.getBoundingClientRect().width, parseFloat(vertical_axis_label_overlay.style.top), vertical_axis);
    };
};

function structureHorizontalGridLine(horizontalGridLine, verticalAxis, cartesian_graph, horizontal_axes_height, vertical_axes_width, vertical_axis_label_width, vertical_axis_label_top, vertical_axis) {

    let position_percentage = ((horizontalGridLine.dataset.value - verticalAxis.dataset.lowerBound) / (verticalAxis.dataset.upperBound - verticalAxis.dataset.lowerBound));
    let position_absolute = position_percentage * (cartesian_graph.getAttribute('height') - horizontal_axes_height);

    horizontalGridLine.setAttribute('y1', position_absolute);
    horizontalGridLine.setAttribute('y2', position_absolute);

    if (parseFloat((cartesian_graph.getAttribute('height') - position_absolute - horizontal_axes_height).toFixed(4)) === vertical_axis_label_top) {
        horizontalGridLine.setAttribute('x1', vertical_axis_label_width);
    } else {
        horizontalGridLine.setAttribute('x1', 0);
    };

    horizontalGridLine.setAttribute('x2', cartesian_graph.getAttribute('width') - vertical_axes_width);

};

function structureAxes(cartesian_graph, axes, vertical_axes_width, horizontal_axes_height) {


    let horizontal_axes = axes.getElementsByClassName('horizontal-axis');
    let vertical_axes = axes.getElementsByClassName('vertical-axis');
    for (let i = 0; i < horizontal_axes.length; i++) {
        structureHorizontalAxis(cartesian_graph, axes, horizontal_axes[i], vertical_axes, vertical_axes_width, cartesian_graph.parentElement.children[1].getElementsByClassName('cartesian-graph-axes-overlay')[0].getElementsByClassName('horizontal-axis-overlay')[i], vertical_axes_width, horizontal_axes_height);
    };
    for (let i = 0; i < vertical_axes.length; i++) {
        structureVerticalAxis(cartesian_graph, axes, horizontal_axes, vertical_axes[i], cartesian_graph.parentElement.children[1].getElementsByClassName('cartesian-graph-axes-overlay')[0].getElementsByClassName('vertical-axis-overlay')[i], vertical_axes_width, horizontal_axes_height);
    };
};



function structureVerticalAxis(cartesian_graph, axes, horizontal_axes, vertical_axis, vertical_axis_overlay, vertical_axes_width, horizontal_axes_height) {

    let vertical_tick_label_overlays = vertical_axis_overlay.getElementsByClassName('vertical-tick-label-group-overlay')[0].getElementsByClassName('vertical-tick-label-overlay');

    let vertical_axis_width = 0;
    for (let i = 0; i < vertical_tick_label_overlays.length; i++) {
        if (vertical_tick_label_overlays[i].getBoundingClientRect().width > vertical_axis_width) {
            vertical_axis_width = vertical_tick_label_overlays[i].getBoundingClientRect().width
        };
    };

    vertical_axis_overlay.style.width = vertical_axis_width;

    vertical_axis.setAttribute('transform', `translate(${vertical_axis_width}, 0)`);

    for (let i = 0; i < vertical_axis_overlay.getElementsByClassName('vertical-tick-label-group-overlay').length; i++) {
        structureVerticalTickLabelGroup(vertical_axis_overlay.getElementsByClassName('vertical-tick-label-group-overlay')[i], vertical_axis, cartesian_graph, horizontal_axes_height);
    };






    let vertical_tick_labels = vertical_axis_overlay.getElementsByClassName('vertical-tick-label-overlay');
    let min_tick_label_top = Infinity;
    for (let i = 0; i < vertical_tick_labels.length; i++) {
        if (parseFloat(vertical_tick_labels[i].style.top) < min_tick_label_top) {
            min_tick_label_top = parseFloat(vertical_tick_labels[i].style.top);
        }
    };

    let vertical_axis_label_overlay = vertical_axis_overlay.getElementsByClassName('vertical-axis-label-overlay')[0];

    vertical_axis_label_overlay.style.left = vertical_axis_width;
    vertical_axis_label_overlay.style.marginTop = -vertical_axis_label_overlay.getBoundingClientRect().height / 2;
    vertical_axis_label_overlay.style.top = min_tick_label_top;

};

function structureVerticalTickLabelGroup(vertical_tick_label_group, vertical_axis, cartesian_graph, horizontal_axes_height) {

    let vertical_tick_labels = vertical_tick_label_group.getElementsByClassName('vertical-tick-label-overlay');

    for (var i = 0; i < vertical_tick_labels.length; i++) {
        let position_percentage = 1 - ((vertical_tick_labels[i].dataset.value - vertical_axis.dataset.lowerBound) / (vertical_axis.dataset.upperBound - vertical_axis.dataset.lowerBound));
        let position_absolute = position_percentage * (cartesian_graph.getAttribute('height') - horizontal_axes_height);
        vertical_tick_labels[i].style.marginTop = -(vertical_tick_labels[i].getBoundingClientRect().height / 2);
        vertical_tick_labels[i].style.top = position_absolute;
    };
};


function structureHorizontalAxis(cartesian_graph, axes, horizontal_axis, vertical_axes, vertical_axes_width, horizontal_axis_overlay, vertical_axes_width, horizontal_axes_height) {
    let horizontal_tick_label_groups_overlay = horizontal_axis_overlay.getElementsByClassName('horizontal-tick-label-group-overlay');
    let horizontal_axis_height = 0;

    let horizontal_tick_label_overlay_heights = {};

    for (let i = 0; i < horizontal_tick_label_groups_overlay.length; i++) {

        let horizontal_tick_label_overlays = horizontal_tick_label_groups_overlay[i].getElementsByClassName('horizontal-tick-label-overlay');
        let horizontal_tick_label_overlay_height = 0;

        if (i > 0){
            horizontal_tick_label_groups_overlay[i].style.top = horizontal_tick_label_overlay_heights[i - 1];
        };

        for (let j = 0; j < horizontal_tick_label_overlays.length; j++) {

            let category_width = (cartesian_graph.getAttribute('width') - vertical_axes_width) / horizontal_axis.dataset.categoryCount;

            if (horizontal_tick_label_overlays[j].getBoundingClientRect().width > category_width) {
                horizontal_tick_label_overlays[j].style.transform = 'rotate(45deg)';
                horizontal_tick_label_overlays[j].style.transformOrigin = 'top left';
            } else {
                horizontal_tick_label_overlays[j].style.transform = 'rotate(0deg)';
                horizontal_tick_label_overlays[j].style.transformOrigin = 'top left';
            };

            if (horizontal_tick_label_overlays[j].getBoundingClientRect().height > horizontal_tick_label_overlay_height) {
                horizontal_tick_label_overlay_height = horizontal_tick_label_overlays[j].getBoundingClientRect().height;
                horizontal_tick_label_overlay_heights[i] = horizontal_tick_label_overlay_height;
            };

            horizontal_tick_label_overlays[j].style.transform = 'rotate(0deg)';
            horizontal_tick_label_overlays[j].style.transformOrigin = 'top left';
        };

        horizontal_axis_height += horizontal_tick_label_overlay_height;
    };

    let horizontal_axis_width = cartesian_graph.getAttribute('width') - vertical_axes_width;

    if (horizontal_axis.dataset.type === 'categorical') {
        let width_per_category = horizontal_axis_width / parseFloat(horizontal_axis.dataset.categoryCount);
        structureCategoricalHorizontalTickLabelGroups(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups_overlay, width_per_category, vertical_axes_width);
    } else if (horizontal_axis.dataset.type === 'datetime') {
        structureDateTimeHorizontalTickLabelGroups(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups_overlay, vertical_axes_width, horizontal_axis_width);
    } else if (horizontal_axis.dataset.type === 'numerical') {

    };


    let horizontal_axis_y_translation = cartesian_graph.getAttribute('height') - horizontal_axis_height;
    horizontal_axis_overlay.style.top = horizontal_axis_y_translation;
};




function structureCategoricalHorizontalTickLabelGroups(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, width_per_category, vertical_axes_width) {
    for (var i = 0; i < horizontal_tick_label_groups.length; i++) {
        let horizontal_tick_labels = horizontal_tick_label_groups[i].getElementsByClassName('horizontal-tick-label-overlay');
        structureCategoricalHorizontalTickLabels(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, horizontal_tick_labels, width_per_category, vertical_axes_width);
    };
};




function structureCategoricalHorizontalTickLabels(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, horizontal_tick_labels, width_per_category, vertical_axes_width) {
    let rotate_labels = false;
    for (var i = 0; i < horizontal_tick_labels.length; i++) {
        let position_absolute = (i + 1) * width_per_category - width_per_category / 2
        let label_position_absolute = vertical_axes_width + position_absolute - horizontal_tick_labels[i].getBoundingClientRect().width / 2;

        horizontal_tick_labels[i].style.left = label_position_absolute;
        horizontal_tick_labels[i].style.transform = null;
        horizontal_tick_labels[i].style.transformOrigin = null;
        horizontal_tick_labels[i].dataset.xTranslation = position_absolute;

        if (horizontal_tick_labels[i].getBoundingClientRect().width > width_per_category) {
            rotate_labels = true;
        };
    };

    if (rotate_labels) {
        for (var i = 0; i < horizontal_tick_labels.length; i++) {
            let position_absolute = (i + 1) * width_per_category - width_per_category / 2
            let label_position_absolute = vertical_axes_width + position_absolute;

            horizontal_tick_labels[i].style.left = label_position_absolute;
            horizontal_tick_labels[i].style.transform = 'rotate(45deg)';
            horizontal_tick_labels[i].style.transformOrigin = 'top left';
        };
    };
};



function structureDateTimeHorizontalTickLabelGroups(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, vertical_axes_width, horizontal_axis_width) {
    for (var i = 0; i < horizontal_tick_label_groups.length; i++) {
        let horizontal_tick_labels = horizontal_tick_label_groups[i].getElementsByClassName('horizontal-tick-label-overlay');
        structureDateTimeHorizontalTickLabels(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, horizontal_tick_labels, vertical_axes_width, horizontal_axis_width, i);
    };
};


function structureDateTimeHorizontalTickLabels(cartesian_graph, axes, horizontal_axis, vertical_axes, horizontal_tick_label_groups, horizontal_tick_labels, vertical_axes_width, horizontal_axis_width) {
    let rotate_labels = false;

    let axis_lower_bound = new Date(horizontal_axis.dataset.lowerBound);
    let axis_upper_bound = new Date(horizontal_axis.dataset.upperBound);

    for (var i = 0; i < horizontal_tick_labels.length; i++) {

        let date = new Date(horizontal_tick_labels[i].dataset.value);

        let position_percentage = (date - axis_lower_bound) / (axis_upper_bound - axis_lower_bound);
        let position_absolute = horizontal_axis_width * position_percentage + vertical_axes_width;

        horizontal_tick_labels[i].style.left = position_absolute;
        horizontal_tick_labels[i].style.transform = null;
        horizontal_tick_labels[i].style.transformOrigin = null;
        horizontal_tick_labels[i].dataset.xTranslation = position_absolute;

        // if (horizontal_tick_labels[i].getBoundingClientRect().width > width_per_category) {
        //     rotate_labels = true;
        // };
    };

    if (rotate_labels) {
        for (var i = 0; i < horizontal_tick_labels.length; i++) {
            let position_absolute = (i + 1) * width_per_category - width_per_category / 2
            let label_position_absolute = vertical_axes_width + position_absolute;

            horizontal_tick_labels[i].style.left = label_position_absolute;
            horizontal_tick_labels[i].style.transform = 'rotate(45deg)';
            horizontal_tick_labels[i].style.transformOrigin = 'top left';
        };
    };
};

















function structureContent(visualization_id) {

    const visualizations = document.getElementsByClassName('visualization');


    //
    //
    console.log(visualizations);
    //
    //

    const visualization = visualizations.getElementById(visualization_id);


    const cartesian_graphs = visualization.getElementsByClassName('cartesian-graph');

    for (let i = 0; i < cartesian_graphs.length; i++) {
        structureCartesianGraph(visualization_id, cartesian_graphs[i]);
    };
};



function setEventListeners(visualization_id){
    window.addEventListener('resize', function() {
        structureContent(visualization_id);
    });

    document.addEventListener('input', function() {
        structureContent(visualization_id);
    });
};


structureContent(document.currentScript.dataset.visualizationId);
setEventListeners(document.currentScript.dataset.visualizationId);