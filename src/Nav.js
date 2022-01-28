import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

export default function Nav() {
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
        },
        margin: {
          margin: theme.spacing(1),
        }
      }));
  return(
    <div style={useStyles.root}>
        <AppBar position="static" className="app-bar">
            <Toolbar>
            <Typography variant="h6" color="inherit" className={useStyles.title}>
                Let's Track Your Period
            </Typography>
            <IconButton edge="end" color="inherit" target="_blank"
                href="https://http://localhost:3000/">
                <MoreIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    </div>);
}