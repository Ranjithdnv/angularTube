import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './action/red';
import { profileReducer } from './actions/state';
import { provideEffects } from '@ngrx/effects';
import { itemsReducer } from './effects/reducer';
import { ItemsEffects } from './effects/eff.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommentReducer } from './commentstore/commentreducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'profile', reducer: profileReducer }),
    provideState({ name: 'items', reducer: itemsReducer }),
    provideState({ name: 'comments', reducer: CommentReducer }),
    provideEffects(ItemsEffects),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};
