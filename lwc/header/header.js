import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import bootstrap from '@salesforce/resourceUrl/bootstarpjsfile';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class Header extends NavigationMixin(LightningElement) {
	isShowMenu = false;

	renderedCallback() {

		console.log(bootstrap + '/jquery-1.11.1.min.js')
		Promise.all([
			loadScript(this, bootstrap + '/jquery-1.11.1.min.js'),
			loadScript(this, bootstrap + '/bootstrap.min.js'),
			//loadScript(this, jquery)
			loadStyle(this, bootstrap + '/bootstrap.min.css')
		]).then(() => {
			console.log("All scripts and CSS are loaded. perform any initialization function.")
		}).catch(error => {
			console.log("failed to load the scripts" + error);
		});
	}

	showmenuItem() {
		//this.isShowMenu = true;
		//alert(this.template.querySelector('.showMenu'));
		if (this.template.querySelector('.showMenu') == null) {
			this.template.querySelector('.navbar-collapse').classList.add('showMenu');
		}
		else {
			this.template.querySelector('.navbar-collapse').classList.remove('showMenu');
		}
	}

	navigateToHomePage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'home'
			},
		});
	}

	navigateToMyIncentivesPage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'my-incentives'
			},
		});
	}

	navigateToMyRewardsPage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'my-rewards'
			},
		});
	}

	navigateToMyCoursesPage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'my-courses'
			},
		});
	}

	navigateToMyProfilePage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'my-profile'
			},
		});
	}

	navigateToFaqPage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'faq'
			},
		});
	}

	navigateToContactPage() {
		this[NavigationMixin.Navigate]({
			type: 'standard__namedPage',
			attributes: {
				pageName: 'contact'
			},
		});
	}
}