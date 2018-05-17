import React, { Component } from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import ReactMixin from 'react-mixin'
import CssModule from 'react-css-modules'
import styles from './img-check.less'
import MixinTools from '../mixin'
class Box extends Component {
    render() {
        return ReactDom.createPortal(
            this.props.children,
            document.getElementById('root')
        )
    }
}

class ImgCheck extends Component {
    state = {
        imgUrl: `http://www.jisuhebao.com/frontend/web/xqb-user/verify?clientType=wap?rand=${Math.random()}`
    }
    hideImgCheck() {
        this.props.ctrlImgCheck(false)
    }
    countDown() {
        this.hideImgCheck()
        this.props.countDown(60)
    }
    //刷新图片
    refreshImg() {
        this.setState({
            imgUrl: `http://www.jisuhebao.com/frontend/web/xqb-user/verify?clientType=wap?rand=${Math.random()}`
        })
    }
    render() {
        const { imgUrl } = this.state
        console.log(this.props);      
        MixinTools.log()
        return (
            <Box>
                <div styleName='mask'>
                    <div styleName='box'>
                        <div styleName='space' onClick={this.hideImgCheck.bind(this)}>x</div>
                        <div styleName='title'>请输入图片验证码</div>
                        <input type="text" />
                        <p styleName=''></p>
                        <img src={imgUrl} alt="" onClick={this.refreshImg.bind(this)} />
                        <div styleName="btns">
                            <div styleName='confirm' onClick={this.countDown.bind(this)}>确定</div>
                            <div styleName='cancel'  onClick={this.hideImgCheck.bind(this)}>取消</div>
                        </div>
                    </div>
                </div>
            </Box>
        )
    }
}
ImgCheck.propTypes = {
    ctrlImgCheck: PropTypes.func.isRequired,
    countDown: PropTypes.func.isRequired
}
ReactMixin(ImgCheck.prototype,MixinTools)
export default CssModule(ImgCheck,styles);