import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorHttpClientRequestService } from './requests';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorHttpClientRequestService,
            multi: true,
        }
    ]
})

export class InterceptorHttpClientModule {}
