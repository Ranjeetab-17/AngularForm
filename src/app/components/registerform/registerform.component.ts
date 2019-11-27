import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  RegisterForm: FormGroup;
  Addresses: FormArray;
  States: Array<any> = ["Maharashtra", "UP", "Karnaka"];
  Cities: Array<any> = ['Mumbai', 'Delhi'];
  Countries: Array<any> = ['India', 'Australia', 'Southafrica', 'England', 'Newzeland'];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
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

  GetData(type: string): Array<any> {
    return type == 'State' ? this.States : this.Cities;
  }

  RemoveAddress(i: number) {
    const control = <FormArray>this.RegisterForm.controls['Addresses'];
    control.removeAt(i);
  }

}
