/*! Rappid v2.4.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2018-12-24 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


import {Component, ElementRef, OnInit} from '@angular/core';

import {StencilService} from '../services/stencil-service';
import {ToolbarService} from '../services/toolbar-service';
import {InspectorService} from '../services/inspector-service';
import {HaloService} from '../services/halo-service';
import {KeyboardService} from '../services/keyboard-service';
import RappidService from '../services/kitchensink-service';
import {HttpClient} from "@angular/common/http";
import {ReadJson} from "./components/json-data/read-json";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


    private rappid: any;




    constructor(private element: ElementRef ,private http:HttpClient) {

    }
    path: string="https://jsonplaceholder.typicode.com/users";



    ngOnInit() {

        let tempdata=4;
        var alphas:string[];
        alphas = ["test1","test2","test3","test4"]
        let readJson:ReadJson[];

        this.http.get<ReadJson[]>(this.path).subscribe(
            response=> {
                readJson = response;

                for(let i=0; i<readJson.length; i++)
                {
                    console.log(readJson[i].name);

                }
        this.rappid = new RappidService(
            this.element.nativeElement,
            new StencilService(tempdata,alphas,readJson),
            new ToolbarService(),
            new InspectorService(),
            new HaloService(),
            new KeyboardService()
        );
        this.rappid.startRappid();
            })
    }
}
