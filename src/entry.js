import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


class App extends Component{
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">这是一个列表页</a></div>
                <div><a href="#/detail">detail page</a></div>
            </div>
        );
    }
};

class List extends Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页圣达菲卡金卡额外佛啊额挖坟费金额我iaewfoiaewfj哦iwjfewofj</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
};

class Detail extends Component {
    render() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
};

//最终渲染
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
    </Router>
), document.getElementById('app'));
