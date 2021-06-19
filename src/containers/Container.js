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
      events: [
        {
          uid: 1578710655009,
          dtstart: new Date("09/01/2020 23:00"),
          dtend: new Date("09/01/2020 23:45"),
          title: "Abhinav Shukla Interview",
          location: "google meet",
          description: "SDE Intern"
        },
        {
          uid: 1578710655010,
          dtstart: new Date("09/15/2020 17:15"),
          dtend: new Date("09/15/2020 19:15"),
          title: "Carry Minati Interview",
          location: "google meet",
          description: "Business Operations"
        },
        {
          uid: 1578710655011,
          dtstart: new Date("7/15/2020 17:15"),
          dtend: new Date("7/15/2020 19:15"),
          title: "Akash Kumar Interview",
          location: "Google Meet",
          description: "Teaching Instructor"
        },
        {
          uid: 1578710655005,
          dtstart: new Date("5/15/2020 17:15"),
          dtend: new Date("5/15/2020 19:15"),
          title: "Sunny Singh Interview",
          location: "zoom",
          description: "UI/UX Developer"
        }
      ]
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
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
      dt: currentDateTime
    });
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <Controls
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule an Event"
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
