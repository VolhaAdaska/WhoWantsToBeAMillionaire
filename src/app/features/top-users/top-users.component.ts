import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { UserService } from '@features/top-users/services/user.service';

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
