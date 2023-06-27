import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { comment } from '../comment';
import { CommentService } from '../comment.service';
import { inject } from '@angular/core';

export const commentGuard: ResolveFn<comment[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(CommentService).getComments();
};
