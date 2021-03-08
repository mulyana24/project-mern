import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/button";
import { InputDate, InputNumber } from "elements/Form";
import formatNumber from "utilts/formatNumber";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
     meta: {
      
       disabledDates: [
      
        new Date(this.props.itemDetails.booking[0].bookingStartDate),
        new Date(this.props.itemDetails.booking[0].bookingEndDate),
        // this.props.itemDetails.booking.map(Start => (
        //   [
        //     new Date(Start.bookingStartDate),
        //     new Date(Start.bookingEndDate)
        //   ]  
        // )),

        // this.props.itemDetails.booking.map(End => (
        //   new Date(End.bookingEndDate)
        // ))
        
       ]

      
     }
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      // meta: {
      //   ...this.state.meta, [e.target.name]: e.target.value,
      // }
    });
  };



  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
        // meta: {
        //   ...this.state.meta,
        //   disabledDates: {
        //     ...this.state.meta.disabledDates,
        //     Date: Date,
        //   }
        // }
      });
    }
  }

  

  // function startBooking
  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
      
    });
    this.props.history.push("/checkout");
  };

  // Start = () => {
  //   return(
  //    this.props.itemDetails.booking.map(mulai => (
  //     new Date(mulai.bookingStartDate)
  //   ))
  //   )
  // }

  render() {
    const { data, meta } = this.state;
    const { itemDetails } = this.props;

    console.log(meta.disabledDates)
    const disabled = itemDetails.booking.map(date =>(
  
      new Date(date.bookingStartDate)
       
  

    ))

    const disable = itemDetails.booking.map(dates =>(
      new Date(dates.bookingEndDate)
      
    ))
    console.log(disabled)

    // console.log(itemDetails.booking.map(date =>(
    //   new Date(date.bookingStartDate)
      
    
    // )))

    // console.log(meta.disabledDates)

   

    return (

      
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          IDR {formatNumber(itemDetails.price)}
          <span className="text-gray-500 font-weight-light">
            {/* per {itemDetails.unit} */}
          </span>
        </h5>

        <label htmlFor="duration">How long you will party?</label>
        <InputNumber
          max={30}
          suffix={" day"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
       
        <label htmlFor="date">Pick a date</label>
        
      
       <InputDate onChange={this.updateData} name="date" value={data.date} disabledDates={disabled} />
        
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900">
            IDR {itemDetails.price}
            {/* {itemDetails.price * data.duration} */}
          </span>{" "}
          {/* per {""}
          <span className="text-gray-900">
            {data.duration} 
          </span> */}
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
        
      </div>
      
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
  
};

export default withRouter(BookingForm);
