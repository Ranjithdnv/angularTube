import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './action';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadItems$ = createEffect(() => {
    console.log('111111ggggggggggggggggggggggggggggggggggggggggggggg');
    return this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() => {
        console.log('111111ggggggggggggggggggggggggggggggggggggggggggggg');
        return this.http.get<any[]>('api/items').pipe(
          map((items) => {
            console.log('1111111111111111111111111111111111111111');
            return loadItemsSuccess({ items });
          }),
          catchError((error) => {
            console.log('0000000000000000000000000000000000000');
            return of(loadItemsFailure({ error }));
          })
        );
      })
    );
  });
}
