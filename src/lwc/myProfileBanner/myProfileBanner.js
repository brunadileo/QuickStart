import { LightningElement } from 'lwc';
import REW_BAN from '@salesforce/resourceUrl/homePage';

export default class MyProfileBanner extends LightningElement  {

    profilebannerUrl = REW_BAN + '/my-profile-banner-bg.png';
    get myprofilebannerStyle() {
        return `background-image:url(${this.profilebannerUrl})`;
    }
}