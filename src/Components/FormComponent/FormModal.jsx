import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

//import './formStyle.css';
// css

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

function Form() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[city,setCity]=useState('')
    const[description,setDescription]=useState('')
    const[created_at,setCreated_at]=useState('')
    const[aerodrome,setAerodrome]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
        e.preventDefault()
        const aerodromes={name,city,description, created_at}
        console.log(aerodromes)
        fetch("http://localhost:8080/aerodromes/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(aerodromes)

        }).then(()=>{
            console.log("New Aerodromes added")
        })
    }

    useEffect(()=>{
    fetch("http://localhost:8080/aerodromes/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setAerodrome(result);
    }
    )
    },[])
    let desc = '51.505S/-0.09W'
    const navigate = useNavigate();
    const goToProfilePage = () => {
      navigate('/main', {
        state: {
            userId: 'hello back',
            description:desc,
        }
      });
    }
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Add here your aerodromes location</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Aerodromes Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Aerodromes City" variant="outlined" fullWidth
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
      <TextField id="outlined-basic" label="Aerodromes description" variant="outlined" fullWidth
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
    <TextField id="outlined-basic" label="Aerodromes creation" variant="outlined" fullWidth
      value={created_at}
      onChange={(e)=>setCreated_at(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Refresh the page!</h1>
    <h1>Choose the aerodrome you would like to see</h1>

    <Paper elevation={3} style={paperStyle}>

      {aerodrome.map(aerodromes=>(
        <button elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={aerodromes.id} onClick = {goToProfilePage}>
         quantidade de pistas:{aerodromes.id}<br/>
         Name:{aerodromes.name}<br/>
         City:{aerodromes.city}<br/>
         Description:{aerodromes.description}<br/>
         Created_at:{aerodromes.created_at}
        {desc = aerodromes.description}
        </button>
      ))
}


    </Paper>

    </Container>
  );
}

export default Form;