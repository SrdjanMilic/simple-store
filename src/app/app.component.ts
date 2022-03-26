import {Component, OnInit} from '@angular/core';
import {SessionQuery} from './state/session.query';
import {SessionService} from './state/session.service';
import {Observable} from 'rxjs';
import {Post} from './models/post.model';
import {SessionStore} from './state/session.store';

const initialPost: Post = {
  id: '0',
  title: 'Initial post title',
  body: 'Initial post body lorem ipsum'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts$?: Observable<any>;

  title: string = '';
  body: string = '';

  constructor(private sessionQuery: SessionQuery,
              private sessionStore: SessionStore,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    this.sessionStore.add(initialPost);
    this.posts$ = this.sessionQuery.selectAll();
  }

  createPost() {
    this.title = 'Component title';
    this.body = 'Component body';

    this.sessionService.createPost(this.title, this.body);
  }

}
