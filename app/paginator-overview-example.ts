import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
})
export class PaginatorOverviewExample {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */