import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

export interface SessionState extends EntityState<Post, string> {
  id: string;
  title: string;
  body: string;
}

export function createInitialState(): SessionState {
  return {
    id: '',
    title: '',
    body: ''
  };
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'session' })
export class SessionStore extends EntityStore<SessionState> {
  constructor() {
    super(createInitialState);
  }
}
