import { Avatar, Button, Navbar, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import msslLogo from '../../images/mssl-2021.jpg'
import circledmenu from '../../images/circledmenu.png'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import profile from '../../images/raj.jpg'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const [user, setUser] = useState()
  const navigate = useNavigate()
  const login = () => {
    setUser(false)
  }
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    navigate('/')
  }

  return (
    <div className=''>
      <Navbar className="max-w-full h-20 justify-center items-center">
        <div className="container flex justify-between items-center mx-auto absolute left-0  right-0 text-blue-grey-900">
          <Toolbar className=''>
          </Toolbar>
          <Typography
            as="a"
            href="/"
            variant="small"
            className="py-1.5 absolute  font-normal cursor-pointer uppercase flex items-center "
          >
            <img src={msslLogo} alt="logo" className="w-8 h-8 " />  <span className='font-medium text-base text-grey-800'><small className='text-base text-red-600'>Motherson</small> logistics</span>
          </Typography>
          <ul className="flex items-center gap-36 " >


            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton variant="contained" {...bindTrigger(popupState)} >
                    <Avatar src={circledmenu} className="w-8 h-8 cursor-pointer " />
                  </IconButton>
                  <Box sx={{ m: -12 }}>
                    <Menu {...bindMenu(popupState)} className="items-center justify-center  "  >
                      <div className='w-96'>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <MenuItem onClick={popupState.close} className="grid-cols-2 flex flex-col">
                              <ListItemIcon>
                                <CorporateFareIcon fontSize="large" className='w-12 h-12 text-red-600' />
                              </ListItemIcon>
                              <Link to='/master/party' className='flex items-center justify-center'>
                                Masters
                              </Link>
                            </MenuItem>
                          </Grid>
                          <Grid item xs={6}>
                            <MenuItem onClick={popupState.close} className="grid-cols-2 flex flex-col">
                              <ListItemIcon>
                                <QueryStatsIcon fontSize="large" className='w-12 h-12 text-red-600' />
                              </ListItemIcon>
                              Rate Finders
                            </MenuItem>
                          </Grid>
                          <Grid item xs={6}>
                            <MenuItem onClick={popupState.close} className="grid-cols-2 flex flex-col">
                              <ListItemIcon>
                                <CalculateIcon fontSize="large" className='w-12 h-12 text-red-600' />
                              </ListItemIcon>
                              Rate Calculation
                            </MenuItem>
                          </Grid>
                          <Grid item xs={6}>
                            <MenuItem onClick={popupState.close} className="grid-cols-2 flex flex-col">
                              <ListItemIcon>
                                <AssessmentIcon fontSize="large" className='w-12 h-12 text-red-600' />
                              </ListItemIcon>
                              Reports
                            </MenuItem>
                          </Grid>
                        </Grid>
                      </div>
                    </Menu>
                  </Box>
                </React.Fragment>
              )}
            </PopupState>
          </ul>
          <div className="flex items-center space-x-4">

            {
              user ? (
                <>
                  <Button variant="" color="red" className="" size="md" onClick={login}>
                    Login
                  </Button>


                  <Button variant="" color="red" size="md" className="">
                    Signup
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="" color="red" className="" size="md" onClick={logout} >
                    Logout
                  </Button>
                  <IconButton className='hover:shadow-red-500 shadow-md'>
                    <Avatar className="cursor-pointer shadow-2xl" src={profile} variant="circular" />
                  </IconButton>
                </>
              )

            }

          </div>
        </div>

      </Navbar>
    </div>
  )
}

export default Header