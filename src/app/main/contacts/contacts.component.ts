import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: [ './contacts.component.scss' ]
})
export class ContactsComponent implements OnInit {
	exForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.exForm = this.fb.group({
			firstName: [ '', Validators.required ],
			lastName: [ '', Validators.required ]
		});
	}

	get f() {
		return this.exForm.controls;
	}

	ngOnInit() {}
}
