import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TmbackendSharedLibsModule, TmbackendSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TmbackendSharedLibsModule, TmbackendSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TmbackendSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TmbackendSharedModule {
  static forRoot() {
    return {
      ngModule: TmbackendSharedModule
    };
  }
}
