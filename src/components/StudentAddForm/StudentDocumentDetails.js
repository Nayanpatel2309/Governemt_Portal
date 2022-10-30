
import { Box } from '@mui/system';
import {useState , useEffect}   from 'react';
import FileBox from "./FileBox"

function Studentdetails() {

    return (
       <Box>  
               <FileBox name="Adhar Card "/>
               <FileBox name="Born Certificate" />
               <FileBox name="10th Marksheet" />
               <FileBox name="12th Marksheet" />
               <FileBox name="Father Id proof" />
               <FileBox name="Mother Id proof" />

       </Box>
    )
}

export default Studentdetails   