import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { UserService } from '@features/services/user.service';

import { User } from '@shared/models/user';


@Component({
  selector: 'wwtbm-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopUsersComponent implements OnInit {

 public users$: Observable<User[]>;

  constructor(
    private _userService: UserService) { }

  public ngOnInit(): void {
    this.getTopUsers();
  }

  private getTopUsers(): void {
    this.users$ = this._userService.getTopUsers();
  }
}
