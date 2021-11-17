import { Component } from "react";
import { nanoid } from 'nanoid'

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }

  inputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})

  }

  formSubmit = (event) => {
    this.setState(prev => {
        return({
          contacts: prev.contacts.concat({
            id: nanoid(),
            name: event.name,
            number: event.number
          })
        }
        )
    })
  }

  filterContacts = () => {
    if (this.state.filter.length === 0){
      return this.state.contacts
    }
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  render(){
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.formSubmit}/>
        <h2>Contacts</h2>
        <Filter onChange={this.inputChange} value = {this.state.filter}/>
        <ContactList contacts = {this.filterContacts()}/>
      </>
    )
  }
}

export default App;
