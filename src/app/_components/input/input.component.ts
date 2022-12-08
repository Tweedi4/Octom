import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  email: string = '';
  @Input() label!: string;
  @Input() type: string = 'text';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  emitInput(input:string) {
    console.log('value :' + input)
    this.inputEmitter.emit(input);
  }
}
