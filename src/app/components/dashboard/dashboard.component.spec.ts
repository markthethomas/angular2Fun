import { it, inject, injectAsync,
         beforeEachProviders, TestComponentBuilder } from 'angular2/testing';

// Load the implementations that should be tested
import Dashboard from './dashboard.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Dashboard
  ]);


});
