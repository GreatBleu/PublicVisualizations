const vi_id1 = {
    data: {
        series: {
            series_zero: {
                type: 'date',
                observations: {
                    ob_id0: new Date('1900'),
                    ob_id1: new Date('1904'),
                    ob_id2: new Date('1908'),
                    ob_id3: new Date('1912'),
                    ob_id4: new Date('1920'),
                    ob_id5: new Date('1924'),
                    ob_id6: new Date('1928'),
                    ob_id7: new Date('1932'),
                    ob_id8: new Date('1936'),
                    ob_id9: new Date('1948'),
                    ob_id10: new Date('1952'),
                    ob_id11: new Date('1956'),
                    ob_id12: new Date('1960'),
                    ob_id13: new Date('1964'),
                    ob_id14: new Date('1968'),
                    ob_id15: new Date('1972'),
                    ob_id16: new Date('1976'),
                    ob_id17: new Date('1980'),
                    ob_id18: new Date('1984'),
                    ob_id19: new Date('1988'),
                    ob_id20: new Date('1992'),
                    ob_id21: new Date('1996'),
                    ob_id22: new Date('2000'),
                    ob_id23: new Date('2004'),
                    ob_id24: new Date('2008'),
                    ob_id25: new Date('2012'),
                    ob_id26: new Date('2016'),
                    ob_id27: new Date('2020'),
                    ob_id28: new Date('2024')
                }
            },
            series_one: {
                type: 'float',
                observations: {
                    ob_id0: 1.90,
                    ob_id1: 1.80,
                    ob_id2: 1.90,
                    ob_id3: 1.93,
                    ob_id4: 1.93,
                    ob_id5: 1.98,
                    ob_id6: 1.94,
                    ob_id7: 1.97,
                    ob_id8: 2.03,
                    ob_id9: 1.98,
                    ob_id10: 2.04,
                    ob_id11: 2.12,
                    ob_id12: 2.16,
                    ob_id13: 2.18,
                    ob_id14: 2.24,
                    ob_id15: 2.23,
                    ob_id16: 2.25,
                    ob_id17: 2.36,
                    ob_id18: 2.35,
                    ob_id19: 2.38,
                    ob_id20: 2.34,
                    ob_id21: 2.39,
                    ob_id22: 2.35,
                    ob_id23: 2.36,
                    ob_id24: 2.36,
                    ob_id25: 2.38,
                    ob_id26: 2.38,
                    ob_id27: 2.37,
                    ob_id28: 2.36
                }
            }
        }
    },

    textBoxDetails: {
        tb_id0: {
            string: "The Six Centimeter Quantum Leap",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '20pt',
            fontWeight: '700'
        },
        tb_id1: {
            string: `Gold Medal-Winning Efforts in Modern Olympic High Jump`,
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '16pt',
            fontWeight: '300'
        },
        tb_id2: {
            string: 'Source: trackandfieldnews.com',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '10pt',
            fontWeight: '300'
        },
        tb_id3: {
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
                    lowerBound: '1.5',
                    upperBound: '2.7',
                    horizontalBuffer: '2',
                    verticalAxisLabelDetails: {
                        string: 'Meters',
                        position: 'top-tick'
                    },
                    verticalTickLabelGroupDetails: {
                        vtlg_id0: {
                            vl_id0: {
                                value: '2.5',
                                string: '2.5'
                            },
                            vl_id1: {
                                value: '2.0',
                                string: '2.0'
                            },
                            vl_id2: {
                                value: '1.5',
                                string: '1.5'
                            }
                        }
                    }
                }
            },

            horizontalAxesDetails: {
                ha_id0: {
                    type: 'datetime',
                    verticalBuffer: '5',
                    lowerBound: '1896',
                    upperBound: '2028',
                    horizontalTickLabelGroupDetails: {
                        htlg_id0:
                        {
                            hl_id0: {
                                value: '1900',
                                string: '1900'
                            },
                            hl_id1: {
                                value: '1931',
                                string: '1931'
                            },
                            hl_id2: {
                                value: '1962',
                                string: '1962'
                            },
                            hl_id3: {
                                value: '1993',
                                string: '1993'
                            },
                            hl_id4: {
                                value: '2024',
                                string: '2024'
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
                            value: '1.3',
                            stroke: 'black',
                            strokeWidth: '1'
                        },
                        hgl_id1: {
                            value: '1.7',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id2: {
                            value: '2.1',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id3: {
                            value: '2.5',
                            stroke: 'gray',
                            strokeWidth: '1'
                        }
                    }
                }
            },

            lineDetails: {
                li_id0: {
                    verticalAxis: 'va_id0',
                    horizontalAxis: 'ha_id0',
                    verticalSeries: 'series_one',
                    horizontalSeries: 'series_zero',
                    breakDetails: {
                        lb_id0: {
                            startingObservation: 'ob_id3',
                            endingObservation: 'ob_id4'
                        },
                        lb_id1: {
                            startingObservation: 'ob_id8',
                            endingObservation: 'ob_id9'
                        }
                    }
                }
            },

            barGroupsDetails: {
            },

            annotationDetails: {
                timeSpanAnnotationDetails: {
                    ts_id0: {
                        lowerBound: '1912',
                        upperBound: '1920',
                        fill: '#D3D3D3',
                        string: 'WWI',
                        axisId: 'ha_id0'
                    },
                    ts_id1: {
                        lowerBound: '1936',
                        upperBound: '1948',
                        fill: '#D3D3D3',
                        string: 'WWII',
                        axisId: 'ha_id0'
                    },
                    ts_id2: {
                        lowerBound: '1968',
                        upperBound: '2024',
                        fill: '#D3D3D3',
                        string: 'All Champions Use the Flop',
                        axisId: 'ha_id0'
                    }
                },
                pointAnnotationDetails: {
                    pa_id0: {
                        string: "Dick Fosbury captures gold with his famous 'flop'",
                        verticalBounds: {
                            lowerBound: .38,
                            upperBound: .5
                        },
                        horizontalBounds: {
                            lowerBound: .6,
                            upperBound: .99
                        },
                        verticalAxis: 'va_id0',
                        horizontalAxis: 'ha_id0',
                        horizontalValue: '1968',
                        verticalValue: 2.24,
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
            re_id4: { type: 'textbox', id: 'tb_id2' },
            re_id5: { type: 'textbox', id: 'tb_id3', justifyContent: 'flex-end', flexGrow: '1' }
        }
    }
};