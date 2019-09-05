import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * This web component easily produces icons
 * @cssprop --box-shadow box shadow attribute. Default: none
 * @cssprop --color - Color of the icon
 * @cssprop --size - Size of the icon
 */
@customElement('bronco-icon')
export class BroncoIcon extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  /**
   *
   * Commit the name of the preferred icon from here: https://material.io/tools/icons/
   * @type {string}
   * @memberof BroncoIcon
   */
  @property() iconName: string = '';

  firstUpdated() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    // Has to be done because the new icons are documented with _ online. But in this css class they are splitted by -
    const arrString = this.iconName.split('_');
    this.iconName = arrString.join('-');
  }

  render() {
    return html `<span class="mi mi-${this.iconName}"></span>`;
  }
}