import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {Home} from './components/home/home.component';

interface IApp {
  title: string;
  connected: boolean;
}

@Component({
  selector: 'App',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  template: `
    <div id="app">
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
])

export class App implements IApp {
  public title = 'Dogz';
  public connected = false;
  constructor() {

  }
}
