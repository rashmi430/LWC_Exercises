import { LightningElement,wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';

export default class StudentBrowser extends LightningElement {
    studentList=[];
    @wire(getStudents,{instructorId:'$selectedInstructorId',courseDeliveryId:'$selectedDeliveryId'}) 
    students;
    selectedDeliveryId ='';
    selectedInstructorid = '';

    handleFilterChange(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorid = event.detail.instructorId;
    }
      
}