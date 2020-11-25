import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'wwtbm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
