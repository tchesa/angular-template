'use strict'

import angular from 'angular';
import router from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [router])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;