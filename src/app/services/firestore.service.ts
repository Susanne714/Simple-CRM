import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  // READ
  getData(collectionName: string): Observable<any[]> {
    const dataCollection = collection(this.firestore, collectionName);
    return collectionData(dataCollection, { idField: 'id' });
  }

  // CREATE
  addData(collectionName: string, data: any) {
    const dataCollection = collection(this.firestore, collectionName);
    return addDoc(dataCollection, data);
  }
}
