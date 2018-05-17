import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CssModule from 'react-css-modules'

class CountDown extends Component {
    constructor() {
        super()
        this.state = {
            text: '发送验证码'
        }
        this.verifyPhone = this.verifyPhone.bind(this)
    }
    sendMsg(time) {//发送验证码
        if (this.verifyPhone()) {
            this.timeDown(time)
        }else{
            alert('false')
        }
    }
    verifyPhone() {
        const {phone} = this.props
        if (/^1\d{10}$/g.test(phone)){
            return true
        }
    }
    timeDown(time) {//倒计时
        let timer = setInterval(() => {
            if (time > 0) {
                this.setState({
                    text: `${--time}秒`
                })
            } else {
                clearInterval(timer)
            }
        }, 1000);
    }
    render() {
        const { text } = this.state
        return [
            <button type="button" key='countdown' onClick={this.sendMsg.bind(this,60)}>{text}</button>
        ]
    }
}
CountDown.propTypes = {
    phone:PropTypes.number.isRequired
}
export default CountDown;
