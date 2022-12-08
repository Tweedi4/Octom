import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: string[];

  constructor() {
    this.items = [
      "activity",
      "dashboard",
      "books",
      "settings",
      "messages",
      "files"
    ]
  }

  ngOnInit(): void {

  }
}
