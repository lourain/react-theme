import React, { Component } from 'react';
import CssModule from 'react-css-modules'
import Modal from './components/tip-box/index'
import ImgCheck from './components/img-check/index'
import styles from './App.less'
const bg = {
	background: `url(${require('./images/bannerBg.png')}) no-repeat center/cover`
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			value: '',
			text: "发送验证码",
			msg: '',
			modalShow: false,
			imgCheckShow: true
		}
	}

	getPhone(e) {
		this.setState({
			value: e.target.value
		})
	}
	verifyPhone() {
		const phone = this.state.value
		if (/^1\d{10}$/g.test(phone)) {
			return true
		}
	}
	sendMsg(time) {//发送验证码\
		if (this.state.value === '') {
			return (
				this.setState({
					msg: '手机号不能为空',
					modalShow: true
				})
			)
		} else if (!this.verifyPhone()) {
			this.setState({
				msg: '手机号格式不对',
				modalShow: true
			})
		} else {
			this.setState({
				imgCheckShow: true
			})
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
	//控制Modal组件显示,接受子组件传值
	ctrlModal(boolean) {
		this.setState({
			modalShow: boolean
		})
	}
	//控制ImgCheck组件显示,接受子组件传值
	ctrlImgCheck(boolean) {
		this.setState({
			imgCheckShow: boolean
		})
	}
	render() {
		const { value, text, msg, modalShow, imgCheckShow } = this.state
		console.log({...this.props});
		
		return (
			<div styleName="theme" style={bg}>
				<div styleName="form">
					<div styleName="box">
						<div styleName="phone-box">
							<img src="" styleName="person-icon" alt="" />
							<input type="tel" placeholder="请输入您的手机号" maxLength="11" value={value} onChange={this.getPhone.bind(this)} />
						</div>
						<div styleName="verifycode-box">
							<img src="" styleName="phone-icon" alt="" />
							<input type="tel" placeholder="请输入验证码" maxLength="6" />
							<button type="button" onClick={this.sendMsg.bind(this, 60)}>{text}</button>
						</div>
					</div>
					<div styleName="opt">
						<button type="button" styleName="sure-btn">急速借款</button>
						<div styleName="agreement">
							<i></i>
							<span>注册即代表同意 <span>《信用白条用户使用协议》</span></span>
						</div>
					</div>
				</div>
				{
					modalShow ? (<Modal msg={msg} modalShow={modalShow} ctrlModal={this.ctrlModal.bind(this)} />) : null
				}
				{
					imgCheckShow ? (<ImgCheck imgCheckShow={imgCheckShow}  ctrlImgCheck={this.ctrlImgCheck.bind(this)} countDown={this.timeDown.bind(this)} {...this.state}/>) : null
				}
			</div>
		)
	}
}

export default CssModule(App,styles);
