import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public description: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      delete: boolean;
      name?: string;
      id?: number;
      price?: number;
    }
  ) {}

  public submit() {
    if (this.data.delete) {
      this.dialogRef.close(true);
      return;
    }
    this.dialogRef.close({
      name: this.name,
      id: this.data.id,
      price: this.price,
      description: this.description,
    });
  }

  public cancel() {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    this.name = this.data.name!;
    this.price = this.data.price!;
  }
}
