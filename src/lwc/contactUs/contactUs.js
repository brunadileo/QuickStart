import { LightningElement, track, wire} from 'lwc';
import CreateCase from '@salesforce/apex/ContactUs.CreateCase';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ContactUs extends LightningElement {

casesSpinner = false;
@track Description;
@track Subject;
@track error;
@track data;
handleDescription(event){
this.Description= event.detail.value;
}
handleSubject(event){
this.Subject= event.detail.value;
}
save(event){
    this.casesSpinner = true;
    CreateCase({Description: this.Description , Subject: this.Subject})
        .then(result => {
        window.console.log('result ===> '+JSON.stringify(result));
        this.data = result;
        this.casesSpinner = false;
        this.dispatchEvent(

            new ShowToastEvent({
                title: 'Success!!',
                message: 'The Case has been created successfully.',
                variant: 'Success',
            }),
        );
    })
    .catch(error => {
        this.error = error;
        this.casesSpinner = false;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error!!',
                message: JSON.stringify(error),
                variant: 'error',
            }),
        );     
    })
}

}