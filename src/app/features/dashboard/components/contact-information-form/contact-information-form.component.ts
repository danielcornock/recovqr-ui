import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserInformation } from 'src/app/common/interfaces/user-information.interface';

@Component({
    selector: 'app-contact-information-form',
    templateUrl: './contact-information-form.component.html',
    styleUrls: ['./contact-information-form.component.scss']
})
export class ContactInformationFormComponent implements OnInit {
    @Input()
    public userInformation: UserInformation = {};

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
	    this.form = this.formBuilder.group({
	        name: [''],
	        country: [''],
	        phone: [''],
	        email: ['']
	    });
    }
}
