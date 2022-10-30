import Student from "../Student/Student"

import AddStuent from "../AddStudent/AddStudent"


export const getRoute = (track) => { 
    console.log(track);
    if(track.trim() === "Students"){
        return <Student />
    }
    if(track.trim() === "Add Student"){
        return <AddStuent />
    }



}