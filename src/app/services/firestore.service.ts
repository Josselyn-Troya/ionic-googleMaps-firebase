import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database:AngularFirestore) { }

  createDoc(data: any, path: string, id: string){
    console.log('createDoc de firestore DATA => ', data);
    console.log('createDoc de firestore PATH => ', path);
    console.log('createDoc de firestore ID => ', id);
    const collection  = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  getDoc<tipo>(path: string, id: string){
    const collection = this.database.collection<tipo>(path);
    return collection.doc(id).valueChanges();
    // el value changes es para ver los datos en tiempo real si existen cambios
  }

  getId(){
    return this.database.createId();
  }

}

