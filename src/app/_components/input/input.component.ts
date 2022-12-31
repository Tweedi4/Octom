import { Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { ControlValueAccessor, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  formControlDirective!: FormControlDirective;

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  email: string = '';
  @Input() label!: string;
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() id:string = '';
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

    emitInput(input:string) {
      console.log('value :' + input)
      this.inputEmitter.emit(input);
    }

  ngOnInit(): void {

  }
}
