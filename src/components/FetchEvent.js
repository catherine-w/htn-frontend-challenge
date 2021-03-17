import React from "react";

export default class FetchEvent extends React.Component {
  state = {
    event: null,
  };

  async componentDidMount() {
    const url =
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(JSON.stringify(data.data.events[0]));
    console.log(JSON.stringify(data.data.events[0].speakers.name));
    this.setState({ event: data.data.events[0] });
  }

  render() {
    if (!this.state.event) {
      return <div>no event found</div>;
    }

    return (
      <div class="test">
        <h1>Name: {this.state.event.name}</h1>
        {/* <div>Type: {this.state.event.event_type}</div> */}
        <div>
          End Time: {this.state.event.end_time} {this.state.event.start_time}{" "}
          End Time: {this.state.event.end_time}
        </div>

        <div>
          <h2>Description:</h2>
          <p>{this.state.event.description}</p>
        </div>
        <div>Speakers: {this.state.event.speakers.name}</div>
      </div>
    );
  }
}
