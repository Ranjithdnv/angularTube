import { Component, OnInit } from '@angular/core';
import { CommentService, comment } from '../../services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videosingle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videosingle.component.html',
  styleUrl: './videosingle.component.scss',
})
export class VideosingleComponent implements OnInit {
  comadd: comment = {
    useridCom: '656',
    username: 'ranjith',
    comment: 'kk',
    videoid: 'rama',
  };
  inputrep: boolean = false;

  constructor(private common: CommentService) {}
  com: comment[] = this.common.arraycomments;
  ngOnInit(): void {
    this.common.getComment().subscribe(
      (res) => {
        this.com = res;
        console.log(this.com);
      },
      (error) => {}
    );
  }
  repinput() {
    this.inputrep = !this.inputrep;
  }
  addcommfunc() {
    this.common.addComment(this.comadd).subscribe(
      (res) => {
        this.com = res;
        console.log(this.com);
      },
      (error) => {}
    );
  }
}
