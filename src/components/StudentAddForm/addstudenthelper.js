import Studentdetails from "./Studentdetails";
import StudentDocumentDetails from "./StudentDocumentDetails"


export const getCurrentSteperComponent = (step) => {
    if(step === 0){
        return <Studentdetails />
    }

    if(step === 1){
        return <StudentDocumentDetails />
    }

    return null
}