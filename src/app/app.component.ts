import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { isPlatformBrowser } from '@angular/common';


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

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

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

  constructor(private _fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
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

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
