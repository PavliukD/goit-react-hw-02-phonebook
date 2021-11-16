import { Component } from "react";
import { nanoid } from 'nanoid'

class App extends Component{
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  inputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.filter.length)
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    })
    this.setState({
      name: '',
      number: ''})
    console.log(this.state.contacts)
  }

  filter = () => {
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
        <h2>Phonebook</h2>
        <form onSubmit = {this.formSubmit}>
          <label>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange = {this.inputChange}
              value = {this.state.name}
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange = {this.inputChange}
              value = {this.state.number}
            />
          </label>
          <button type = "submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
          <input
                type="text"
                name="filter"
                onChange = {this.inputChange}
                value = {this.state.filter}
            />
          <ul>
            {this.filter().map(contact => {
              return (<li key = {contact.id}>{contact.name}: {contact.number}</li>)
            })}
          </ul>
      </>
    )
  }
}

export default App;
