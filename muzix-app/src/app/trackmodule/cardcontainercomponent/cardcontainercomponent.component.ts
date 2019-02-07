import { Component, OnInit } from '@angular/core';
import { TrackserviceService } from '../trackservice.service';
import { Image } from '../Image';
import { from } from 'rxjs';
@Component({
  selector: 'app-cardcontainercomponent',
  templateUrl: './cardcontainercomponent.component.html',
  styleUrls: ['./cardcontainercomponent.component.css']
})
export class CardcontainercomponentComponent implements OnInit {
  constructor(private trackService: TrackserviceService) { }
    public images: Array<Image>;

  ngOnInit() {
      // this.trackService.getTrackDetails().subscribe(data => this.track = data);
      // console.log(this.track);
      // this.trackService.getTracks().subscribe((data: any) => {
      //   console.log(data);
      // });
      // this.trackService.getTracks().subscribe((data: any) => {
      //   console.log(data.tracks.track);
      //   data.tracks.track.map(element => {
      //     console.log('data ', element.name);
      //     console.log('image', element.image);
      //     element.image.map(url => {
      //         console.log('url', url);
      //       });
      //   });
      // });
      this.trackService.getTracks().subscribe((data: any) => {
        this.images = data.tracks.track;
      });
    }
  }

