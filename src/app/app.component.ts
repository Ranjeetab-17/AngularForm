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
  dynamicform: FormGroup;

  searchControl: FormControl;

  States: Array<any> = ["Maharashtra", "UP", "Karnaka"];
  Cities: Array<any> = ['Mumbai', 'Delhi'];
  Countries: Array<any> = ['India', 'Australia', 'Southafrica', 'England', 'Newzeland'];

  Addresses: Array<any> = ["Home", "Work"];
  data: Array<any> = ['country', 'state', 'city'];

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


    this.dynamicform = this._fb.group({
      genericdata: [null],
      myArray: this._fb.array([
        this.getControl(null, null)
      ])
    });
  }

  getControl(label: string, data: Array<any>): FormGroup {
    return this._fb.group({
      label: label,
      dynamicControl: [data]
    })
  }

  setDynamicControl(address: Array<any>): FormArray {
    const formarray = new FormArray([]);
    address.forEach(a => {
      formarray.push(this._fb.group({
        states: this.States
      }))
    });
    return formarray;
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

  changeEvent(typeofdropdown: string) {
    const genericFormArray = <FormArray>this.dynamicform.get('myArray');
    if (typeofdropdown === 'state') {
      genericFormArray.push(this.getControl(typeofdropdown, this.States));
    } else if (typeofdropdown === 'city') {
      genericFormArray.push(this.getControl(typeofdropdown, this.Cities));
    } else {
      genericFormArray.push(this.getControl(typeofdropdown, this.Countries));
    }

    const index: number = this.data.indexOf(typeofdropdown);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
