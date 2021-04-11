class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick () {

  }

  render() {
    return <button onClick={this.handleClick}>Checkout</button>

  }
}

class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>

      </form>
    )
  }
}

const UserAccount = () => {
  <div>
    <label>First Name:</label>
    <input type="text"></input>
    <label>Last Name:</label>
    <input type="text"></input>
    <label>Email Address:</label>
    <input type="email"></input>
    <label>Password:</label>
    <input type="password"></input>
  </div>
}

const AddressInfo = () => {
  <div>
    <label>Shipping Address</label>
    <label>line 1:</label>
    <input type="text"></input>
    <label>line 2:</label>
    <input type="text"></input>
    <label>City:</label>
    <input type="text"></input>
    <label>State:</label>
    <input type="text"></input>
    <label>Zip:</label>
    <input type="number"></input>
  </div>
}

const CreditCardInfo = () => {
  <div>
  <label>Credit Card #:</label>
  <input type="number"></input>
  <label>Exp Date:</label>
  <input type="number"></input>
  <label>CVV:</label>
  <input type="number"></input>
</div>
}

const OrderConfirmation = () => {
  <div>
    <label>First Name:</label>
    <p>{}</p>
    <label>Last Name:</label>
    <p>{}</p>
    <label>Email Address:</label>
    <p>{}</p>
    <label>Shipping Address</label>
    <p>{}</p>
    <label>line 1:</label>
    <p>{}</p>
    <label>line 2:</label>
    <p>{}</p>
    <label>City:</label>
    <p>{}</p>
    <label>State:</label>
    <p>{}</p>
    <label>Zip:</label>
    <p>{}</p>
    <label>Credit Card #:</label>
    <p>{}</p>
    <label>Exp Date:</label>
    <p>{}</p>
    <label>CVV:</label>
    <p>{}</p>
    <button>Purchase</button>
  </div>
}

const NextButton = () => (
  <button>Next</button>
)

const BackButton = () => (
  <button>Back</button>
)

ReactDOM.render(<App />, document.getElementById('app'));