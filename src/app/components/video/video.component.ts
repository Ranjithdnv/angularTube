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
      Videourl: '',
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },

    {
      videoid: 1,
      Videourl: '',
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
      Videourl: '',
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
      Videourl: '',
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
