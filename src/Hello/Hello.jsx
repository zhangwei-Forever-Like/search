import React, { Component } from 'react'
import axios from 'axios'
import './Hello.css'

export default class Hello extends Component {
    state = { users:[] }
    
    search = () => {
        const {keyWordElement:{value:keyWord}}=this
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(res => {
            console.log(res)
            this.props.updateAppState({isLoading:false,users:res.data.items})
        },
        error=>{
            this.props.updateAppState({isLoading:false,err:error.message})
        }
        )
    }
    render() {
        // const {users}=this.state
        return (
            <div className="search">
                <h3>搜索github用户名</h3>
                <h5>友情提示：此搜索是根据您注册GitHub的用户名来搜索的</h5>
                <input ref={c=>this.keyWordElement=c} placeholder="输入关键词点击搜索"></input>
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
