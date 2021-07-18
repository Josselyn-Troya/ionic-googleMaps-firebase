## Instalación de los complementos Geolocation y Geocoder
### Geolocation
- ionic cordova plugin add cordova-plugin-geolocation
- npm install @ionic-native/geolocation
### Geocoder
- ionic cordova plugin add cordova-plugin-nativegeocoder
- npm install @ionic-native/native-geocoder
## Importar los complementos en el módulo de la aplicación.
###  [app.module.ts](https://github.com/Josselyn-Troya/ionic-googleMaps-firebase/blob/main/src/app/app.module.ts)
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

.......

 imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
 providers: [

 Geolocation,
 NativeGeocoder,
 
 ## Agregar Google Map en la página de inicio
 ### [home.page.html](https://github.com/Josselyn-Troya/ionic-googleMaps-firebase/blob/main/src/app/home/home.page.html)
 
 ## Modificar el archivo del componente de inicio para cargar el mapa de Google.
 ### [home.page.ts](https://github.com/Josselyn-Troya/ionic-googleMaps-firebase/blob/main/src/app/home/home.page.ts)
 
 ## Aplicar estilos al mapa
 ###  [home.page.scss](https://github.com/Josselyn-Troya/ionic-googleMaps-firebase/blob/main/src/app/home/home.page.scss)
 
 # [Video](https://www.youtube.com/watch?v=S0IUZe9gzg4)  
 
 

 




