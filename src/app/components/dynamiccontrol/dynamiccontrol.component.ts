import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamiccontrol',
  templateUrl: './dynamiccontrol.component.html',
  styleUrls: ['./dynamiccontrol.component.css']
})
export class DynamiccontrolComponent implements OnInit {

  dynamicform: FormGroup;
  States: Array<any> = ["Maharashtra", "UP", "Karnaka"];
  Cities: Array<any> = ['Mumbai', 'Delhi'];
  Countries: Array<any> = ['India', 'Australia', 'Southafrica', 'England', 'Newzeland'];

  Addresses: Array<any> = ["Home", "Work"];
  data: Array<any> = ['country', 'state', 'city'];

  filteredResults$: Observable<string[]>;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
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
