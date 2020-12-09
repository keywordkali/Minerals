import { Component, OnInit } from '@angular/core';
import { Mineral } from '../mineral.class';
import { MineralService } from '../mineral.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mineral-create',
  templateUrl: './mineral-create.component.html',
  styleUrls: ['./mineral-create.component.css']
})
export class MineralCreateComponent implements OnInit {
  mineral:Mineral = new Mineral(); 

  constructor(
    private mineralsvc:MineralService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.mineral);
    this.mineralsvc.create(this.mineral).subscribe(
      res => {
        console.debug("Mineral Create:", res);
        this.router.navigateByUrl("/minerals/list");
      },
      err => { console.error("Error creating Mineral:" , err); }
    );
  }

  ngOnInit(): void {
  }

}
