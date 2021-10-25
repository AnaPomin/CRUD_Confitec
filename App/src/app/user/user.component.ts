import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModalComponent } from './user-modal/user-modal.component';
import { EScholarity } from '../models/EScholarity';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  user: User;
  lstUsers: User[];
  bsModalRef: BsModalRef
  scholarities: EScholarity[] = [EScholarity.Fundamental, EScholarity.Infantil, EScholarity.Medio, EScholarity.Superior]

  constructor(
    private userService: UserService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService.list().toPromise().then(data => {
      this.lstUsers = data as User[];
    });
  }

  createUserModal(): void {
    this.bsModalRef = this.modalService.show(UserModalComponent, { });
    this.bsModalRef.onHidden.subscribe(() => this.getAll());
  }

  updateUserModal(user: User): void {
    let initialState = { user };
    this.bsModalRef = this.modalService.show(UserModalComponent, { initialState });
    this.bsModalRef.onHidden.subscribe(() => this.getAll());
  }

  deleteUserModal(id: number): void {
    let initialState = { id };
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, { initialState });
    this.bsModalRef.onHidden.subscribe(() => this.getAll());
  }

}
