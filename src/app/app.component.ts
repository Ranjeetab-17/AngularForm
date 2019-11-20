import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngClient';

  RegisterForm: FormGroup;

  searchControl: FormControl;

  States: Array<any> = ["Maharashtra", "UP", "Karnaka"];
  Cities: Array<any> = ['Mumbai', 'Delhi'];

  Addresses: Array<any> = ["Home", "Work"];

  filteredResults$: Observable<string[]>;

  constructor(private _fb: FormBuilder) {
    this.searchControl = new FormControl('');
  }


  ngOnInit(): void {
    this.RegisterForm = this._fb.group({
      FirstName: [null],
      LastName: [null],
      Salary: [null],
      Gender: [null],
      Company: [null],
      Addresses: this._fb.array([
        this.InititControl()
      ])
    });
  }

  InititControl(): FormGroup {
    return this._fb.group({
      AddressType: [null],
      Address: [null],
      State: [null],
      City: [null],
      Pincode: [null]
    })
  }

  Add_Addresses() {
    const control = <FormArray>this.RegisterForm.controls['Addresses'];
    control.push(this.InititControl());
  }

  RemoveAddress(i: number) {
    const control = <FormArray>this.RegisterForm.controls['Addresses'];
    control.removeAt(i);
  }
}
