import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class events {
  heading = 'Community Megaphone Events';
  events = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .withDefaults({
          headers: {
            'accept': 'application/json'
          }
        })
        .withBaseUrl('http://communitymegaphone.com/ws/CMEventDS.svc/');
    });
  }

  activate() {
    return this.http.fetch('ApprovedEvents')
      .then(response => response.json())
      .then(events => this.events = events.d)
      .catch(error => {
        alert('Error displaying events: ' + error);
      });
  }
}

export class TruncateValueConverter {
  toView(value) {
    //naive truncation logic
    // would be nice to make this smart about word breaks
    // and add ellipses
    return value && value.substring(0, 75);
  }
}