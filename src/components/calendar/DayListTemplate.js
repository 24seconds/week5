import React, {Component} from 'react';
import axios from 'axios';
import OnedayItem from './OnedayItem';
import './DayListTemplate.css';
import FloatingButton from './FloatingButton'
import { auth } from '../srclogin/firebase/firebase';
import DetailModal from '../Modals/DetailModal';


class DayListTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dayLists : [],
      show: false,
      detail: "",
      interest : false,
      event_id: 0,
      user_id:""
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleUpdateInterest = this.handleUpdateInterest.bind(this);

  }


  shouldComponentUpdate(nextProps, nextState) {    
    // console.log('shouldComponentUpdate');
    // console.log(this.props.startDate.format("YYYYMMDD"));
    // console.log(nextProps.startDate.format("YYYYMMDD"));
    // console.log(this.props.startDate.format("YYYYMMDD")===nextProps.startDate.format("YYYYMMDD"));
    if(this.props.startDate.format("YYYYMMDD") === nextProps.startDate.format("YYYYMMDD")
        && this.props.filter_keywords === nextProps.filter_keywords && this.props.filter_tags === nextProps.filter_tags) {
      // console.log('trueeeeeeeeeeeeeeeeeeeeeeeeeeee');
      // this._getEvents(nextProps.startDate, nextProps.filter_tags, nextProps.filter_keywords);
      return true;
    }
    else {
      // console.log('falsssssssssssssssssssssssse');
      this._resetState();
      this._getEvents(nextProps.startDate, nextProps.filter_tags, nextProps.filter_keywords);
      return true;
    }
    // this._getEvents();
    return true;
  }

  _resetState(){
    this.setState({
      dayLists : []
      }
    )
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate');
    // console.log(this.props.startDate);
    // console.log(nextProps.startDate);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    // console.log(prevProps.startDate);
    return true;
  }



  componentDidMount(){
    // console.log('DayListTemplate');
    // console.log(this.props.startDate);
    // console.log(this.props.startDate._i);
    // console.log(this.props.currentDate);


    this._getEvents(this.props.startDate, this.props.filter_tags, this.props.filter_keywords);
  }

  _getEvents = async (startDate, filter_tags, filter_keywords) => {
    await this._callApi(startDate, filter_tags, filter_keywords);
  }

  _callApi = (startDate, filter_tags, filter_keywords) => {
    const { currentDate } = this.props;
    console.log('call API,-----',startDate,currentDate);
    for(let i=0; i<7; i++) {
      let date = startDate.clone();
      date.add('days', i);


      axios.post('http://52.231.64.73:3001/events/itemsbydate3', {
          date: date.format("YYYY-MM-DD"),
          filter_keywords: filter_keywords,
          filter_tags: filter_tags,
          user_id: '22@gmail.com',
      })
      .then(response => {
        // console.log('====================================');
        // console.log(response);
        // console.log('====================================');

        const items = response.data.items;
        let events = [];

        for(let i=0; i<items.length; i++) {
          const item = items[i];
          events.push({eventId: item.event_id, startTime: item.start_time, endTime: item.end_time, location: item.place, eventTitle: item.title, interest: item.interest});
        }

        this.setState({
          dayLists: [...this.state.dayLists, {oneItemId : i, date: date, events : events}]
        })
      });
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(event_id, interest) {
    axios.get('http://52.231.64.73:3001/events/detailbyid', {
        params: {
          id: event_id
        }
      })
      .then(response => {
        if(response.data.success) {
          this.setState({
            detail: response.data.detail,
            show: true,
            interest: interest,
            event_id: event_id
          });
        }
      });
  }

  handleUpdateInterest(interest, event_id) {
    if(interest) {
      axios.delete('http://52.231.64.73:3001/events/dislike', {
          params: {
            user_id: auth.currentUser.email,
            event_id: event_id
          }
        })
        .then(response => {
          console.log(response);
        });

        this.setState({
          interest : !this.state.interest
        })


    } else {
      axios.post('http://52.231.64.73:3001/events/like', {

          user_id: auth.currentUser.email,
          event_id: event_id

        })
        .then(response => {
          console.log(response);
        });
        this.setState({
          interest : !this.state.interest
        })

    }
  }

  render() {
    const {handleMouseEnterToItem, title, representation, startTime, endTime, place, summary, tags} = this.props;
    const {dayLists} = this.state;
    dayLists.sort(function (a,b){
      return a.date<b.date?-1:a.date>b.date?1:0;
    });

    // console.log('=============await결과=============');
    // console.log(dayLists);
    // console.log('====================================');

    const onedayItems = dayLists.map(
      ({oneItemId, date, events }) => (
        <OnedayItem
          date = {date}
          events = {events}
          key = {oneItemId}
          handleMouseEnterToItem = {handleMouseEnterToItem}
          handleShow = {this.handleShow}
        />
      )
    );

    return(
      <div className = "DayListTemplate-template">
        {onedayItems}
        <div className="DayListTemplate-floatingbutton">
          <FloatingButton />
        </div>
        <DetailModal show={this.state.show} handleClose={this.handleClose} title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} detail={this.state.detail} interest={this.state.interest} event_id={this.state.event_id} handleUpdateInterest={this.handleUpdateInterest}/>
      </div>
    );
  }
}


export default DayListTemplate;
