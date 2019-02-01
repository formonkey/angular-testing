// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { ComponentFixture, getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./app/', true, /\.ts$/);
// And load the modules.
context.keys().map(context);

export const querySelector = (fixture: ComponentFixture<any>, selector: string, isAll?: boolean) => {
    return fixture.nativeElement[isAll ? 'querySelectorAll' : 'querySelector'](selector);
};

export const debugQueryElement = (fixture: ComponentFixture<any>, selector: string) => {
    return fixture.debugElement.query(By.css(selector));
};

export const mocks = (schema) => {
    return require(`../../mocks/api/data/${ schema }.json`);
};
