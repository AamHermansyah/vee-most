import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

const debug = true;

const initialState = {
  amount: "2.00",
  orderID: "",
  onApproveMessage: "",
  onErrorMessage: ""
};

export default class PayPalCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.onApprove = this.onApprove.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    if (+event.target.value > 0) {
      this.setState({
        amount: event.target.value,
        orderID: "",
        onApproveMessage: "",
        onErrorMessage: ""
      });

      return;
    }

    event.target.value = '0';
  }

  createOrder(data, actions) {
    if (debug) console.log("Creating order for amount", this.state.amount);
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: this.state.amount
            }
          }
        ]
      })
      .then((orderID) => {
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  onApprove(data, actions) {
    let app = this;
    return actions.order.capture().then(function (details) {
      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`
      });
    });
  }

  onError(err) {
    this.setState({
      onErrorMessage: err.toString()
    });
  }

  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);
  }

  render() {
    return (
      <div className="mt-10 text-gray-800">
        {this.state.onApproveMessage && (
          <div className="text-center">
            <h2 className="my-4 text-2xl font-bold">
              ORDER ID: {this.state.orderID}
            </h2>
            <p className="text-lg">
              {this.state.onApproveMessage}
            </p>
            <span className="inline-block mt-4 text-sm text-sky-500 font-bold mb-6">
              Thanks for your checkout^^
            </span>
          </div>
        )}

        {this.state.onErrorMessage && (
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-bold">
              {this.state.onApproveMessage || 'Server error with 500'}
            </h2>
            <span className="inline-block text-sm font-bold mb-6">
              Try again later.
            </span>
          </div>
        )}

        <PayPalScriptProvider
          options={{
              "client-id": "AVTXuMYmbq9ptBNoPMElwdAL6icpRdoC7yMuhf7Co8vU0jbxozHQEu8B-mlRW3Q14GcA66_s00z6mjUb"
            }}
        >
          <PayPalButtons
            createOrder={this.createOrder}
            onApprove={this.onApprove}
            onError={this.onError}
            onClick={this.onClick}
            className="w-full max-w-[750px] mx-auto"
          />
        </PayPalScriptProvider>
      </div>
    );
  }
}
