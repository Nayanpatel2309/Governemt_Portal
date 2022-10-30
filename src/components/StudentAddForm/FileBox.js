import {useState , useEffect}   from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';

function FileBox(props) {
    const {name} = props;
    
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const changeHandler = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }
    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();  
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);

  return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
>
    <Paper >
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '58ch' },
                display: "flex",
                justifyContent: "space-around",
                alignItems:"center",
                padding: "1rem 0rem"
            }}
            noValidate
            autoComplete="off">

            <Typography > {name} </Typography>
           {
             fileDataURL ?  <img src={fileDataURL} style={{width:"100px",height:"70px"}} alt="preview" /> : <Typography>No file avalaible</Typography>
           }
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" onChange={changeHandler}/>
            </Button>

        </Box>
    </Paper>
  


</Box>
  )
}

export default FileBox