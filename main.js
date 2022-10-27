import fetch from "node-fetch";

const urlAPI = 'https://mbq-rd.glitch.me/api/dca/students';

async function fetchData (url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

const students = await fetchData(urlAPI);


class Student {
    constructor({
        id,
        name,
        age,
        grade,
    })

    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

function newStudents(data){

    const empty_array = [];

    data.forEach(student => {

        student = new Student({
            id : student.id,
            name : student.name,
            age : student.age,
            grade: student.grade
        })

        empty_array.push(student);
        
    });
    

    return empty_array;
}

console.log(newStudents(students));



