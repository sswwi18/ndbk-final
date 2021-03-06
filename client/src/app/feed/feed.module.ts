import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedPageComponent} from './feed-page/feed-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PostComponent} from './post/post.component';
import {LikeButtonComponent} from './like-button/like-button.component';
import {DislikeButtonComponent} from './dislike-button/dislike-button.component';
import {FilterFeedComponent} from './filter-feed/filter-feed.component';
import { FollowComponent } from './follow/follow.component';
import {FilterPipe} from '../filter.pipe';


@NgModule({
  declarations: [FeedPageComponent, PostComponent, LikeButtonComponent, DislikeButtonComponent, FilterFeedComponent, FollowComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: FeedPageComponent},
      {path: 'hashtag', component: FilterFeedComponent}
    ]),
  ],
  exports: [FilterFeedComponent]
})
export class FeedModule {
}


