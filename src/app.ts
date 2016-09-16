import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Community Megaphone';
    config.map([
      { route: ['', 'events'],         name: 'events',        moduleId: 'events',        nav: true, title: 'Events' },
      { route: 'events/add', name: 'addEvent',      moduleId: 'add-event',      nav: true, title: 'Add Event' },
      { route: 'about',  name: 'about', moduleId:'about', nav: true,  title: 'About' }
    ]);

    this.router = router;
  }
}
