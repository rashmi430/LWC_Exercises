import { LightningElement,api } from 'lwc';

export default class StudentTile extends LightningElement {
 @api   student ={Name:'Rashmi gupta',
              PhotoUrl:'/services/images/photo/0032D00000ZMsjzQAD'}; 
              @api isSelected=false;
        @api
        get tileSelected(){
        return this.isSelected?'tile selected' :'tile';
    }
    onStudentClick(event){
        alert(this.student.Name);
        const evt = new CustomEvent('studentselected', {
            bubbles:true, composed: true,
            detail: {studentId:this.student.Id }
        })
    }


}