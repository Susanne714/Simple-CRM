import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc, getDoc } from '@angular/fire/firestore';

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

  getSingleUser(collectionName: string, id: string): Promise<any> {
    const documentReference = doc(this.firestore, collectionName, id);
    return getDoc(documentReference).then(docSnap => {
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error('Dokument existiert nicht')
      }
    })
  }
}
