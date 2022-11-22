import { LightningElement, wire } from 'lwc';

// TODO #1: import the getRecord, getFieldValue, and getFieldDisplayValue functions from lightning/uiRecordApi.
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';

// TODO #2: We've imported the name field and placed it into an array for you.
//          To prepare for Lab 1, import the Description, Email, and Phone fields and add them to the array.

import FIELD_Name from '@salesforce/schema/Contact.Name';
import Field_Description from '@salesforce/schema/Contact.Description';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
const fields = [FIELD_Name,Field_Description,FIELD_Email,FIELD_Phone];

export default class StudentDetail extends LightningElement {

	// TODO #3: locate a valid Contact ID in your scratch org and store it in the studentId property.
	// Example: studentId = '003S000001SBAXEIA5';
	studentId = '0032D00000ZJSfsQAH';

	//TODO #4: use wire service to call getRecord, passing in our studentId and array of fields.
	//		   Store the result in a property named wiredStudent.
	@wire(getRecord, { recordId: '$studentId',fields })
	wiredStudent;
		
	get name() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
	}
    get Description(){
        return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
    }

    get Phone(){
        return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
    }

    get Email(){
        return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
    }

	//TODO #5: We provided a getter for the name field. 
	// 		   To prepare for Lab 1, create getters for the description, phone, and email fields.
	

	//TODO #6: Review the cardTitle getter, and the _getDisplayValue function below.
	
	get cardTitle() {
		let title = "Please select a student";
		if (this.wiredStudent.data) {
			title = this.name;
		} else if (this.wiredStudent.error) {
			title = "Something went wrong..."
		}
		return title;
	}
	
	_getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}
	
}