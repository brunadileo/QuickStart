import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HeaderTmp extends NavigationMixin(LightningElement) {

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