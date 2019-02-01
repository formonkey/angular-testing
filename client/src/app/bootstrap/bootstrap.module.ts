import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapComponent } from './components';
import { BootstrapRouting } from './bootstrap.routing';
import { InterceptorHttpClientModule } from '../core/interceptors/http-client';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,

        BootstrapRouting,
        InterceptorHttpClientModule,
    ],
    declarations: [
        BootstrapComponent,
    ],
    bootstrap: [
        BootstrapComponent,
    ],
})

export class BootstrapModule {
}
