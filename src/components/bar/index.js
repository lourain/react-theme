import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import Routes from '../../route/router'
import styles from './bar.less'
const style = {
    active:{
        color:'deeppink'
    }
}
class Bar extends Component {
    render() { 
        //console.log(styles);
        
        return (
            <div>
                <div className={styles.bar} key="bar">
                    <ul>
                        <li>
                            <NavLink to="/index" activeStyle={style.active} ex='true'>首页</NavLink>
                        </li>
                        <li>
                            <NavLink to='/test' activeStyle={style.active} ex='true'>测试</NavLink>
                        </li>
                    </ul>
                </div>
                <Routes key='route'/>
            </div>
        )
    }
}
 
// export default CssModule(Bar,styles);
export default Bar