import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// sample code
// class SugoiHeader extends Component {
//   state = {
//     text: 'sugoiyo yabaiyo'
//   }

//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//     this.onClick = this.onClick.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           <input type="text" value={this.state.text} onChange={this.onChange} />
//           <button onClick={this.onClick}>Foo</button>
//         </p>
//       </div>
//     );
//   }

//   onChange(event) {
//     this.setState({
//       text: event.currentTarget.value,
//     })
//   }

//   onClick() {
//     // matcha関数 - 引数 : this.state.text
//     // this.state.textをmatcha関数(this.props.matcha)に渡した
//     // this.props.matcha = niceMatcha(下記)
//     this.props.matcha(this.state.text);
//   }
// }


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class TextArea extends React.Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>This is TextArea component.</p>
              {/* {this.handleChangeText} = 「関数オブジェクト」の呼び出し */}
              <TextField
                className="textArea"
                placeholder="Hi"
                // this.props.handleChangetext
                // =「親コンポーネント(ChatBody)にいるhandleChangeTextの値」
                onChange={this.props.handleChangeText}
              >
                {this.props.handleChangeText}
              </TextField>
              {/* 親コンポーネントにいるaddMsgをonClickで発火させる */}
              <Button color="primary" type="button" onClick={this.props.addMsg}>Send</Button>
              {/* <button type="button" onClick={this.addMsg}>Send</button> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

TextArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextArea);