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

  // 親でハンドリングして子に渡す
  // 参考：https://qiita.com/kazushikawamura/items/58ea222b3cc289882d79
  constructor(props) {
    super(props);

    // init state
    this.state = {
      textArea: '',
      messages: [],
    }

    //bindすることで、thisのコンテキストを固定する
    //そうしないと、このコンストラクタ以外のthisが呼ばれてしまう
    // = 正常に関数が実行されない可能性がある

    // Change state
    this.handleChangeText = this.handleChangeText.bind(this);
    // 
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.callBackMsg = this.callBackMsg.bind(this);

    // Add message to Array
    this.addMsg = this.addMsg.bind(this);
  }

  // define function to update state(入力されるたびにレンダリングされる)
  handleChangeText(event) {
    this.setState({
      textArea: event.currentTarget.value,
    });
    console.log(event.currentTarget.value);
  }
  
  // method - 更新されたテキスト (text = TextArea.jsxのthis.state.textarea)
  // handleUpdateTextArea = (text) => {
  //   this.setState({
  //     // text, という短縮形でもOK
  //     text: text,
  //   });
  // }

  addMsg() {
    console.log('submitted');
    //this.stateをmessagesとtextAreaに分ける
    let { textArea, messages } = this.state;
    //textareaに入力した内容をmessagesのarrayに追加
    messages.push({
      textArea: this.state.textArea,
    });
    console.log(messages + " : " + textArea);
    //messagesのstate(状態)をsetStateにより変化させる
    this.setState({ messages });
  }

  // handleSubmit() {
  //   console.log('submitted');
  //   const currentTextarea = this.state.textarea;
  //   //親コンポーネントで定義している(propsとして渡されている)関数を動かしている
  //   // propsという名前が呼ばれていたら - この真上にある「親」コンポーネントを見る！
  //   this.props.handleUpdateTextArea(currentTextarea);
  // }

  // Doing the same things above!
  // 子コンポーネントから親コンポーネントにstateの値を共有するための関数
  // callBackMsg(){
  //   alert(this.state.textarea);
  //   // ChatBody.jsxにいるmatchaに送る
  //   this.props.matcha(this.state.textarea);
  // }



  render() {
    // to execute applying styles(code above)
    // - read code from here when render happen here
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <p>xs=12</p>
            <p>This is ChatBody component</p>

            {/* 定義した配列をmapにして表示させる */}
            {this.state.messages.map((message, index) => {
              // console.log(message.textArea);
              return <ChatList key={index} message={message.textArea} />
            })}

            {/* handleChangeText,handleSubmitに触るために、
            handleChangeText,handleSubmitという名前のPropsを渡そうとしている */}
            <TextArea 
              handleChangeText={this.handleChangeText} 
              handleSubmit={this.handleSubmit}
              addMsg={this.addMsg}
            />
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