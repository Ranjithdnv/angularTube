import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { LoginserviceService } from '../../services/loginservice.service';
import { CanActivate, Router } from '@angular/router';
import { video } from '../../interfaces/video';
import { CommonModule } from '@angular/common';
import { VideosingleComponent } from '../videosingle/videosingle.component';
import { VideoserviceService } from '../../services/videoservice.service';

import { Store, StoreModule } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../../action/action';
import { counterReducer } from '../../action/red';
import { state } from '@angular/animations';
import { ProfileState, setName, setAge, setEmail } from '../../actions/state';
import { FormsModule } from '@angular/forms';

import {
  loadItems,
  loadItemsSuccess,
  loadItemsFailure,
} from '../../effects/action';
interface AppState {
  counter: {
    count: number;
  };
}
@Component({
  selector: 'app-videowatch',
  standalone: true,
  templateUrl: './videowatch.component.html',
  styleUrl: './videowatch.component.scss',
  imports: [
    FormsModule,
    VideoComponent,
    CommonModule,
    VideosingleComponent,
    //  StoreModule.forRoot({ counter: counterReducer }),
  ],
})
export class VideowatchComponent implements OnInit, OnChanges, CanActivate {
  namedata: string = '';
  nameemail: string = '';
  nameage: any;
  videofromparent: video[] = [
    {
      videoid: 0,
      userid: '',
      name: '',
      url: '',
      desc: '',
      videoCommentid: '',
      createdtime: '',
    },
  ];
  count$: Observable<number>;
  data$: { name: string; age: number; email: string } = {
    name: '',
    age: 0,
    email: '',
  };

  constructor(
    private loginservice: LoginserviceService,
    private videoservice: VideoserviceService,
    private router: Router,
    private store: Store<AppState>,
    private store3: Store<any>,
    private store2: Store<{ profile: ProfileState }>
  ) {
    this.count$ = store.select((state) => state.counter.count);

    store2.select('profile').subscribe(
      (res) => {
        console.log(res);
        this.data$ = res;
      },
      (err) => {}
    );
    store3.select('items').subscribe(
      (res) => {
        console.log(res.items);
        this.data$ = res;
      },
      (err) => {}
    );

    this.count$ = store.select((state) => state.counter.count);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.videofromparent = this.videoservice.videotogettparent();
    console.log('changesssssssssssssssssssss');
  }
  ngOnInit(): void {
    this.videoservice.getvideo().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );

    //this.store3.dispatch(loadItems());
    // this.store3.dispatch(loadItemsSuccess({ items: ['workingforever'] }));
  }

  pp() {
    console.log('lo000000aaaaaaaaaaaad');
    this.store3.dispatch(loadItems());
  }
  updateName(name: string) {
    console.log(name);
    this.store.dispatch(setName(name));
  }

  updateAge(age: number) {
    this.store.dispatch(setAge(age));
  }

  updateEmail(email: string) {
    this.store.dispatch(setEmail(email));
  }
  increment() {
    console.log('incremettttt');
    console.log(this.store.select((s) => s.counter.count));

    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  canActivate(): boolean {
    if (!this.loginservice.name) {
      console.log(this.loginservice);

      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  @Input() mess: video[] = [
    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
  ];
  videoids: {}[] = [{ name: 'g' }, { name: 'g' }, { name: 'g' }, { name: 'g' }];
  @Output() messageEvent: EventEmitter<video[]> = new EventEmitter<video[]>();
  sendMessage() {
    this.messageEvent.emit(this.mess);
    console.log(44444444);
    //   console.log(this.mess);
  }
  // videofromvideoparent(videoparam: video) {
  //   this.messageEvent.emit(this.mess);
  //   this.videofromparent = videoparam;
  //   console.log(44444444);
  //   //   console.log(this.mess);
  // }
  hi() {
    this.videofromparent = this.videoservice.videotoparent();
    console.log(this.videofromparent);
  }
}
