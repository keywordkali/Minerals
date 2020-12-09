import { Component, OnInit } from '@angular/core';
import { MineralService } from '../mineral.service';
import { Mineral } from '../mineral.class';


@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {
tableStyle: string = "table table-sm";
minerals: Mineral[] = [];
  constructor(
    private mineralsvc: MineralService
  ) { }

  ngOnInit(): void {
    this.mineralsvc.list().subscribe(
      res => {console.log(res);
      this.minerals = res as Mineral[];
    },
    err => { console.error(err);}
    );
  }

}
