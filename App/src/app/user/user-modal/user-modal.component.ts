import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { EScholarity } from 'src/app/models/EScholarity';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: []
})
export class UserModalComponent implements OnInit {

  user: User;
  birthDate = '';
  title = 'New User';

  constructor(private bsModalRef: BsModalRef, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.user == null)
      this.user = new User();
    else {
      this.title = 'Update User';
      this.birthDate = this.user.birthDate.toString().split('T')[0];
    }
  }

  submit(): void {
    this.user.birthDate = new Date(this.birthDate);
    if (this.user.id)
      this.update();
    else
      this.save();
  }

  save(): void {
    this.userService.insert(this.user).subscribe(() => {},
    (data: any) => {
      if (data.status != 200) {
        this.toastr.error(data.error);
      } else {
        this.toastr.success("User added succesfully");
      }
    });

    this.close();
  }

  update(): void {
    this.userService.update(this.user).subscribe(() => {},
    (data: any) => {
      debugger;
      if (data.status != 200) {
        this.toastr.error(data.error);
      } else {
        this.toastr.success("User updated succesfully");
      }
    });

    this.close();
  }

  close() {
    this.bsModalRef.hide();
}
}
