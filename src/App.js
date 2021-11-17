import { Component } from "react";
import { nanoid } from 'nanoid'

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  inputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})

  }

  formSubmit = (event) => {
    if (this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === event.name.toLowerCase()
     })){
       return alert(`${event.name} is already in cotacts`)
     }

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

  deleteContact = (event) => {
    const contDelId = this.state.contacts.map(contact => {
      return contact.id
    }).indexOf(event.target.parentElement.id)
    const contacts = [...this.state.contacts]
    contacts.splice(contDelId, 1)
    this.setState({contacts})
  }

  render(){
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.formSubmit}/>
        <h2>Contacts</h2>
        <Filter onChange={this.inputChange} value = {this.state.filter}/>
        <ContactList contacts = {this.filterContacts()} onClick = {this.deleteContact} />
      </>
    )
  }
}

export default App;
