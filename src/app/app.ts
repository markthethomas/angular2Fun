import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {Home} from './components/home/home.component';

interface IApp {
  title: string;
}

@Component({
  selector: 'App',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  template: `<h1>yo</h1>`
})

// @RouteConfig([
//   { path: '/', component: Home, name: 'Index' },
// ])

export class App implements IApp {
  public title = 'Dogz';
  constructor() {

  }
}
