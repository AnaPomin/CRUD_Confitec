import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: []
})
export class ConfirmationModalComponent implements OnInit {

  id: number;
  constructor(private bsModalRef: BsModalRef, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  delete(): void {
    this.userService.delete(this.id).subscribe(() => {},
    (data: any) => {
      debugger;
      if (data.status != 200) {
        this.toastr.error(data.error);
      } else {
        this.toastr.success("User deleted succesfully");
      }
    });

    this.close();
  }
  close() {
    this.bsModalRef.hide();
}
}
