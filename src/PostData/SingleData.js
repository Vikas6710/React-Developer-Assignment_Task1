import React, { Component } from "react";
import { Menu, Segment, Container, Header} from "semantic-ui-react";
import Axios from "axios";
import '../scss/style.scss'

export default class singleData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      data: [],
      loading: false
    };
    this.getData = this.getData.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  getData = () => {
    const { userId } = this.state
    this.setState({
      data: [],
      loading: true
    });
    Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(json => {
        console.log(json.data);
        this.setState({ data: json.data, loading: false });
      })
      .catch(e => {
        console.error(e);
        this.setState({
          data: [],
          loading: false
        });
      });
  };

  componentDidMount = () => {
    this.getData()
  };

  btnClick = (e) => {
    const  userId  = e.target.value;
    console.log(userId);
    this.setState({
      userId
    });
    this.getData()
  };
  render() {
    const thedata = this.state.data.map(content => {
      return (
        <Container>
          <Header as="h2" attached="top">
           Full Content
          </Header>
          <Segment attached>{content.body}</Segment>
        </Container>
      );
    });
    if (this.state.loading) {
      return <p>Loading....</p>;
    }
    return (
      <div>
        {thedata}
        <div>
        <UserIdComponent name="1" onClick={this.btnClick} />
        <UserIdComponent name="2" onClick={this.btnClick} />
        <UserIdComponent name="3" onClick={this.btnClick} />
        <UserIdComponent name="4" onClick={this.btnClick} />
        <UserIdComponent name="5" onClick={this.btnClick} />
      </div>
      </div>
    );
  }
}

const UserIdComponent = (props) => {
  return (
    <button value={props.name} onClick={props.onClick}>
      {props.name}
    </button>
   
  );
};
