import React, { Component } from 'react'
import { Icon, Menu, Header, Image } from 'semantic-ui-react'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'


class NavBar extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.props.history.push("/glowchat/:id")

  render() {
    const { activeItem } = this.state
    return (

<div style={{  "padding-bottom": "72px",
               "padding-left": "0px",
               "padding-right": "0px"}}>
      <Menu size="mini"
        style={{
          position: "fixed",
          top: "0",
          width: "500px",
          padding: "5px",
          backgroundColor:"#19a974" }}
        secondary>
        <Menu.Item className="eric" >
          <NavLink to="/user/leaderboard" >
            <img src="https://res.cloudinary.com/kos2kos/image/upload/v1540408001/Leader.svg"
             alt=""
             height="25"
             width="25"

             />
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/user/profile">
            <img src="https://res.cloudinary.com/kos2kos/image/upload/v1540408009/User.svg"
             alt=""
             height="25"
             width="25"
             />
          </NavLink>
         </Menu.Item>
        <Menu.Item>
          <NavLink to="/glowchat/:id">
            <img src="https://res.cloudinary.com/kos2kos/image/upload/v1540408009/Chat.svg"
             alt=""
             height="25"
             width="25"
             />
          </NavLink>
         </Menu.Item>


     <Menu.Menu position="right">
        <Menu.Item>
          <NavLink to="/home">
            <img src="https://res.cloudinary.com/kos2kos/image/upload/v1540408895/Lock.svg"
             alt=""
             height="25"
             width="25"
             />
          </NavLink>
         </Menu.Item>
       </Menu.Menu>
     </Menu>
   </div>


    )
  }
}

export default NavBar
