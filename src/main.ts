import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .plugin('aurelia-google-maps', config => {
      config.options({
        apiKey: 'AIzaSyBN1d5N4frv-F-grKGGLPoCmCYTIYYriHY',
        apiLibraries: 'drawing,geometry' //get optional libraries like drawing, geometry, ... - comma seperated list
      });
    })
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
