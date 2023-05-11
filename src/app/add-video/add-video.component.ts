import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/Model/Video';
import { videoService } from 'src/services/video.service';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video!: Video;
  constructor(private route:Router,private videoService:videoService) { }

  ngOnInit(): void {
    this.video=new Video();

  }
  ajouterVideo() {
    
    this.videoService.addVideo(this.video).subscribe( {
      next:()=>this.route.navigateByUrl('/videos'),
      error:(error)=>console.log('error')
    });
    
  }

}
