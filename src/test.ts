// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// tslint:disable: tir-newline-after-import
// tslint:disable: import-group-ordering
// tslint:disable: no-any

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// tslint:disable-next-line: no-console
const log = console.error;

beforeAll(
  () => Object
    .keys(console)
    .forEach((fn: string) =>
      (console as any)[fn] = (...error: unknown[]) => {
        fail(error[0]);

        log(error);
        throw new Error(`Console must be empty!, ${error[0]}`);
      },
    ),
);
