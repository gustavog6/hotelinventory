import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from './comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
