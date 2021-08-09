import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../models/Customer";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() customers: Customer[];

  constructor() { }

  ngOnInit(): void {

  }

}
