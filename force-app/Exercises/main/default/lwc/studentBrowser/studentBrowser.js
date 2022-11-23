import { LightningElement,wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import { publish,messageContext, MessageContext } from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';

export default class StudentBrowser extends LightningElement {
    studentList=[];
    @wire(getStudents,{instructorId:'$selectedInstructorId',courseDeliveryId:'$selectedDeliveryId'}) 
    students;
    selectedDeliveryId ='';
    selectedInstructorid = '';
    @wire(MessageContext) messageContext;

    handleFilterChange(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorid = event.detail.instructorId;
    }

    handleStudentSelected(event) {
        const studetId = event.detail.studentId;
        this.updateSelectedStudent (studentId);

    }
    updateSelectedStudent(studentId)
    {
        publish(this.messageContext, SELECTED_STUDENT_CHANNEL,{
            studentId:studentId
        });
    }

}