import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// MUI comonents
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

//// Example of functional component
// const Header = (props) => {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             Shiori
//           </Typography>
//           <Button color="inherit">About</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

//// Example of class Component
class Header extends React.Component{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
              Instant Chat
          </Typography>
          <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);