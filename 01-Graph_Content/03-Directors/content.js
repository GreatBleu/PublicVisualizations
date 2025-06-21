const vi_id3 = {
    data: {
        series: {
            series_zero: {
                type: 'string',
                observations: {
                    ob_id0: 'Christopher Nolan',
                    ob_id1: 'David Fincher',
                    ob_id2: 'Stanley Kubrick',
                    ob_id3: 'Steven Spielberg',
                    ob_id4: 'Wes Anderson',
                    ob_id5: 'The Coen Brothers',
                    ob_id6: 'Francis Ford Coppola',
                    ob_id7: 'Martin Scorsese',
                    ob_id8: 'Tim Burton',
                    ob_id9: 'Quentin Tarantino'
                }
            },
            series_one: {
                type: 'float',
                observations: {
                    ob_id0: 8.24,
                    ob_id1: 7.75,
                    ob_id2: 7.64,
                    ob_id3: 7.56,
                    ob_id4: 7.52,
                    ob_id5: 7.50,
                    ob_id6: 7.24,
                    ob_id7: 7.23,
                    ob_id8: 7.22,
                    ob_id9: 8.01
                }
            },
            series_two: {
                type: 'float',
                observations: {
                    ob_id0: 7.80,
                    ob_id1: 6.75,
                    ob_id2: 8.03,
                    ob_id3: 7.32,
                    ob_id4: 6.40,
                    ob_id5: 7.11,
                    ob_id6: 6.44,
                    ob_id7: 7.68,
                    ob_id8: 6.74,
                    ob_id9: null
                }
            }
        }
    },

    textBoxDetails: {
        tb_id0: {
            string: "Tarantino Might be Right About Quality Trending Down After a Director's 10th Film",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '20pt',
            fontWeight: '700'
        },
        tb_id1: {
            string: "Average IMDb ratings for a sampling of directors' <span style='font-weight:bold; color:#7eb0d5;'>first 10 films</span> compared to their <span style='font-weight:bold; color:#8bd3c7;'>later work</span>",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '16pt',
            fontWeight: '300'
        },
        tb_id2: {
            string: 'Source: IMDb.com',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id3: {
            string: 'GreatBleu.com',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'right',
            fontSize: '10pt',
            fontWeight: '300'
        }
    },

    cartesianGraphDetails: {
        cg_id0: {
            height: '300',
            verticalAxesDetails: {
                va_id0: {
                    type: 'float',
                    chartAreaMargin: '5',
                    lowerBound: '0',
                    upperBound: '10.3',
                    horizontalBuffer: '2',
                    verticalAxisLabelDetails: {
                        string: 'Average Rating',
                        fontSize: '10pt',
                        fontFamily: 'Verdana',
                        position: 'top-tick'
                    },
                    verticalTickLabelGroupDetails: {
                        vtlg_id0: {
                            vl_id0: {
                                value: '10',
                                string: '10',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id1: {
                                value: '8',
                                string: '8',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id2: {
                                value: '6',
                                string: '6',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id4: {
                                value: '4',
                                string: '4',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id5: {
                                value: '2',
                                string: '2',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id6: {
                                value: '0',
                                string: '0',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            }
                        }
                    }
                }
            },
            horizontalAxesDetails: {
                ha_id0: {
                    type: 'categorical',
                    chartAreaMargin: '5',
                    category_count: '10',
                    verticalBuffer: '5',
                    horizontalTickLabelGroupDetails: {
                        htlg_id0:
                        {
                            hl_id0: {
                                value: 'Christopher Nolan',
                                string: 'Nolan',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id1: {
                                value: 'David Fincher',
                                string: 'Fincher',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id2: {
                                value: 'Stanley Kubrick',
                                string: 'Kubrick',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id3: {
                                value: 'Steven Spielberg',
                                string: 'Spielberg',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id4: {
                                value: 'Wes Anderson',
                                string: 'Anderson',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id5: {
                                value: 'The Coen Brothers',
                                string: 'Coen Brothers',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id6: {
                                value: 'Francis Ford Coppola',
                                string: 'Ford Coppola',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id7: {
                                value: 'Martin Scorsese',
                                string: 'Scorsese',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id8: {
                                value: 'Tim Burton',
                                string: 'Burton',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id9: {
                                value: 'Quentin Tarantino',
                                string: 'Tarantino',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            }
                        }
                    }
                }
            },
            horizontalGridLineGroupDetails: {
                hglg_id0: {
                    verticalAxisID: 'va_id0',
                    horizontalGridLineDetails: {
                        hgl_id0: {
                            value: '0',
                            stroke: 'black',
                            strokeWidth: '1'
                        },
                        hgl_id1: {
                            value: '2',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id2: {
                            value: '4',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id3: {
                            value: '6',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id4: {
                            value: '8',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id5: {
                            value: '10',
                            stroke: 'gray',
                            strokeWidth: '1'
                        }
                    }
                }
            },
            barGroupsDetails: {
                bg_id0: {
                    vertical_axis: 'va_id0',
                    horizontal_axis: 'ha_id0',
                    dependentSeries: 'series_one',
                    independentSeries: 'series_zero',
                    width_percentage: .7,
                    fill: '#7eb0d5',
                    stroke: '#7eb0d5',
                    stroke_width: '5'
                },
                bg_id1: {
                    vertical_axis: 'va_id0',
                    horizontal_axis: 'ha_id0',
                    dependentSeries: 'series_two',
                    independentSeries: 'series_zero',
                    width_percentage: .7,
                    fill: '#8bd3c7',
                    stroke: '#8bd3c7',
                    stroke_width: '5'
                }
            },
            annotationDetails: {
                pointAnnotationDetails: {
                    pa_id0: {
                        string: "The Shining (1980) was Kubrick's 11th Film",
                        fontSize: '10pt',
                        fontFamily: 'Verdana',
                        verticalBounds: {
                            lowerBound: .3,
                            upperBound: .963
                        },
                        horizontalBounds: {
                            lowerBound: .35,
                            upperBound: .95
                        },
                        verticalAxis: 'va_id0',
                        horizontalAxis: 'ha_id0',
                        horizontalValue: 'Stanley Kubrick',
                        verticalValue: 8.03333,
                        tailBuffer: 3,
                        headBuffer: 3,
                        markerRefX: 5,
                        calloutAttaches: {
                            verticalPosition: .5,
                            horizontalPosition: 0
                        }
                    }
                },
                timeSpanAnnotationDetails: {
                }
            }
        }
    },

    visualizationRowDetails: {
        rw_id0: {
            re_id0: { type: 'textbox', id: 'tb_id0', width: '100%' }
        },
        rw_id1: {
            re_id1: { type: 'textbox', id: 'tb_id1', width: '100%' }
        },
        rw_id2: {
            re_id2: { type: 'cartesian_graph', id: 'cg_id0', width: '100%' }
        },
        rw_id3: {
            re_id3: { type: 'textbox', id: 'tb_id2' },
            re_id4: { type: 'textbox', id: 'tb_id3', justifyContent: 'flex-end', flexGrow: '1' }
        }
    }
};