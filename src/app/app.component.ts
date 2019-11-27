import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Forms',
    children: [
      {
        name: 'Reactive Form',
        children: [
          { name: 'Form Array' },
          { name: 'Dynamic control' },
          { name: 'Control Value Accessor' },
          { name: 'Patch Array' },
        ]
      },
      { name: 'Template Form' },
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  title = 'ngClient';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

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
    this.dataSource.data = TREE_DATA;
    this.searchControl = new FormControl('');
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {

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

}
