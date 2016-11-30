import { Component } from '@angular/core';

import { Painter } from './painter';

@Component({
    inputs: ['painter'],
    selector: 'my-painter',
    template: `
        <div *ngIf="painter">        
            <h2>{{painter.name}}</h2>            
            <div><label>Ejemplos:  </label>  {{painter.examples}}</div>
            <div>                
                <label>Nombre: </label>
                <div><input [(ngModel)]="painter.Nombre" placeholder="Nombre"></div>
            </div>
        </div>
    `
})
export class PainterDetailComponent {
    public painter: Painter;
}
