import React from 'react';
import ReactDom from 'react-dom'
import CssModule from 'react-css-modules'
import styles from './tip-box.less'
class TipBox extends React.Component {
    render() {
        return ReactDom.createPortal(
            this.props.children,
            document.getElementById('root')
        )
    }
}

class Modal extends React.Component {
   
    hideModal() {
       this.props.ctrlModal(false)
    }
    render() {
        const { msg } = this.props
        
        return (
            <TipBox>
                <div styleName="tipModal">
                    <div styleName="box">
                        <div>{msg}</div>
                        <button type="button" onClick={this.hideModal.bind(this)}>确 定</button>
                    </div>
                </div>
            </TipBox>
        )
    }
}

export default CssModule(Modal,styles);

