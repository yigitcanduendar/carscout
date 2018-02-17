import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../model/Car';

@Injectable()
export class TodoRestApiService {

  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  private carDataCache: Car[] = [];

  private refresh() {
    this.http.get('api/cars').subscribe(data => {
      this.carDataCache = <Car[]>data;
    },
      err => {
        console.log(err);
      });
  }

  constructor(private http: HttpClient) {
    this.refresh();
  }


  get cars(): Car[] {
    return this.carDataCache;
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

  deleteAll() {
    // this.localStorage.setItem('todos', JSON.stringify([]));
  }

  generateTestData() {
    // const todoList: TodoEntry[] = [];
    // todoList.push(new TodoEntry('Rasen mähen', this.todoCategoriesService.categories[0], new Date('2017/11/12'), 1));
    // todoList.push(new TodoEntry('Spülmaschine ausräumen', this.todoCategoriesService.categories[0], new Date('2017/09/29'), 3));
    // todoList.push(new TodoEntry('Fußballtraining absagen', this.todoCategoriesService.categories[3], new Date('2018/01/01')));
    // todoList.push(new TodoEntry('externe Festplatte für Angular besorgen', this.todoCategoriesService.categories[2]));
    // todoList.push(new TodoEntry('Rechnungen überweisen', this.todoCategoriesService.categories[1]));
    // todoList.push(new TodoEntry('Kontoauszüge holen', this.todoCategoriesService.categories[1]));
    // todoList.forEach(t => this.saveTodo(t));
  }

}



