import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';
import Areas from '../Areas/Areas';
import Listings from '../Listings/Listings';
import IndividualListing from '../IndividualListing/IndividualListing';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      type: 'TYPE OF TRAVEL',
      currentArea: '',
      favorites: []
    }
  }

  change = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  loginUser = (event) => {
    event.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.type === 'TYPE OF TRAVEL') {
      this.displayError();
    } else {
      this.props.history.push('/areas')
    }
  }

  displayError = () => {
    let errorContainer = document.querySelector('.error-container');
    if(errorContainer.innerHTML === '') {
      errorContainer.insertAdjacentHTML('afterbegin', '<p class="error">Please complete all required fields!</p>')
    }
  }

  logoutUser = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      type: ''
    })
    this.props.history.replace('/')
  }

  routeToListings = (event) => {
    event.preventDefault();
    this.props.history.push(`/areas/${event.target.id}/listings/`)
    this.setState({
      currentArea: event.target.parentElement.children[0].textContent
    })
  }

  updateFavorites = (event) => {
    let favoriteListings = [...this.state.favorites];
    let currentId = event.target.id;

    if(!favoriteListings.includes(currentId)){
      favoriteListings.push(currentId);
      document.getElementById(currentId).classList.add('favorited')
    } else {
      document.getElementById(currentId).classList.remove('favorited')
      favoriteListings = favoriteListings.filter(listing => {
        return listing !== currentId;
      })
    }
    this.setState({
      favorites: favoriteListings,
    })

    this.toggleFavoriteMessage(currentId);
  }

  toggleFavoriteMessage = (currentId) => {
    let message = document.querySelector('.favorites-message');
    let button = document.getElementById(currentId);

    if(message && button.classList.contains('favorited')){
      message.classList.remove('hidden')
    } else if (message) {
      message.classList.add('hidden')
    }
  }

  routeToFavorites = (event) => {
    event.preventDefault();
    this.props.history.push(`/favorites`)
  }

  getFavoriteCount = () => {
    return this.state.favorites.length
  }

  render() {
    let headerText = [
      <h3 className='header-description'>WELCOME, {this.state.name.toUpperCase()}!</h3>,
      <p className='travel-type'>TRAVEL TYPE: {this.state.type.toUpperCase()}</p>
    ]

    let areaText = `${(this.state.currentArea).toUpperCase()} LISTINGS: `

    let listingText = `LISTING:`

    let favoriteText = `FAVORITES:`

    return (
      <main>
        <Route path='/' exact>
          <LoginForm
            change={this.change}
            loginUser={this.loginUser}
            formData={this.state}
          />
        </Route>

        <Route path='/areas' exact>
          <Header
            headerInfo={headerText}
            logoutUser={this.logoutUser}
            displayFavorites={this.routeToFavorites}
            favoriteCount={this.getFavoriteCount()}
          />
          <Areas
            name={this.state.name}
            type={this.state.type}
            logoutUser={this.logoutUser}
            routeToListings={this.routeToListings}
          />
        </Route>

        <Route path='/areas/:area_id/listings' exact>
          <Header
            headerInfo={areaText}
            logoutUser={this.logoutUser}
            displayFavorites={this.routeToFavorites}
            favoriteCount={this.getFavoriteCount()}
          />
          <Listings />
        </Route>

        <Route path='/areas/:area_id/listings/:listing_id'>
        <Header
          headerInfo={listingText}
          logoutUser={this.logoutUser}
          displayFavorites={this.routeToFavorites}
          favoriteCount={this.getFavoriteCount()}
        />
        <IndividualListing
          updateFavorites={this.updateFavorites}
          />
        </Route>

        <Route path='/favorites'>
          <Header
            headerInfo={favoriteText}
            logoutUser={this.logoutUser}
            displayFavorites={this.routeToFavorites}
            favoriteCount={this.getFavoriteCount()}
          />
          <Favorites
            favoriteListings={this.state.favorites}
            updateFavorites={this.updateFavorites}/>
        </Route>


      </main>
    )
  }
}

export default withRouter(App);
