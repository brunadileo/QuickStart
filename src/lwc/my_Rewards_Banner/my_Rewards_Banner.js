import { LightningElement } from 'lwc';
import REW_BAN from '@salesforce/resourceUrl/homePage';

export default class My_Rewards_Banner extends LightningElement  {

    innerrewardsbannerUrl = REW_BAN + '/innre-my-rewards-banner-bg.png';
    get innerbannerStyle1() {
        return `background-image:url(${this.innerrewardsbannerUrl})`;
    }
}