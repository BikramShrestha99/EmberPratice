import EmberRouter from '@ember/routing/router';
import config from 'book-store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index');
  this.route('about');
  
});
