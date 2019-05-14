import { NgModule } from '@angular/core';

import { TmbackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TmbackendSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TmbackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TmbackendSharedCommonModule {}
