import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];

  user = new User();
  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.loadUsers();
    console.log('UserComponent wurde initialisiert')
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  loadUsers() {
    this.firestoreService.getData('users').subscribe((users: any[]) => {
      this.allUsers = users.map(userData => new User(userData));
      console.log('Alle Benutzer geladen:', this.allUsers);
    });
  }


}
