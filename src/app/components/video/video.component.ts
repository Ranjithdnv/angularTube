import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { VideowatchComponent } from '../videowatch/videowatch.component';
import { LoginserviceService } from '../../services/loginservice.service';
import { video } from '../../interfaces/video';
import { VideoserviceService } from '../../services/videoservice.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video',
  standalone: true,
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  imports: [
    RouterLink,
    CommonModule,
    MatIconModule,
    RouterOutlet,
    VideowatchComponent,
  ],
})
export class VideoComponent implements AfterViewInit, OnInit {
  videos: video[] = [
    {
      videoid: 1,
      userid: 'user1',
      name: 'First Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the first video.',
      videoCommentid: 'comment1',
      createdtime: '2024-07-01T12:00:00Z',
    },
    {
      videoid: 2,
      userid: 'user2',
      name: 'Second Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the second video.',
      videoCommentid: 'comment2',
      createdtime: '2024-07-02T12:00:00Z',
    },
    {
      videoid: 3,
      userid: 'user3',
      name: 'Third Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the third video.',
      videoCommentid: 'comment3',
      createdtime: '2024-07-03T12:00:00Z',
    },
    {
      videoid: 4,
      userid: 'user4',
      name: 'Fourth Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the fourth video.',
      videoCommentid: 'comment4',
      createdtime: '2024-07-04T12:00:00Z',
    },
    {
      videoid: 5,
      userid: 'user5',
      name: 'Fifth Video',
      url: 'assets/images/ll.jpg',
      desc: 'This is the description for the fifth video.',
      videoCommentid: 'comment5',
      createdtime: '2024-07-05T12:00:00Z',
    },
  ];
  // @ViewChild('VideowatchComponent')
  // videowatchComponent: VideowatchComponent = new VideowatchComponent();
  data: any;

  videotovideowatch: object = {};

  ngOnInit(): void {
    this.data = this.route.snapshot.data['data'];
    this.videoservice.getvideo().subscribe(
      (res) => {
        //this.videos = res;
      },
      (err) => {}
    );
  }
  constructor(
    private loginservice: LoginserviceService,
    private videoservice: VideoserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // canActivate(): boolean {
  //   if (!this.loginservice.name) {
  //     console.log(this.loginservice);

  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }

  // @ViewChild(VideowatchComponent) videowatchComponent!: VideowatchComponent;
  @ViewChild(VideowatchComponent) videowatchComponent!: VideowatchComponent;

  message: video[] = [
    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },

    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
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
  //constructor(private router: Router) {}

  ngAfterViewInit() {
    // The child component is available after the view initializes
  }
  updatevideo(): void {
    //   console.log(this.videowatchComponent);
    //   this.videowatchComponent.videofromvideoparent(this.videos[0]);
    //   this.videowatchComponent?.sendMessage();
    // this.videoservice.videotoparent();
    this.router.navigate(['/video']);
  }
  receiveMessage($event: video[]) {
    console.log(this.videowatchComponent);
    //this.videowatchComponent.sendMessage();
    this.message = $event;
    console.log(this.message);
    console.log(1111111111);
  }

  // @ViewChild(VideowatchComponent) videowatchComponent!: VideowatchComponent;
  // message: [{}] = [{ name: 'beem' }];

  // constructor(private router: Router) {}

  // ngAfterViewInit() {
  //   // The child component is available after the view initializes
  //   console.log(this.videowatchComponent.videoid);
  // }

  // updatevideo() {
  //   console.log(this.videowatchComponent.videoid);
  //   if (this.videowatchComponent) {
  //     this.videowatchComponent.sendMessage();
  //   }
  //   this.router.navigate(['/video']);
  // }

  // receiveMessage($event: [{}]) {
  //   console.log(this.videowatchComponent);
  //   if (this.videowatchComponent) {
  //     //this.videowatchComponent.sendMessage();
  //   }
  //   // this.message = $event;
  //   console.log(this.message);
  //   console.log(1111111111);
  // }
}
