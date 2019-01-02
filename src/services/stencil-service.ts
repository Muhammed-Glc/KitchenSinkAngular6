/*! Rappid v2.4.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2018-12-24 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


import {ui, dia} from '../../vendor/rappid';
import * as appShapes from '../shapes/app-shapes';
import {ReadJson} from "../app/components/json-data/read-json";

export class StencilService {
     tempdata:number;
    tempName:string[];
    readJson:ReadJson[];

    constructor(tempdata:number,tempName:string[],readJson:ReadJson[]){
        this.tempdata = tempdata;
         this.tempName=tempName;
         this.readJson=readJson;


        console.log("test data")
        console.log(this.tempName.length)
    }
    stencil: ui.Stencil;

    create(paperScroller: ui.PaperScroller, snaplines: ui.Snaplines) {

        this.stencil = new ui.Stencil({
            paper: paperScroller,
            snaplines: snaplines,
            width: 240,
            groups: this.getStencilGroups(),
            dropAnimation: true,
            groupsToggleButtons: true,
            paperOptions: function () {
                return {
                    model: new dia.Graph({},{
                        cellNamespace: appShapes
                    }),
                    cellViewNamespace: appShapes
                };
            },
            search: {
                '*': ['type', 'attrs/text/text', 'attrs/.label/text'],
                'org.Member': ['attrs/.rank/text', 'attrs/.name/text']
            },
            // Use default Grid Layout
            layout: true,
            // Remove tooltip definition from clone
            dragStartClone: cell => cell.clone().removeAttr('root/dataTooltip')
        });
    }

    setShapes() {
        this.stencil.load(this.getStencilShapes());
    }

    getStencilGroups() {
        return <{ [key: string]: ui.Stencil.Group }>{
            standard: { index: 1, label: 'Standard shapes' },
            fsa: { index: 2, label: 'State machine' }
        };
    }

    getStencilShapes() {

       let tempArray = {
            standard: [

            ],
            fsa: [

                {
                    type: 'fsa.StartState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'Start State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        text: {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.EndState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'End State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.inner': {
                            fill: '#6a6c8a',
                            stroke: 'transparent'
                        },
                        '.outer': {
                            fill: 'transparent',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'endState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.State',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            fill: '#6a6c8a',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'state',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                }
            ]
        };

       /* for (var i = 0; i < this.tempdata; i++) {

            tempArray.standard.push(  {
                type: 'app.RectangularModel',
                size: {width: 40, height: 30},
                allowOrthogonalResize: false,
                attrs: {
                    root: {
                        dataTooltip: 'Rectangle with ports',
                        dataTooltipPosition: 'left',
                        dataTooltipPositionSelector: '.joint-stencil'
                    },
                    body: {
                        fill: 'transparent',
                        rx: 2,
                        ry: 2,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        strokeDasharray: '0'
                    },
                    label: {
                        text: this.tempName[i],
                        fill: '#c6c7e2',
                        fontFamily: 'Roboto Condensed',
                        fontWeight: 'Normal',
                        fontSize: 11,
                        strokeWidth: 0
                    }
                },
                ports: {
                    items: [
                        {group: 'in'},
                        {group: 'in'},
                        {group: 'out'}
                    ]
                }
            })

        }
*/


        for(var i=0; i<this.readJson.length ; i++)
        {

            tempArray.standard.push(  {
                type: 'app.RectangularModel',
                size: {width: 40, height: 30},
                allowOrthogonalResize: false,
                attrs: {
                    root: {
                        dataTooltip: 'Rectangle with ports',
                        dataTooltipPosition: 'left',
                        dataTooltipPositionSelector: '.joint-stencil'
                    },
                    body: {
                        fill: 'transparent',
                        rx: 2,
                        ry: 2,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        strokeDasharray: '0'
                    },
                    label: {
                        text: this.readJson[i].name,
                        fill: '#c6c7e2',
                        fontFamily: 'Roboto Condensed',
                        fontWeight: 'Normal',
                        fontSize: 11,
                        strokeWidth: 0
                    }
                },
                ports: {
                    items: [
                        {group: 'in'},
                        {group: 'in'},
                        {group: 'out'}
                    ]
                }
            })
        }
        let tempArray2 = {
            standard: [
                {
                    type: 'standard.Rectangle',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            rx: 2,
                            ry: 2,
                            width: 50,
                            height: 30,
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rect',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Ellipse',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Ellipse',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            width: 50,
                            height: 30,
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'ellipse',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'app.RectangularModel',
                    size: {width: 40, height: 30},
                    allowOrthogonalResize: false,
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle with ports',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            rx: 2,
                            ry: 2,
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rect',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    },
                    ports: {
                        items: [
                            {group: 'in'},
                            {group: 'in'},
                            {group: 'out'}
                        ]
                    }
                },
                {
                    type: 'app.CircularModel',
                    size: {width: 5, height: 3},
                    allowOrthogonalResize: false,
                    attrs: {
                        root: {
                            dataTooltip: 'Ellipse with ports',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0',
                        },
                        label: {
                            text: 'ellipse',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    },
                    ports: {
                        items: [
                            {group: 'in'},
                            {group: 'in'},
                            {group: 'out'}
                        ]
                    }
                },
                {
                    type: 'standard.Polygon',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Rhombus',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            refPoints: '50,0 100,50 50,100 0,50',
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'rhombus',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Cylinder',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Cylinder',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        top: {
                            fill: '#31d0c6',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'cylinder',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.Image',
                    size: {width: 53, height: 42},
                    attrs: {
                        root: {
                            dataTooltip: 'Image',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        image: {
                            xlinkHref: 'assets/image-icon1.svg'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        label: {
                            text: 'image',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            fill: '#c6c7e2'
                        }
                    }
                },
                {
                    type: 'standard.EmbeddedImage',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Card',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        image: {
                            xlinkHref: 'assets/image-icon1.svg'
                        },
                        label: {
                            text: 'card',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.InscribedImage',
                    size: {width: 1, height: 1},
                    attrs: {
                        root: {
                            dataTooltip: 'Icon',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        border: {
                            stroke: '#31d0c6',
                            strokeWidth: 3,
                            strokeDasharray: '0'
                        },
                        background: {
                            fill: 'transparent'
                        },
                        image: {
                            xlinkHref: 'assets/image-icon1.svg'
                        },
                        label: {
                            text: 'icon',
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0
                        }
                    }
                },
                {
                    type: 'standard.HeaderedRectangle',
                    size: {width: 5, height: 3},
                    attrs: {
                        root: {
                            dataTooltip: 'Rectangle with header',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        body: {
                            fill: 'transparent',
                            stroke: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0'
                        },
                        header: {
                            stroke: '#31d0c6',
                            fill: '#31d0c6',
                            strokeWidth: 2,
                            strokeDasharray: '0',
                            height: 20
                        },
                        bodyText: {
                            textWrap: {
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie.',
                                width: -10,
                                height: -20,
                                ellipsis: true
                            },
                            fill: '#c6c7e2',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0,
                            refY2: 12,
                        },
                        headerText: {
                            text: 'header',
                            fill: '#f6f6f6',
                            fontFamily: 'Roboto Condensed',
                            fontWeight: 'Normal',
                            fontSize: 11,
                            strokeWidth: 0,
                            refY: 12
                        }
                    }
                }
            ],
            fsa: [

                {
                    type: 'fsa.StartState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'Start State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            width: 50,
                            height: 30,
                            fill: '#61549c',
                            'stroke-width': 0
                        },
                        text: {
                            text: 'startState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.EndState',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'End State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        '.inner': {
                            fill: '#6a6c8a',
                            stroke: 'transparent'
                        },
                        '.outer': {
                            fill: 'transparent',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'endState',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                },
                {
                    type: 'fsa.State',
                    preserveAspectRatio: true,
                    attrs: {
                        root: {
                            dataTooltip: 'State',
                            dataTooltipPosition: 'left',
                            dataTooltipPositionSelector: '.joint-stencil'
                        },
                        circle: {
                            fill: '#6a6c8a',
                            stroke: '#61549c',
                            'stroke-width': 2,
                            'stroke-dasharray': '0'
                        },
                        text: {
                            text: 'state',
                            fill: '#c6c7e2',
                            'font-family': 'Roboto Condensed',
                            'font-weight': 'Normal',
                            'font-size': 11,
                            'stroke-width': 0
                        }
                    }
                }
            ]
        };


    console.log(typeof (tempArray))



        return tempArray;
    }
}
