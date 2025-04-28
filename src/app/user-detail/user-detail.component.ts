import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  userID: string = '';
  userData: User = new User();

  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userID = params.get('id') || '';
      console.log('User-ID aus URL:', this.userID);
      if (this.userID) {
        this.loadUserData(this.userID);
      }
    });
  }

  async loadUserData(id: string) {
    try {
      const userDoc = await this.firestoreService.getSingleUser('users', id);
      console.log('Geladene User-Daten:', userDoc);
      this.userData = new User(userDoc);
    } catch (error) {
      console.error('Fehler beim Laden des Users:', error)
    }
  }



}
