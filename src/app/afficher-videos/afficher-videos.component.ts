import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/Model/Video';
import { videoService } from 'src/services/video.service';


@Component({
  selector: 'app-afficher-videos',
  templateUrl: './afficher-videos.component.html',
  styleUrls: ['./afficher-videos.component.css']
})
export class AfficherVideosComponent implements OnInit {
  listvideos!: Video[];
  video!:Video;

  constructor(private route:Router,private videoService:videoService) { }
  ngOnInit(): void {
    this.videoService.getVideos().subscribe(data => {
      this.listvideos = data;
      console.log(this.listvideos);
    });
    
    
  }
  incrementerPartage(video: Video) {
    video.nbrShared++;
    this.videoService.updateVideo2(video).subscribe();
  }
}
