import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../classes/User';
import { NgModel } from '@angular/forms';
import { ApiService } from '../api-service/api.service';


/*
 *	Este componente incluye el boton de crear usuario
 */
@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.css']
})
export class CreateUserModalComponent implements OnInit {

	private user: User;
	private waiting: boolean = false;
	private modal: NgbModalRef;
	@Output() onUserCreated: EventEmitter<any> = new EventEmitter();

	constructor(private modalService: NgbModal,
				private apiService: ApiService) { }

	ngOnInit() {
		this.user = new User({});
	}

	open(content) {
	    this.modal = this.modalService.open(content);
	}

	save(){
		this.waiting = true;
		this.apiService.createUser(this.user).subscribe(data => {
			this.waiting = false;
			this.modal.close();
			this.onUserCreated.emit({});
		}, error => {
			this.waiting = false;
		});
	}

}
