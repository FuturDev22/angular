import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../Model/Video';

@Injectable({
  providedIn: 'root'
})
export class videoService {
url:string='http://localhost:3000/video'
  constructor(private http: HttpClient) { }
  getVideos(){
    return this.http.get<Video[]>(this.url)
  }
  getVideoByid(id:number){
    return this.http.get<Video>(this.url+'/'+id)
  }
  addVideo(Video:Video){
    return this.http.post(this.url,Video)
  }
  updateVideo2(Video:Video){
    return this.http.post(this.url,Video)
  }
  updateVideo(Video:Video,id:number){
    return this.http.put(this.url+'/'+id,Video)
  }
  deleteVideo(id:number){
    return this.http.delete(this.url+'/'+id)
  }



}
