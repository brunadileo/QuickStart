import { LightningElement } from 'lwc';
import REW_BAN from '@salesforce/resourceUrl/homePage';

export default class MyCoursesBanner extends LightningElement {

    innerbannercoursesUrl = REW_BAN + '/innre-my-courses-banner-bg.png';
    get innerbannercouStyle() {
        return `background-image:url(${this.innerbannercoursesUrl})`;
    }
}