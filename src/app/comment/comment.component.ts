import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { comment } from './comment';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commnetService.getComments();

  constructor(
    private commnetService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  comments: comment[] = [];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments'];
    });
  }
}
