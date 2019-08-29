import { Content } from '@angular/compiler/src/render3/r3_ast';
import { stringify } from '@angular/compiler/src/util';
import { CONTENT_ATTR } from '@angular/compiler';

export class SubmitClass {
    constructor(public _CONTENT?: any ) {
       }
    get CONTENT() {
        return this._CONTENT;
    }
    set CONTENT(value: any) {
        this._CONTENT = value;
    }

}
