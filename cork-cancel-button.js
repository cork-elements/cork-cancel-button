import {PolymerElement, html} from "@polymer/polymer"
import template from "./cork-cancel-button.html"

import "@polymer/paper-button"
import "@polymer/iron-icon"
import "@ucd-lib/cork-icons"

export class CorkCancelButton extends PolymerElement {

  static get properties() {
    return {
      label: {
        type: String,
        value: ''
      }
    };
  }

  static get template() {
    return html([template]);
  }
}

window.customElements.define('cork-cancel-button', CorkCancelButton);