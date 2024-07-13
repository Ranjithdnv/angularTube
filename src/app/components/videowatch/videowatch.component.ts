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
  videos: video[] = [
    {
      videoid: 1,
      Videourl: '/assets/videos/vid.mp4',
      userid: 'user1',
      name: 'Rave Party',
      url: 'assets/images/ll.jpg',
      desc: 'A rave party is an energetic and vibrant gathering, often held in unconventional locations such as warehouses or open fields. It features electronic dance music (EDM), laser light shows, and dynamic visuals.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid4.mp4',
      userid: 'user1',
      name: 'Earth at Night',
      url: 'assets/images/ll.jpg',
      desc: 'The Earth at night is a breathtaking sight, with city lights forming a luminous web across continents. From space, densely populated areas glow brightly, showcasing the human footprint. ',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid5.mp4',
      userid: 'Indian Flag',
      name: 'First Video',
      url: 'assets/images/ll.jpg',
      desc: 'The Indian flag, known as the "Tiranga," consists of three horizontal stripes of saffron, white, and green, with a navy blue Ashoka Chakra (wheel) with 24 spokes at its center.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid6.mp4',
      userid: 'user1',
      name: 'Roads at Valley',
      url: 'assets/images/ll.jpg',
      desc: 'Roads winding through a valley present a picturesque view, often meandering alongside rivers or nestled between towering mountains. These roads, sometimes narrow and serpentine, offer travelers stunning vistas of lush greenery, rocky cliffs, and serene water bodies',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid3.mp4',
      userid: 'Church Temple',
      name: 'Foot Ball',
      url: '/assets/videos/vid3.mp4',
      desc: 'Football, also known as soccer in some parts of the world, is a globally beloved sport played by two teams of eleven players on a rectangular field with goals at each end. The objective is to score by getting the ball into the opposing goal. ',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid2.mp4',
      userid: 'user1',
      name: 'Church',
      url: '/assets/videos/vid3.mp4',
      desc: 'A church temple is a place of worship that combines architectural elements of both Christian churches and Hindu temples. Such a structure may feature a blend of spires and steeples with ornate carvings and domes.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid7.mp4',
      userid: 'Kasi',
      name: 'Kasi',
      url: '/assets/videos/vid3.mp4',
      desc: 'Kashi, also known as Varanasi, is one of the oldest continuously inhabited cities in the world, located on the banks of the Ganges River in India. It is a major cultural and religious center, known for its ghats (riverfront steps), temples, and vibrant streets. Pilgrims flock to Kashi to perform rituals, take holy dips in the Ganges, and seek spiritual enlightenment in this city, often referred to as the spiritual heart of India.',

      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid8.mp4',
      userid: 'user1',
      name: 'accidents',
      url: '/assets/videos/vid3.mp4',
      desc: 'These roads, sometimes narrow and serpentine, offer travelers stunning vistas of lush greenery, rocky cliffs, and serene water bodies. The journey through such valleys is both a visual treat and an adventure.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 1,
      Videourl: '/assets/videos/vid2.mp4',
      userid: 'user1',
      name: 'First Video',
      url: '/assets/videos/vid3.mp4',
      desc: 'This is the description for the first video.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },

    {
      videoid: 1,
      Videourl: '/assets/videos/vid6.mp4',
      userid: 'user1',
      name: 'First Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the first video.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
  ];
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
      Videourl: '',
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
      Videourl: '',
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
