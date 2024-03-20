import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NiceSelectOption } from '../../interfaces/option.interface';

@Component({
  selector: 'app-nice-select',
  templateUrl: './nice-select.component.html',
  styleUrls: ['./nice-select.component.scss'],
})
export class NiceSelectComponent {
  @Input() options!: NiceSelectOption[] ;
  @Input() defaultCurrent: number = 0;
  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Input() name: string = '';

  open = false;
  current: NiceSelectOption | undefined;

  @Output() onChange: EventEmitter<NiceSelectOption> =
    new EventEmitter();

  constructor() {}

  toggleOpen() {
    this.open = !this.open;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  ngOnInit() {
    this.current = undefined;
  }

  currentHandler(item: NiceSelectOption, index: number) {
    this.current = this.options[index];
    this.onChange.emit(item); 
    this.onClose();
  }

  onClose() {
    this.open = false;
  }
}
