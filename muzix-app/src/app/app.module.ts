import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackModule } from './trackmodule/track.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    TrackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
