const vi_id4 = {
    data: {
        series: {
            series_zero: {
                type: 'string',
                observations: {
                    ob_id0: 'Jazz Chisholm Jr.',
                    ob_id1: 'Cody Bellinger',
                    ob_id2: 'Paul Goldschmidt',
                    ob_id3: 'Austin Wells',
                    ob_id4: 'Anthony Volpe'
                }
            },
            series_one: {
                type: 'float',
                observations: {
                    ob_id0: .436,
                    ob_id1: .426,
                    ob_id2: .414,
                    ob_id3: .395,
                    ob_id4: .364,
                }
            },
            series_two: {
                type: 'float',
                observations: {
                    ob_id0: .461,
                    ob_id1: .447,
                    ob_id2: .454,
                    ob_id3: .447,
                    ob_id4: .414,
                }
            }
        }
    },

    textBoxDetails: {
        tb_id0: {
            string: "Yankees Using Torpedo Bats Have Improved Slugging Percentage by 9% On Avg.",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '20pt',
            fontWeight: '700'
        },
        tb_id1: {
            string: "Slugging percentage in <span style='font-weight:bold; color:#98a6ae;'>2024</span> and <span style='font-weight:bold; color:#0C2340;'>2025</span> regular seasons",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '16pt',
            fontWeight: '300'
        },
        tb_id2:{
            string: 'Note: 2025 regular season data is through 6/19/2025',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id3: {
            string: 'Source: FOXSports.com and Baseball-Reference.com',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id4: {
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
                    upperBound: '.52',
                    horizontalBuffer: '2',
                    verticalAxisLabelDetails: {
                        string: 'slugging percentage',
                        fontSize: '10pt',
                        fontFamily: 'Verdana',
                        position: 'top-tick'
                    },
                    verticalTickLabelGroupDetails: {
                        vtlg_id0: {
                            vl_id0: {
                                value: '.5',
                                string: '.500',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id1: {
                                value: '.4',
                                string: '.400',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id2: {
                                value: '.3',
                                string: '.300',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id4: {
                                value: '.2',
                                string: '.200',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            vl_id5: {
                                value: '.1',
                                string: '.100',
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
                    category_count: '5',
                    verticalBuffer: '5',
                    horizontalTickLabelGroupDetails: {
                        htlg_id0:
                        {
                            hl_id0: {
                                value: 'Jazz Chisholm Jr.',
                                string: 'Chisholm Jr.',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id1: {
                                value: 'Cody Bellinger',
                                string: 'Bellinger',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id2: {
                                value: 'Paul Goldschmidt',
                                string: 'Goldschmidt',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id3: {
                                value: 'Austin Wells',
                                string: 'Wells',
                                fontSize: '10pt',
                                fontFamily: 'Verdana'
                            },
                            hl_id4: {
                                value: 'Anthony Volpe',
                                string: 'Volpe',
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
                            value: '.1',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id2: {
                            value: '.2',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id3: {
                            value: '.3',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id4: {
                            value: '.4',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id5: {
                            value: '.5',
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
                    fill: '#98a6ae',
                    stroke: '#98a6ae',
                    stroke_width: '5'
                },
                bg_id1: {
                    vertical_axis: 'va_id0',
                    horizontal_axis: 'ha_id0',
                    dependentSeries: 'series_two',
                    independentSeries: 'series_zero',
                    width_percentage: .7,
                    fill: '#0C2340',
                    stroke: '#0C2340',
                    stroke_width: '5',
                    // barDetails: {
                    //     bar_id10: {
                    //         horizontal_value: 'Jazz Chisholm Jr.',
                    //         vertical_value: .461,
                    //         dashed: false
                    //     },
                    //     bar_id11: {
                    //         horizontal_value: 'Cody Bellinger',
                    //         vertical_value: .447,
                    //         dashed: false
                    //     },
                    //     bar_id12: {
                    //         horizontal_value: 'Paul Goldschmidt',
                    //         vertical_value: .454,
                    //         dashed: false
                    //     },
                    //     bar_id13: {
                    //         horizontal_value: 'Austin Wells',
                    //         vertical_value: .447,
                    //         dashed: false
                    //     },
                    //     bar_id14: {
                    //         horizontal_value: 'Anthony Volpe',
                    //         vertical_value: .414,
                    //         dashed: false
                    //     }
                    // }
                }
            },
            annotationDetails: {
                pointAnnotationDetails: {
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
            re_id3: { type: 'textbox', id: 'tb_id2'}
        },
        rw_id4: {
            re_id4: { type: 'textbox', id: 'tb_id3' },
            re_id5: { type: 'textbox', id: 'tb_id4', justifyContent: 'flex-end', flexGrow: '1' }
        }
    }
};