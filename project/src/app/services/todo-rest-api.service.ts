import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoRestApiService {

  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private carDataCache: Car[] = [];
  private singleCarDataCach: Car = null;

  private refreshAllCars() {
    this.http.get('api/cars').subscribe((data: Car[]) => {
      this.carDataCache = data;
    },
      err => {
        console.log(err);
      });
  }
  public refreshSelectedCar(id: number) {
    this.http.get('api/cars/' + id).subscribe((data: Car) => {
      this.singleCarDataCach = data;
      // console.log('testdata:' + JSON.stringify(data));
    },
      err => {
        console.log(err);
      });
  }

  constructor(private http: HttpClient) {
    this.refreshAllCars();
    // this.refreshSelectedCar();
  }


  get cars(): Car[] {
    return this.carDataCache;
  }

  get selectedCar(): Car {
    // console.log('cacheStart' + JSON.stringify(this.singleCarDataCach) + 'cacheEnd');
    return this.singleCarDataCach;
  }


  // deleteTodo(id: number) {

  //   this.todoDataCache = this.todoDataCache.filter(t => t.id !== id);
  //   this.http.delete(
  //     `api/todos/` + id).subscribe(
  //       () => this.refresh(),
  //       err => {
  //         console.log(err);
  //         this.refresh();
  //         this.MessageBoxService.display('Fehler beim Löschen: Code ' + err.status, MessageBoxType.danger);
  //       });
  // }

  // saveTodo(newTodo: TodoEntry) {
  //   this.todoDataCache.push(newTodo);
  //   const body = new URLSearchParams();
  //   body.set('label', newTodo.label);
  //   body.set('category_id', String(newTodo.category.id));
  //   if (newTodo.dueDate) {
  //     body.set('dueDate', String(newTodo.dueDate));
  //   }
  //   if (newTodo.priority) {
  //     body.set('priority', String(newTodo.priority));
  //   }
  //   console.log('body: ' + body.toString());
  //   this.http.post(
  //     `api/todoss`,
  //     body.toString(),
  //     this.options).subscribe(() => this.refresh(),
  //       (err) => {
  //         // reverse change
  //         this.refresh();
  //         this.MessageBoxService.display('Fehler beim Speichern: StatusCode '
  //           + err.status, MessageBoxType.danger); console.log(err);
  //       });
  // }

  // deleteAll() {
  // this.localStorage.setItem('todos', JSON.stringify([]));
  // }

}



