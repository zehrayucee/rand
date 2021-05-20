import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import SimpleDateTime from 'react-simple-timestamp-to-date'
import axios from 'axios';

import {

  Container,
  Input,
} from "reactstrap";
import { green } from '@material-ui/core/colors';

class deneme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      selectedDate: new Date(),
      zaman: "",
      dizi: [],
      times: false

    }
  }
  onClickhandle = (e) => {
    var id = e.target.dataset.id;//button data-id deger ataması
    var array = this.state.data[id];
    this.setState({ times: array })

  }
  

  componentDidMount() {
    var nesne = this
    axios.get("http://localhost:3006/companyrundate" ).then(res => {
     // console.log(res.data[0])
      nesne.setState({
        //zaman:res.data.date,
        //dizi:res.data.timearray
        data: res.data
      })
      console.log(res.data)
      console.log(this)
    }).catch(err => {
      console.log(err)
    })
  }

  setSelectedDate = (date) => {
    this.setState({
      selectedDate: date
    })
    //console.log(this.state.zaman);
    console.log(new Intl.DateTimeFormat('en-US').format(this.state.selectedDate))
    if (this.state.zaman != this.state.selected) {
      console.log("false");
    }
    else {
      console.log("true")
    }

  }
  render() {
    //let asdf = this.state.black ? "blackButton" : "whiteButton";
    console.log(this.state.times)
    return (
      <div >
        <DatePicker placeholderText="select"
          selected={this.state.selectedDate}
          //onChange={this.handleChange}
          onChange={this.setSelectedDate}
          timeFormat='hh:mm tt'
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          maxDate={new Date().setDate(new Date().getDate() + 5)}
          isClearable
        />

        {/*<Input placeholder="Default" type="text" value={this.state.dizi}/>*/}
        <div>

          <div className="asd col-md-12">
            <container>
              {this.state.data.map((item, index) =>
                <row>
                  <button className="asdf " data-id={index} onClick={this.onClickhandle}>{item.date}</button>
                </row>
              )}
            </container></div>


          {this.state.times != false ? this.state.times.timearray.map(item => {
            return (
              <>
                <button>
                  {item}<br />
                </button>
              </>
            )
          }) : ''}
        </div>
      </div>

    )
  }
}
export default deneme;

