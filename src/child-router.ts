import {Router, RouterConfiguration} from 'aurelia-router'

export class ChildRouter {
  heading = 'Child Router';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'events',         name: 'events',         moduleId: 'events',         nav: true, title: 'Community Megaphone Events' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
