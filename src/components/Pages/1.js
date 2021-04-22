import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
}
componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
}
  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
--------------

export default class customerlogin extends Component {
    constructor(props){
      super(props);
      this.state={
          data:[],
          input: "",
          input2:""
      }
    }
    componentDidMount(){
      var bu = this
      axios.get("http://localhost:12283/api/TBLNOTs").then(res=>{
        
        bu.setState({input: res.data[0].not_txt})
        bu.setState({input2: res.data[0].not_date})
      }).catch(err=>{
        console.log(err)
      })
    }
  