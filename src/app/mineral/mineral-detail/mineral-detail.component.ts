import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral.class';
import { MineralService } from '../mineral.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-mineral-detail',
  templateUrl: './mineral-detail.component.html',
  styleUrls: ['./mineral-detail.component.css']
})
export class MineralDetailComponent implements OnInit {
mineral:Mineral;
  constructor(
    private mineralsvc: MineralService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void{
    console.log(this.mineral);
    this.mineralsvc.remove(this.mineral).subscribe(
      res => {
        console.debug("Mineral Removed:", res);
        this.router.navigateByUrl("/minerals/list");
      },
      err => { console.error("Error removing mineral:" , err); }
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
