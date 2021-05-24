import { Component, OnInit } from '@angular/core';
import { Design } from '../dfolder/design';
import { DesignService } from '../dfolder/design.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})

export class DesignsComponent implements OnInit {

  designs: Design[] = [];
  designLength: number;

  constructor(private designService: DesignService) { }

  ngOnInit(): void {
    this.getDesigns();
  }

  getDesigns(): void {
    this.designService.getDesigns()
      .subscribe(designs => {
        this.designs = designs.slice(0,10);
        this.designLength = designs.length;
      })
  }
}