import { LightningElement } from 'lwc';
import HOME_PAGE from '@salesforce/resourceUrl/homePage';

export default class Challengesbanner extends LightningElement {


  bgstripUrl = HOME_PAGE + '/bg-strip.png';
  get bgstripStyle() {
    return `background-image:url(${this.bgstripUrl})`;
  }
}