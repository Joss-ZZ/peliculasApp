import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pelicula-input',
  templateUrl: './pelicula-input.component.html',
  styleUrls: ['./pelicula-input.component.css']
})
export class PeliculaInputComponent implements OnInit {

  termino : string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe((termino)=> this.onDebounce.emit(termino));
  }

  buscar(){
    this.onEnter.emit(this.termino);
    this.termino = '';
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
