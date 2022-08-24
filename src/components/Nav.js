import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Menu,
  Button,
  MenuItem,
  IconButton,
  InputBase,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Card,
  Dialog,
  Divider,
  DialogTitle,
  Drawer,
  ListItemButton,
  Box,
  ListItemAvatar,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosConfig from '../Public Components/axiosConfig';
//home page
//movie list
const Nav = () => {

  //local variables
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openbell, setOpenbell] = useState(false);
  const logged = localStorage.getItem("username");
 
  //bell
  const[movies,setMovies] = useState([]);
    
    
    useEffect(()=>{
        axiosConfig.get("home/movie/list").then((rsp)=>{       
        setMovies(rsp.data);
        
        },(er)=>{
        alert("no data")
        })
        console.log(movies);
    },[]);



    const LogOut=()=>{

      var data = {username:localStorage.getItem("username")}
      axiosConfig.post("logout",data).
      then((succ)=>{  
          
          alert(succ.data.msg)
          localStorage.clear();
          window.location.href="/customer/home";
          debugger
      },(erros)=>{
          debugger
      })
      
  }
   


  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography mr={2}>TEXT</Typography>
        <Stack direction='row' spacing={2} alignItems='center' flexGrow={1}>
          <Link
            to='/customer/home'
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography color='white'>Home</Typography>
          </Link>
          <Button
            onClick={(e) => setAnchorEl(e.currentTarget)}
            color='inherit'
            endIcon={<ArrowDropDownIcon />}
          >
            Movies
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
            
            <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Thriller</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Comedy</MenuItem>
            
          </Menu>
        </Stack>
        <Stack
          sx={{
            bgcolor: '#FFFFFF',
            width: '35%',
            borderRadius: 1,
          }}
          mr={2}
        >
          <InputBase
            fullWidth
            endAdornment={
              <IconButton color='primary'>
                <SearchIcon />
              </IconButton>
            }
          />
        </Stack>
        {logged && (
          <Stack direction='row' mx={2}>
          {/* mylist */}
            <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
              <Box width={300}>
                <Stack
                  direction='row'
                  p={2}
                  justifyContent='space-between'
                  alignContent='center'
                >
                  <Typography variant='h6'>My movie list</Typography>
                  <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                  </IconButton>
                </Stack>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src='https://wegotthiscovered.com/wp-content/uploads/2020/07/159492946620314633-11.jpeg'></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Some movie' />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src='https://wegotthiscovered.com/wp-content/uploads/2020/07/159492946620314633-11.jpeg'></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Some movie' />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </List>
              </Box>
            </Drawer>
            <Button color='inherit' onClick={() => setOpen(true)}>
              My List
            </Button>
            {/* ........... */}


            {/* Bell */}
            <Drawer anchor='right' open={openbell} onClose={() => setOpenbell(false)}>
              <Box width={300}>
                <Stack
                  direction='row'
                  p={2}
                  justifyContent='space-between'
                  alignContent='center'
                >
                  <Typography variant='h6'>Bell</Typography>
                  <IconButton onClick={() => setOpenbell(false)}>
                    <ClearIcon />
                  </IconButton>
                </Stack>
                <Divider />
                <List>
                {movies.map(movie =>(
                     <>
                      <ListItem key={movie.name}>
                        <ListItemText primary={movie.name} secondary={movie.updated_at}/>
                      </ListItem>
                      <Divider />
                      </> 
                 ))} 
                </List>
              </Box>
            </Drawer>
            <IconButton color='inherit'onClick={() => setOpenbell(true)}>
              <NotificationsActiveIcon  />
            </IconButton>

            {/* ........................... */}
            <Link to="/customer/profile">My profile</Link>
            <button onClick={(e)=>{LogOut()}} >Logout</button>
          </Stack>
        )}
        {logged ? (
          <Avatar src='https://imgs.search.brave.com/Y9GjMyKhkBEngg_-y_8ebxqHlerJ5J-M7udhoF2bA_4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wdWJs/aWNkb21haW52ZWN0/b3JzLm9yZy9kb3du/bG9hZC5waHA_Zmls/ZT1NYWxlLUF2YXRh/ci5zdmc'>
            roni
          </Avatar>
          
        ) : (
          <Button variant='contained'><Link to="/reportChart"><span className='text-danger'>Login</span></Link></Button>
           
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
{
  /* <Dialog open={open} onClose={() => setOpen(false)}>
<DialogTitle onClose={() => setOpen(false)}>
  <Typography></Typography>
  <IconButton>
    <SearchIcon />
  </IconButton>
</DialogTitle>
<Card>
  <List>
    <ListItem>
      <ListItemText primary='Some movie title' />
    </ListItem>
    <Divider />
  </List>
</Card>
</Dialog> */
}
