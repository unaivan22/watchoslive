import React, { Component } from "react";
import ZoomIn from "../../Layout/ZoomIn";

export default class WatchMinimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <ZoomIn>
        <div className="clock_minimal bg-white max-h-[190px] w-[208px] overflow-hidden pr-4 pt-4 rounded-t-[2.5rem] ">
          <div
            className="hour_hand_minimal"
            style={{
              transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
            }}
          />
          <div
            className="min_hand_minimal"
            style={{
              transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
            }}
          />
          <div
            className="sec_hand_minimal"
            style={{
              transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
            }}
          />
          <span className="twelve_minimal text-center">12</span>
          {/* <span className="one">1</span>
          <span className="two">2</span> */}
          <span className="three_minimal text-center">3</span>
          {/* <span className="four">4</span>
          <span className="five">5</span> */}
          <span className="six_minimal text-center">6</span>
          {/* <span className="seven">7</span>
          <span className="eight">8</span> */}
          <span className="nine_minimal text-center">9</span>
          {/* <span className="ten">10</span>
          <span className="eleven">11</span> */}
          <div className="absolute bottom-10 left-1 flex justify-center w-full">
            <p className="text-2xs">{(new Date().getFullYear())}</p>
          </div>
        </div>
      </ZoomIn>
    );
  }
}
