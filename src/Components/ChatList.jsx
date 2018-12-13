// Messagelist.js
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
})

const dummyData = [
  {
    senderId: "perborgen",
    text: "who'll win?",
  },
  {
    senderId: "janedoe",
    text: "I dunno..",
  },
];

class ChatList extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     text: null,
  //     messages: null,
  //   };
  // }

  // updateState(state){
  //   this.setState(state);
  //   // 親コンポーネントを更新
  //   this.props.updateState(state);
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>xs=12</p>
              <p>this is ChatList Component</p>
              <p>{this.props.text}</p>
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