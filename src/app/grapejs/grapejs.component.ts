import { Component, OnInit } from '@angular/core';
//@ts-ignore
import grapejs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css';

@Component({
  selector: 'app-grapejs',
  templateUrl: './grapejs.component.html',
  styleUrls: ['./grapejs.component.css']
})
export class GrapejsComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const editor = grapejs.init({
      container: '#grapejs-container',
      fromElement: true,
      height: '300px',
      width: 'auto',
      storageManager: { type: null },
      // components: '<div class="text">Hello</div>',
      panels: {},
      style: 'p{color: blue}'
    });
  }

}
