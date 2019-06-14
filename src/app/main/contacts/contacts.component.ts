import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: [ './contacts.component.scss' ]
})
export class ContactsComponent implements OnInit {
	exForm: FormGroup;
	submitted = false;

	constructor(private fb: FormBuilder) {
		this.exForm = this.fb.group({
			firstName: [ '', Validators.required ],
			emailAddress: ['', [Validators.required, Validators.email]],
			subject: ['', Validators.required],
			message: ['', Validators.required] 
		});
	}

	get f() {
		return this.exForm.controls;
	}
	onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.exForm.invalid) {
            return;
		}
	}

	ngOnInit() {}
}
