import { Component, OnInit } from '@angular/core';
//@ts-ignore
import grapejs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css';

//@ts-ignore
import gjsPresetWebpage from "grapesjs-preset-webpage";
//@ts-ignore
import customCodePlugin from "grapesjs-custom-code";
//@ts-ignore
import grapesjsTouch from "grapesjs-touch";
//@ts-ignore
import pluginTooltip from "grapesjs-tooltip";
//@ts-ignore
import { } from "grapesjs-custom-code";
//@ts-ignore
import es from "grapesjs/locale/es";

@Component({
  selector: 'app-grapejs',
  templateUrl: './grapejs.component.html',
  styleUrls: ['./grapejs.component.css']
})
export class GrapejsComponent implements OnInit {

  editor = null;
  constructor() { }

  createEditor(): any {
    return grapejs.init({
      container: '#grapejs-container',
      fromElement: true,
      height: '450px',
      width: 'auto',
      plugins: [
        gjsPresetWebpage,
        customCodePlugin,
        grapesjsTouch,
        pluginTooltip,
      ],
      pluginsOpts: {
        "grapesjs-preset-webpage": {
          modalImportTitle: "Importar HTML",
          modalImportButton: "Guardar",
          //@ts-ignore
          modalImportContent: () => this.editor?.getHtml(),
        },
      },
      i18n: {
        locale: "es", // default locale
        // detectLocale: true, // by default, the editor will detect the language
        localeFallback: "es", // default fallback
        messages: { es },
      },
    });
  }

  eventsEditor(): void {
    //@ts-ignore
    this.editor.on('component:selected', () => {
      console.log('selected')
    })
  }

  getHTML(): void {
    //@ts-ignore
    console.log(`${this.editor.getHtml()}<style>${this.editor.getCss()}</style>`);
    // console.log(this.editor.runCommand("gjs-get-inlined-html"));

  }

  addSection(): void {
    //@ts-ignore
    this.editor.addComponents(`<div>
      <img src="https://path/image" />
      <span title="foo">Hello world!!!</span>
    </div>`);
  }

  ngOnInit(): void {
    this.editor = this.createEditor();
    this.eventsEditor();
  }

}
