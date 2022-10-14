import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'steelblue';
  @Input() text: string = 'Add';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }

  ngOnInit(): void {}
}
