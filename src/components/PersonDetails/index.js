import {Component} from 'react'
import PersonDetailsItem from '../PersonDetailsItem'

import './index.css'

const apiStatusConstants = {
    initial:'INITIAL',
    success:'SUCCESS',
}

class PersonDetails extends Component{
    state = {
        apiStatus:apiStatusConstants.initial,
        personDetailsList:[],
        searchInput:'',
    }


    getPersonDetails = async () => {
        const apiUrl = ' https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
        const options = {
            method:'GET',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok){
            const fetchedData = await response.json()
            const updatedData = fetchedData.users_list.map(user => ({
                id:user.id,
                name:user.name,
                email:user.email,
                role:user.role,
            }))
            this.setState({
                personDetailsList:updatedData,
                apiStatus:apiStatusConstants.success,
            })
        }
    }

    enterSearchInput = () => {
    this.getPersonDetails()
  }

    changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render(){
      const {personDetailsList, searchInput} = this.state
      
      return(
          <div className="total-containers">
              <div className="search-bar-container">
                  <input 
                  value={searchInput} 
                  changeSearchInput={this.changeSearchInput}
                  enterSearchInput={this.enterSearchInput} 
                  type="search" 
                  className="search-input" />
              </div>
              <div className="person-details-containers">
                <ul className="person-list">
                    {personDetailsList.map(eachOne => (
                        <PersonDetailsItem personData={eachOne} key={eachOne.id} />
                    ))}
                </ul>
              </div>
          </div>
      )
  }


}

export default PersonDetails