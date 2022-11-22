import { LightningElement,wire } from 'lwc';
import getInstructors from '@salesforce/apex/StudentBrowserForm.getInstructors';
import getDeliveryByInstructor from '@salesforce/apex/StudentBrowserForm.getDeliveryByInstructor';
export default class StudentBrowserForm extends LightningElement {
    instructors=[];
    error;
    deliveries=[];
    selectedInstructorId;
    selectedDeliveryId;
    @wire(getInstructors)
    wire_getInstructors({error,data}){
        this.instructors=[];
        if(data){
            this.instructors.push({label:'select Instructor',value:''});
            data.forEach(Instructor => {
                this.instructors.push({label:Instructor.Name,value:Instructor.Id});
            });
        }
    else if (error){
        this.error = error;
    }

}
@wire(getDeliveryByInstructor,{instructorId:'$selectedInstructorId'})
wired_getDeliveriesByInstructor({ error, data }) {
	this.deliveries = [];
	if (data && data.length) {
		
		this.deliveries = data.map(delivery => ({
			value: delivery.Id,
			label: `${delivery.Start_Date__c} ${delivery.Location__c} ${delivery.Attendee_Count__c} students`
		}));

		this.deliveries.unshift({
			value: '',
			label: 'Any Delivery' 
		});

	} else if (error) {
		this.error = error;
	}
}
}

