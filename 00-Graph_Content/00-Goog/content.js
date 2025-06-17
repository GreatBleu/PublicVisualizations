const vi_id0 = {
    data: {
        series: {
            series_zero: {
                type: 'date',
                observations: {
                    ob_id0: new Date('2021-03-31'),
                    ob_id1: new Date('2021-06-30'),
                    ob_id2: new Date('2021-09-30'),
                    ob_id3: new Date('2021-12-31'),
                    ob_id4: new Date('2022-03-31'),
                    ob_id5: new Date('2022-06-30'),
                    ob_id6: new Date('2022-09-30'),
                    ob_id7: new Date('2022-12-31'),
                    ob_id8: new Date('2023-03-31'),
                    ob_id9: new Date('2023-06-30'),
                    ob_id10: new Date('2023-09-30'),
                    ob_id11: new Date('2023-12-31'),
                    ob_id12: new Date('2024-03-31'),
                    ob_id13: new Date('2024-06-30'),
                    ob_id14: new Date('2024-09-30'),
                    ob_id15: new Date('2024-12-31'),
                }
            },
            series_one: {
                type: 'float',
                observations: {
                    ob_id0: 31879,
                    ob_id1: 35845,
                    ob_id2: 37926,
                    ob_id3: 43301,
                    ob_id4: 39618,
                    ob_id5: 40689,
                    ob_id6: 39539,
                    ob_id7: 42604,
                    ob_id8: 40359,
                    ob_id9: 42628,
                    ob_id10: 44026,
                    ob_id11: 48020,
                    ob_id12: 46156,
                    ob_id13: 48509,
                    ob_id14: 49385,
                    ob_id15: 54034
                }
            }
        }
    },

    textBoxDetails: {
        tb_id0: {
            string: "Where's the AI Impact?",
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '20pt',
            fontWeight: '700'
        },
        tb_id1: {
            string: `Alphabet's "Google Search & other" revenue before and after the public release of ChatGPT`,
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Verdana',
            textAlign: 'left',
            fontSize: '16pt',
            fontWeight: '300'
        },
        tb_id2: {
            string: 'Source: Alphabet SEC (10-Q and 10-K) filings',
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
                    lowerBound: '30000',
                    upperBound: '58000',
                    horizontalBuffer: '2',
                    verticalAxisLabelDetails: {
                            string: 'Billion',
                            position: 'top-tick'
                    },
                    verticalTickLabelGroupDetails: {
                        vtlg_id0: {
                            vl_id0: {
                                value: '55000',
                                string: '$55'
                            },
                            vl_id1: {
                                value: '50000',
                                string: '50'
                            },
                            vl_id2: {
                                value: '45000',
                                string: '45'
                            },
                            vl_id3: {
                                value: '40000',
                                string: '40'
                            },
                            vl_id4: {
                                value: '35000',
                                string: '35'
                            },
                            vl_id5: {
                                value: '30000',
                                string: '30'
                            }
                        }
                    }
                }
            },

            horizontalAxesDetails: {
                ha_id0: {
                    type: 'datetime',
                    verticalBuffer: '5',
                    lowerBound: '3/20/2021',
                    upperBound: '01/30/2025',
                    horizontalTickLabelGroupDetails: {
                        htlg_id0:
                        {
                            hl_id0: {
                                value: '3/31/2021',
                                string: 'Q1'
                            },
                            hl_id1: {
                                value: '3/31/2022',
                                string: 'Q1'
                            },
                            hl_id2: {
                                value: '3/31/2023',
                                string: 'Q1'
                            },
                            hl_id3: {
                                value: '3/31/2024',
                                string: 'Q1',
                            }
                        },
                        htlg_id1:
                        {
                            hl_id0: {
                                value: '3/31/2021',
                                string: '2021'
                            },
                            hl_id1: {
                                value: '3/31/2022',
                                string: '2022'
                            },
                            hl_id2: {
                                value: '3/31/2023',
                                string: '2023'
                            },
                            hl_id3: {
                                value: '3/31/2024',
                                string: '2024',
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
                            value: '30000',
                            stroke: 'black',
                            strokeWidth: '1'
                        },
                        hgl_id1: {
                            value: '35000',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id2: {
                            value: '40000',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id3: {
                            value: '45000',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id4: {
                            value: '50000',
                            stroke: 'gray',
                            strokeWidth: '1'
                        },
                        hgl_id5: {
                            value: '55000',
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
                }
            },

            barGroupsDetails: {
            },

            annotationDetails: {
                timeSpanAnnotationDetails: {
                    tsa_id0: {
                        lowerBound: '11/30/2022',
                        upperBound: '01/30/2025',
                        fill: '#D3D3D3',
                        string: 'ChatGPT Publicly Available',
                        axisId: 'ha_id0'
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