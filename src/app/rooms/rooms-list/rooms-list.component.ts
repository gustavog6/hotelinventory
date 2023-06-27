import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input() rooms: Array<RoomsList> = []; // declarar la propiedad y el tipo de variable que debe ser asignado al usar ese componente.

  @Output() selectedRoom = new EventEmitter<RoomsList>(); // envíamos un evento al componente que este suscrito, declarando un EventEmitter y especificando su DataType

  @Input() roomListName: string = '';

  @Input() filteredPrice: any = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (!changes['roomListName']?.firstChange) {
      // this.roomListName.toUpperCase; // no mutar la data, reinstanciar.
      this.roomListName = this.roomListName.toUpperCase();
    }
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room); // emitir la variable por el evento creado
  }
}
