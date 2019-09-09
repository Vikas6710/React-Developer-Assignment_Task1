import React, { Component } from 'react'
import { Menu, Segment,Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LatestPost extends Component {
  state = { activeItem: 'category' }

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name })
  
}


  render() {
    const { activeItem } = this.state

    return (
        <Container>
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Link to="/home"><Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
           
          /></Link>
          <Link to="/single">
          <Menu.Item
            name='single'
            active={activeItem === 'single'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/category">
          <Menu.Item
            name='category'
            active={activeItem === 'category'}
            onClick={this.handleItemClick}
          /></Link>
        </Menu>
      </Segment>
      </Container>
    )
  }
}
