const vi_id2 = {
    data: {
        series: {
            series_zero: {
                type: 'string',
                observations: {
                    ob_id0: 'Cowboys',
                    ob_id1: 'Giants',
                    ob_id2: 'Bears',
                    ob_id3: 'No Thanksgiving Cowboys',
                    ob_id4: 'Broncos',
                    ob_id5: 'Cardinals',
                    ob_id6: 'Falcons',
                    ob_id7: 'Titans',
                    ob_id8: 'Panthers',
                    ob_id9: 'Jaguars'
                }
            },
            series_one: {
                type: 'float',
                observations: {
                    ob_id0: 0.698924731182796,
                    ob_id1: 0.666666666666667,
                    ob_id2: 0.650793650793651,
                    ob_id3: 0.591397849,
                    ob_id4: 0.567567567567568,
                    ob_id5: 0.338028169014085,
                    ob_id6: 0.328947368421053,
                    ob_id7: 0.294871794871795,
                    ob_id8: 0.264705882352941,
                    ob_id9: 0.218181818181818
                }
            }
        }
    },

    textBoxDetails: {
        tb_id0: {
            string: 'The Cowboys are King of the Undeserved Prime Time Game',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '20pt',
            fontWeight: '700'
        },
        tb_id1: {
            string: 'Average number of prime time games scheduled per prior year win (2016-2025 seasons)',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '16pt',
            fontWeight: '300'
        },
        tb_id2: {
            string: 'Note: prime time games include Thursday, Sunday, and Monday Night Football, and all Thanksgiving & Christmas games. International games are not counted | 2025 Week 18 prime time games are yet to be announced',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id3: {
            string: 'Source: pro-football-reference.com',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id4: {
            string: 'greatbleu.com',
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
                    upperBound: '.8',
                    horizontalBuffer: '2',
                    verticalAxisLabelDetails: {
                        string: 'Label',
                        position: 'top-tick'
                    },
                    verticalTickLabelGroupDetails: {
                        vtlg_id0: {
                            vl_id0: {
                                value: '.75',
                                string: '.75'
                            },
                            vl_id1: {
                                value: '.6',
                                string: '.6'
                            },
                            vl_id2: {
                                value: '.45',
                                string: '.45'
                            },
                            vl_id3: {
                                value: '.3',
                                string: '.3'
                            },
                            vl_id4: {
                                value: '.15',
                                string: '.15'
                            },
                            vl_id5: {
                                value: '0',
                                string: '0'
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
                                value: 'Cowboys',
                                string: 'Cowboys'
                            },
                            hl_id1: {
                                value: 'Giants',
                                string: 'Giants'
                            },
                            hl_id2: {
                                value: 'Bears',
                                string: 'Bears'
                            },
                            hl_id3: {
                                value: 'No Thanksgiving Cowboys',
                                string: 'Cowboys*',
                            },
                            hl_id4: {
                                value: 'Broncos',
                                string: 'Broncos'
                            },
                            hl_id5: {
                                value: 'Cardinals',
                                string: 'Cardinals'
                            },
                            hl_id6: {
                                value: 'Falcons',
                                string: 'Falcons'
                            },
                            hl_id7: {
                                value: 'Titans',
                                string: 'Titans'
                            },
                            hl_id8: {
                                value: 'Panthers',
                                string: 'Panthers'
                            },
                            hl_id9: {
                                value: 'Jaguars',
                                string: 'Jaguars'
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
                            value: '.15',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id2: {
                            value: '.3',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id3: {
                            value: '.45',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id4: {
                            value: '.6',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id5: {
                            value: '.75',
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
                    barDetails: {
                        bar_id0: {
                            fill: '#041E42',
                            stroke: '#041E42',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Cowboys',
                            vertical_value: 0.698924731182796,
                            dashed: false
                        },
                        bar_id1: {
                            fill: '#0B2265',
                            stroke: '#0B2265',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Giants',
                            vertical_value: 0.666666666666667,
                            dashed: false
                        },
                        bar_id2: {
                            fill: '#0B162A',
                            stroke: '#0B162A',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Bears',
                            vertical_value: 0.650793650793651,
                            dashed: false
                        },
                        bar_id3: {
                            fill: '#FFFFFF',
                            stroke: '#041E42',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'No Thanksgiving Cowboys',
                            vertical_value: 0.591397849,
                            dashed: true
                        },
                        bar_id4: {
                            fill: '#FB4F14',
                            stroke: '#FB4F14',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Broncos',
                            vertical_value: 0.567567567567568,
                            dashed: false
                        },
                        bar_id5: {
                            fill: '#97233F',
                            stroke: '#97233F',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Cardinals',
                            vertical_value: 0.338028169014085,
                            dashed: false
                        },
                        bar_id6: {
                            fill: '#A71930',
                            stroke: '#A71930',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Falcons',
                            vertical_value: 0.328947368421053,
                            dashed: false
                        },
                        bar_id7: {
                            fill: '#0C2340',
                            stroke: '#0C2340',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Titans',
                            vertical_value: 0.294871794871795,
                            dashed: false
                        },
                        bar_id8: {
                            fill: '#041E42',
                            stroke: '#041E42',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Panthers',
                            vertical_value: 0.264705882352941,
                            dashed: false
                        },
                        bar_id9: {
                            fill: '#101820',
                            stroke: '#101820',
                            stroke_width: '5',
                            width_percentage: .9,
                            horizontal_value: 'Jaguars',
                            vertical_value: 0.218181818181818,
                            dashed: false
                        }
                    }
                }
            },
            annotationDetails: {
                pointAnnotationDetails: {
                    pa_id0: {
                        string: '*Even if the Cowboys never played on Thanksgiving they would still be third among all NFL teams',
                        verticalBounds: {
                            lowerBound: .77,
                            upperBound: .9
                        },
                        horizontalBounds: {
                            lowerBound: .39,
                            upperBound: 1
                        },
                        verticalAxis: 'va_id0',
                        horizontalAxis: 'ha_id0',
                        horizontalValue: 'No Thanksgiving Cowboys',
                        verticalValue: 0.591397849,
                        tailBuffer: 3,
                        headBuffer: 3,
                        markerRefX: 5,
                        calloutAttaches: {
                            verticalPosition: .5,
                            horizontalPosition: 0
                        }
                    }
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
            re_id3: { type: 'textbox', id: 'tb_id2', width: '100%' }
        },
        rw_id4: {
            re_id4: { type: 'textbox', id: 'tb_id3' },
            re_id5: { type: 'textbox', id: 'tb_id4', justifyContent: 'flex-end', flexGrow: '1' }
        }
    }
};