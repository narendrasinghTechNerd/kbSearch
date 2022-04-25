import { LightningElement, track } from 'lwc';

export default class Students extends LightningElement {
    @track students = [];
    @track knowledges = [];

    getStudents() {
        //using javascrip native fetch method to get data from server
        fetch('/students')
            .then(res => {
                res.json().then(data => {
                    this.students = data;
                    console.log(data);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
    //getter method to check if students array have value
    get isStudentsAvailable() {
        return this.students.length > 0;
    }

    getKnowledges() {
        //using javascrip native fetch method to get data from server
        fetch('/knowledges')
            .then(res => {
                res.json().then(data => {
                    this.knowledges = data;
                    console.log(data);
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
    //getter method to check if students array have value
    get isKnowledgesAvailable() {
        return this.knowledges.length > 0;
    }
}
