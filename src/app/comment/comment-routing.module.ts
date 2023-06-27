import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { commentGuard } from './guard/comment.guard';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
    resolve: { comments: commentGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
