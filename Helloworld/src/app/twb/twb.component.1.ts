import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  template: `
  <div *ngIf='isVisible; then thenPart; else elsePart'> </div>

  <ng-template #thenPart>
  <h2>Name is then</h2>
</ng-template>

  <ng-template #elsePart>
    <h2>Name is hidden</h2>
  </ng-template>
  `,
  styleUrls: ['./twb.component.css']
})
export class TwbComponent1  {
public isVisible = true;
}
