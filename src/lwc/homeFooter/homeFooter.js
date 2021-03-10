import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HomeFooter extends NavigationMixin(LightningElement) {

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

  navigateToTermsConditionsPage() {
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'terms-and-conditions'
      },
    });
  }
}