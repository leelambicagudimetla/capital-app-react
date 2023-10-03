import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    image: countryAndCapitalsList[0].id,
  }

  onChangeName = event => {
    this.setState({image: event.target.value})
  }

  getCountry = () => {
    const {image} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === image,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {image} = this.state
    const country = this.getCountry(image)
    console.log(country)

    return (
      <div className="main-div">
        <div className="sec-div">
          <h1 className="heading">Countries And Capitals</h1>

          <div className="common">
            <select onChange={this.onChangeName} value={image}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <p>is capital of which country?</p>
          </div>

          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
