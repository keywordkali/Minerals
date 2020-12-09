import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral.class';
import { MineralService } from '../mineral.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mineral-edit',
  templateUrl: './mineral-edit.component.html',
  styleUrls: ['./mineral-edit.component.css']
})
export class MineralEditComponent implements OnInit {
mineral:Mineral;
  constructor(
    private mineralsvc: MineralService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  save(): void{
    console.log(this.mineral);
    this.mineralsvc.change(this.mineral).subscribe(
      res => {
        console.debug("Mineral Change:", res);
        this.router.navigateByUrl("/minerals/list");
      },
      err => { console.error("Error changing Mineral:" , err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.mineralsvc.get(id).subscribe(
      res => {
        console.debug(res);
        this.mineral = res;
      },
      err => { 
        console.error(err); 
      }
    );
  }

}
