import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import * as Moment from 'moment';

@autoinject
export class events {
  heading = 'Upcoming Events';
  events = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .withDefaults({
          headers: {
            'accept': 'application/json'
          }
        })
        .withBaseUrl('http://cmegapi.azurewebsites.net/');
    });
  }

  activate() {
    return this.http.fetch('Events?$expand=Location')
      .then(response => response.json())
      .then(events => this.events = events.value)
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

export class FriendlyDateValueConverter {
  toView(value) {
    var friendlyDate = Moment(value);
    return friendlyDate.format('MMMM Do YYYY, h:mm:ss a');
  }
}