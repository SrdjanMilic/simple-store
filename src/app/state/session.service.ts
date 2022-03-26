import { SessionStore } from './session.store';
import { Injectable } from '@angular/core';
import { createPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  createPost(title: string, body: string) {
    const post = createPost(title, body);
    this.sessionStore.add(post);
  }

}
