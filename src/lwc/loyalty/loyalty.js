import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import MY_PROGRAM from '@salesforce/resourceUrl/homePage';

export default class Loyalty extends NavigationMixin(LightningElement) {
    my_courses_iconUrl = MY_PROGRAM + '/my-courses-icon.png';
    my_incentives_iconUrl = MY_PROGRAM + '/my-incentives-icon.png';
    my_rewards_iconUrl = MY_PROGRAM + '/my-rewards-icon.png';

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
}