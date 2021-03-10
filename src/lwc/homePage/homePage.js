import { LightningElement } from 'lwc';
import HOME_PAGE from '@salesforce/resourceUrl/homePage';

//import backgroundUrl from '@salesforce/resourceUrl/homePage/home-banner-bg.jpg';
export default class HomePage extends LightningElement {

    //graphUrl = HOME_PAGE + '/graph.png';
    boxBgImage = HOME_PAGE + '/about-page-feature-bg.png';
    get boxBgImageStyle() {
        return `background-image:url(${this.boxBgImage})`;
    }

    backgroundUrl = HOME_PAGE + '/home-banner-bg.jpg';
    get backgroundStyle() {
        return `background-image:url(${this.backgroundUrl});`;
    }


    graphOvalUrl = HOME_PAGE + '/Oval.png';
    get graphOvalStyle() {
        return `background-image:url(${this.graphOvalUrl})`;
    }


}