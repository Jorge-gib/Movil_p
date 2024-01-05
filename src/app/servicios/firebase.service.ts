import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  agregarJuego(nombre: string, tipo: string) {
    return this.db.list('/juegos').push({ nombre, tipo });
  }

  obtenerJuegos() {
    return this.db.list('/juegos').valueChanges();
  }
}
