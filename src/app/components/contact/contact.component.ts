import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  photoUrl?: string;
  company?: string;
  notes?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact!: Contact;

  @Output() edit = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  onEditContact(): void {
    this.edit.emit(this.contact);
  }

  onDeleteContact(): void {
    if (confirm(`¿Estás seguro de que quieres eliminar a ${this.contact.name}?`)) {
      this.delete.emit(this.contact.id);
    }
  }
}