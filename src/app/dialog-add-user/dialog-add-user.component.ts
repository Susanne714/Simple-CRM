import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, FormsModule, MatDialogActions, MatDialogContent, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: Date = new Date();
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestoreService: FirestoreService) { }

  // saveUser() {
  //   this.user.birthDate = this.birthDate.getTime();
  //   console.log('current user is', this.user);

  //   const userData = this.user.toPlainObject();

  //   this.firestoreService.addData('users', userData)
  //     .then(() => {
  //       console.log('User erfolgreich hinzugefügt!')
  //     })
  //     .catch(error => {
  //       console.error('Fehler beim Hinzufügen des Users:', error);
  //     })
  // }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;

    this.firestoreService.addData('users', this.user.toPlainObject())
      .then(() => {
        console.log('User erfolgreich hinzugefügt!');
        this.loading = false; // Progressbar wieder ausblenden
        this.dialogRef.close();
      })
      .catch(error => {
        console.error('Fehler beim Hinzufügen des Users:', error);
        this.loading = false; // Auch im Fehlerfall ausschalten
      });
  }

}
