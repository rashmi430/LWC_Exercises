import { LightningElement } from 'lwc';

export default class StudentBrowser extends LightningElement {
    studentList=[];
    constructor() {
        // Call the super constructor here...
        const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', 'Amit', 'Simon'];
        this.studentList = studentNames.map( (studentName, index) => {
          return {
            'sobjectType': 'Contact',
            'Name': studentName,
            'PhotoUrl': '/services/images/photo/0032D00000ZMsjzQAD',
            'Id': index
          };
        });
      }
}