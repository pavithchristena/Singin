import React from 'react';
import  { useState } from 'react';
import {Avatar, Button,Grid, Paper, TextField, Checkbox,FormControlLabel, Typography,Link} from '@mui/material';
import '../App.css';

//import {LockOutlinedIcon} from '@mui/icons-material/LockOutlined';

const Login=()=>{
    const paperStyle={padding:20,height:'auto',width:400,margin:'50px auto'}
    const avatarStyle={backgroundColor:'#572929'}
    const btnstyle={margin:'8px 0px'}

    // use state
    const [Username,setUserName]=useState("");
    const [Password,setPassword]=useState("");

    const myFun=()=>{
          alert(Username,Password)
    }


    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>P</Avatar>
                <h2>sign in</h2>
                </Grid >
                
                <Grid container spacing={0} direction='column'>
                    <TextField  id="outlined-basic" label="Username" value={Username} 
                     onChange={(use)=>setUserName(use.target.value)} variant="outlined" fullWidth required/><br/>
                </Grid>
                
                <Grid items xs={12}>
                    <TextField  id="outlined-basic" label="Password" value={Password}
                     onChange={(use)=>setPassword(use.target.value)} type='password' fullWidth required/>
                </Grid>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                             />
                            }
                            label="Remember me"
                          />

                <Grid item xs={12}>
                   <Button onClick={myFun}   variant='contained' style={btnstyle}fullWidth>Login</Button>
                </Grid>
            <Typography>
            <Link href="#">Forget Password?</Link>
            </Typography>
            <Typography>Do You Have an Account?
                <Link href="#">sign up</Link>
            </Typography>   

            </Paper>
        </Grid>
        
    )
}


export default Login;