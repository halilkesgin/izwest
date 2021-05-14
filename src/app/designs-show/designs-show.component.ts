import { Component, OnInit } from '@angular/core';
import { Design } from '../dfolder/design';
import { DesignService } from '../dfolder/design.service';

@Component({
  selector: 'app-designs-show',
  templateUrl: './designs-show.component.html',
  styleUrls: ['./designs-show.component.css']
})
export class DesignsComponent {
  title = 'Design List';
  designs: Design[];
  selectedDesign: Design;

  constructor(private designService:DesignService){}

  ngOnInit(): void {
      this.getDesigns();
  }

  onSelect(design:Design): void{
      this.selectedDesign = design;
  }

  getDesigns(): void {
     this.designService.getDesigns()
      .subscribe(designs=>{
          this.designs=designs;
      });
  }
}