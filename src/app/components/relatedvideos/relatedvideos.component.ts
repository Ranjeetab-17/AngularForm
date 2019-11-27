import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatedvideos',
  templateUrl: './relatedvideos.component.html',
  styleUrls: ['./relatedvideos.component.css']
})
export class RelatedvideosComponent implements OnInit {

  videos: Array<any> = [
    {
      id: 'kVbLSN0AW-Y',
      title: 'Control Value Accessor',
      description: `
      Traveling through space and time is hard, but writing clean Reactive Forms in Angular doesn’t have to be, thanks to the Control Value Accessor interface! Fear not, unlike wormholes, elements using the CVA aren’t prone to sudden collapse or high radiation, they’re just going to help you write cleaner, clearer code faster, and solve some formerly complicated problems.
ng-conf is a three-day Angular conference focused on delivering the highest quality training in the Angular JavaScript framework. 1500+ developers from across the globe converge on Salt Lake City, UT every year to attend talks and workshops by the Angular team and community experts.

      `
    },
    {
      id: 'cWZDKihoMWM',
      title: 'Control Value Accessor',
      description: `In this talk Todd will 
      take a deeper dive into Angular 2 Reactive forms and utilise the powerful APIs Angular 2 offers for complex forms, validation and much more.`
    },
    {
      id: '-nsedZwvl9U',
      title: 'Form Component',
      description: 'Form component to @component'
    }
  ];
  //id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;
  constructor() { }

  ngOnInit() {
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}
