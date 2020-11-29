import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../interfaces/entry';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.sass']
})
export class AddEntryComponent implements OnInit {
  entryForm: FormGroup;
  entry: Entry;
  formSubmit: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private entryService: EntryService
  ) {}

  ngOnInit(): void {
    this.createEntryForm();
    }

  createEntryForm() {
    this.entryForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, [Validators.required, Validators.maxLength(12)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  saveEntry(): void {
    this.formSubmit = true;

    if (this.entryForm.valid){
      this.entryService.addEntry(this.mapEntryData());
      this.entryForm.reset();
      this.formSubmit = false;
      this.router.navigate(['/']);
    }
  }

  mapEntryData(): Entry {
    return this.entry = {
      name: this.entryForm.get('name').value,
      phone: this.entryForm.get('phone').value,
      email: this.entryForm.get('email').value
    };
  }

}
