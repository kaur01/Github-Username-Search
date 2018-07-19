import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {refreshUsers,userDetails} from '../actions/index.js';

class UsersList extends Component {

    async getUsers(txt){
            let res = await fetch(`https://api.github.com/search/users?q=${txt}`)
            res =  await res.json()
            console.log(res);
            res.items ?
            this.props.refreshUsers({
                totalCount: res.total_count,
                users: res.items
            }) : undefined;
    }

    async getFollowers(txt,index){
      console.log(txt,index);
      let response = await fetch(`https://api.github.com/users/${txt}`)
      response =  await response.json()
      this.props.userDetails({
        index: index,
        followers: response.followers
      })
    }
    render(){
        return(
            <div>
                <input onChange={(e) => this.getUsers(e.target.value)} />
                <h1>TOTAL COUNT: {this.props.users.totalCount}</h1>
                {   
                    this.props.users.users && 
                    this.props.users.users.length > 0 ?
                    this.props.users.users.map((item,index) => {
              return(
                        <li key={index} onClick={(e) => this.getFollowers(item.login)}>{item.login}
                                               {item.followers &&  <span>  Followers: {item.followers}</span>}</li>
              );
            }) : undefined
            }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      users: state.users
    }
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({refreshUsers:refreshUsers, userDetails:userDetails},dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
