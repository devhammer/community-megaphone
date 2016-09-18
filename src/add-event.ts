//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Add an Event';
  title = 'Event Title';
  description = 'This is my description.';
  previousTitle = this.title;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get currentTitle() {
    return `${this.title}`;
  }

  submit() {
    this.previousTitle = this.title;
    alert(`You submitted, ${this.title}!`);
  }

  canDeactivate() {
    if (this.title !== this.previousTitle) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
