// Messagelist.js
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import AvatarImg from './../assets/img/bio_pict.jpg';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  avatar: {
    margin: 'auto',
  }
})

class ChatList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Avatar alt="Katie Strathcona" src={ AvatarImg } className={classes.avatar}/>
              <p>this is ChatList Component</p>
              {/* 親から渡ってきた中身が表示 */}
              <p>{this.props.message}</p>
              <p></p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

ChatList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatList);