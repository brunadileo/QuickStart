import { LightningElement } from 'lwc';
import INCEN_BAN from '@salesforce/resourceUrl/homePage';

export default class My_Incentives_Banner extends LightningElement {

    innerincentivesbannerUrl = INCEN_BAN + '/innre-my-incentives-banner-bg.jpg';
    get innerbannerStyle2() {
        return `background-image:url(${this.innerincentivesbannerUrl})`;
    }

}