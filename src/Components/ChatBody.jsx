import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import ChatList from './ChatList.jsx';
import TextArea from './TextArea.jsx';
import Grid from '@material-ui/core/Grid';
// import './ChatBody.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
})

class ChatBody extends React.Component {
  state = {
    text: "",
  }

  // method - 更新されたテキスト (text = TextArea.jsxのthis.state.textarea)
  handleUpdateTextArea = (text) => {
    this.setState({
      // text, という短縮形でもOK
      text: text,
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <p>xs=12</p>
            <p>This is ChatBody component</p>
            <ChatList text={this.state.text} />
            {/* <h3>{this.state.text}</h3> */}
            {/* textValueに触るために、matchaという名前のPropsを渡そうとしている */}
            <TextArea handleUpdateTextArea={this.handleUpdateTextArea} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

ChatList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ChatBody);