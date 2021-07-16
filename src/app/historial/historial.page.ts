import { Component, OnInit } from '@angular/core';
import { Ubicacion } from '../modelsBD';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  ubicaciones : Ubicacion [] =[];
  private path = '/UbicacionesGps';

  constructor(public firestoreService:FirestoreService) { }

  ngOnInit() {
    this.getMascotas();
  }

  getMascotas() {
    //debemos mandar un tipo '<>' que en este caso es producto q se define
    this.firestoreService.getCollection<Ubicacion>(this.path).subscribe(res => {
      this.ubicaciones = res;
      console.log('Estos son las MAscotas En LA BD', res);
    });
  }
}
