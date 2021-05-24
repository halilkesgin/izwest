import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Design } from '../dfolder/design';
import { DesignService } from '../dfolder/design.service';

@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.css']
})

export class DesignDetailComponent implements OnInit {

  @Input() design: Design;

  constructor(
    private designService: DesignService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDesign();
  }

  getDesign(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.designService.getDesign(id)
      .subscribe(design => this.design = design);
  }
}