## Instalación de los complementos Geolocation y Geocoder
### Geolocation
- ionic cordova plugin add cordova-plugin-geolocation
- npm install @ionic-native/geolocation
### Geocoder
- ionic cordova plugin add cordova-plugin-nativegeocoder
- npm install @ionic-native/native-geocoder
## Importar los complementos en el módulo de la aplicación.
###  app.module.ts
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

.......

 imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
 providers: [

 Geolocation,
 NativeGeocoder,
 
 ## Agregar Google Map en la página de inicio
 ### home.page.html
 <ion-header [translucent]="true">
  <ion-toolbar color="warning">
    <!-- <ion-button (click)="loadMap(); guardarUbicacion()" shape="round" color="dark">
      <ion-icon slot="start" name="locate"></ion-icon>
      Mi Ubicación
    </ion-button> -->
    <ion-title slot="start">Google Map</ion-title>
    <ion-button routerLink="/historial" shape="round" color="dark">
      <ion-icon slot="end" name="timer-outline"></ion-icon>
      Historial
    </ion-button>
  </ion-toolbar>
</ion-header>
<ion-content [fullscreen]="true" *ngIf="visible">
  <ion-card>
    <div class="map-wrapper">
      <div id="map_center">
        <img src="assets/icon/location-marker.png" />
      </div>
      <div #map id="map"></div>
    </div>
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <!-- <ion-card> -->
          <ion-card>
        <ion-col size="6">
          <b>Latitud</b>
        </ion-col>
        <ion-col>
          {{latitude}}
        </ion-col>
      </ion-card>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-card>
        <ion-col size="6">
          <b>Longitud</b>
        </ion-col>
        <ion-col>
          {{longitude}}
        </ion-col>
      </ion-card>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-card>
        <ion-col size="6">
          <b>Dirección</b>
        </ion-col>
        <ion-col>
          {{address}}
        </ion-col>
      </ion-card>
      </ion-row>
    </ion-grid>
  </ion-card>
</ion-content>
<ion-content *ngIf="!visible">
<ion-grid fixed>
  <ion-card>
  <ion-row class="ion-justify-content-center">
    <ion-col size="8" style="align-self: center;">
      <ion-img src="/assets/images/Fondo.png" ></ion-img>
      <ion-button shape="round" expand="full" (click)="loadMap(); guardarUbicacion()" shape="round" color="dark">
        <ion-icon slot="start" name="locate"></ion-icon>
        Mi Ubicación
      </ion-button>
    </ion-col>
  </ion-row>
</ion-card>
</ion-grid>
</ion-content>




