import React, { Component } from "react";
import DateTime from "../data/DateTime";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Controls from "../components/Controls";

const style = {
  backgroundColor: "00FFFF",
  color: "#ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: "",
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {},
      filtered: [],
      events: [
        {
          uid: 1578710655009,
          dtstart: new Date("06/21/2021 23:00"),
          dtend: new Date("06/21/2021 23:45"),
          title: "Abhinav Shukla Interview",
          location: "google meet",
          description: "SDE Intern",
          email: "abhinavshukla1177@gmail.com",
          phone: "9680848822"
        },
        {
          uid: 1578710655010,
          dtstart: new Date("06/20/2021 21:15"),
          dtend: new Date("06/20/2021 22:15"),
          title: "Carry Minati Interview",
          location: "google meet",
          description: "Business Operations",
          email: "xyz@gmail.com",
          phone: "0115524848"
        },
        {
          uid: 1578710655011,
          dtstart: new Date("06/19/2021 17:15"),
          dtend: new Date("06/19/2021 19:15"),
          title: "Akash Kumar Interview",
          location: "Google Meet",
          description: "Teaching Instructor",
          email: "xyz@gmail.com",
          phone: "0177894848"
        },
        {
          uid: 1578710655005,
          dtstart: new Date("06/22/2021 17:15"),
          dtend: new Date("06/22/2021 19:15"),
          title: "Sunny Singh Interview",
          location: "zoom",
          description: "UI/UX Developer",
          email: "xyz@gmail.com",
          phone: "01154674848"
        }
      ]
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {}
    });
  }
  handleChange(e) {
  let currentList = [];
  let newList = [];

  if (e.target.value !== "") {
  
  currentList = this.props.events;

  newList = currentList.filter(item => {
    const lc = item.toLowerCase();
    const filter = e.target.value.toLowerCase();
    return lc.includes(filter);
   });
  } else {
  newList = this.props.filtered;
  }
  this.setState({
    filtered: newList
  });
  }
  handleFormSubmit(event) {
    let events = this.state.events;
    const eventIndex = events.findIndex(obj => {
      return obj.uid === event.uid;
    });
    if (eventIndex === -1) {
      events.push(event);
    } else {
      events[eventIndex] = event;
    }
    this.setState({
      events: events,
      formVisible: false
    });
  }
  removeEvent(array, uid) {
    const index = array.findIndex(obj => {
      return obj.uid === uid;
    });
    return index >= 0
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : array;
  }
  handleRemoveItem(uid) {
    const events = this.removeEvent(this.state.events, uid);
    this.setState({ events: events });
  }
  handleEditItem(node) {
    this.setState({
      selectedEvent: node,
      hasSelectedEvent: true,
      formVisible: true
    });
  }
  componentDidMount() {
    const dt = new DateTime();
    const currentDateTime = dt.getCurrentDateTime();
    this.setState({
      filtered: this.props.events
    });
    this.setState({
      dt: currentDateTime
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.events
    });
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <Controls
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
       <div>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
         <ul>
          </ul>
      </div>
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule Interview"
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
            selectedEvent={this.state.selectedEvent}
            hasSelectedEvent={this.state.hasSelectedEvent}
          />
        ) : null}
        <EventList
          events={this.state.events}
          onRemoveItem={this.handleRemoveItem}
          onEditItem={this.handleEditItem}
        />
      </div>
    );
  }
}

export default Container;
