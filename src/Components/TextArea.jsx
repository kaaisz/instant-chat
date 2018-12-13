import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import './TextArea.scss';


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

  constructor(props) {
    super(props);

    // init state(as an empty Textarea)
    this.state = {
      textarea: '',
      messages: [],
    }

    //bindすることで、thisのコンテキストを固定する
    //そうしないと、このコンストラクタ以外のthisが呼ばれてしまう
    // = 正常に関数が実行されない可能性がある
    this.handleChangeText = this.handleChangeText.bind(this);
    this.addMsg = this.addMsg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.callBackMsg = this.callBackMsg.bind(this);
  }

  // define function to update state
  handleChangeText(event) {
    this.setState({
      textarea: event.currentTarget.value,
    });
    console.log(event.currentTarget.value);
  }

  addMsg() {
    //this.stateをmessagesとtextareaに分ける
    let { textarea, messages } = this.state;
    //textareaに入力した内容をmessagesのarrayに追加
    messages.push(textarea);
    console.log(messages + " : " + textarea);
    //messagesのstate(状態)をsetStateにより変化させる
    this.setState({ messages });
  }

  handleSubmit() {
    console.log(this.state);
    const currentTextarea = this.state.textarea;
    //親コンポーネントで定義している(propsとして渡されている)関数を動かしている
    // propsという名前が呼ばれていたら - この真上にある「親」コンポーネントを見る！
    this.props.handleUpdateTextArea(currentTextarea);
  }

  // Doing the same things above!
  // 子コンポーネントから親コンポーネントにstateの値を共有するための関数
  // callBackMsg(){
  //   alert(this.state.textarea);
  //   // ChatBody.jsxにいるmatchaに送る
  //   this.props.matcha(this.state.textarea);
  // }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p>This is TextArea component.</p>
              <ul>
                {this.state.messages.map(message => {
                  return (<li key={message}>{message}</li>)
                })}
              </ul>
              {/* {this.handleChangeText} = 「関数オブジェクト」の呼び出し */}
              <TextField
                className="textArea"
                placeholder="Hi"
                onChange={this.handleChangeText}
              >
                {this.state.textarea}
              </TextField>
              <Button color="primary" type="button" onClick={this.handleSubmit}>Send</Button>
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