import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkBtn: {
    textDecoration: 'none',
    marginRight: '10px'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Hooks Demo
          </Typography>
          
          <Link to='/' className={classes.linkBtn}>
            <Button variant="contained" color="default">Home</Button>
          </Link>
          <Link to='/about' className={classes.linkBtn}>
            <Button variant="contained" color="default">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header;
