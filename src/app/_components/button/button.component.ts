import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type!:string;
  @Output() click!: MethodDecorator | EventEmitter<any|null> |string | void;
  @Input() className!: string;

  clickEmitter: EventEmitter<any|null> = new EventEmitter<any|null>();

  ngOnInit(): void {
    if (this.type === 'submit') {
      this.click = this.clickEmitter;
    }
  }

}
