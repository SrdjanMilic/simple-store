import { QueryEntity } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionQuery extends QueryEntity<SessionState> {
  constructor(protected override store: SessionStore) {
    super(store);
  }
}
