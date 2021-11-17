import { Component } from "react";
import s from './ContactForm.module.css'


export default class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }

    inputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }
    
      formSubmit = (event) => {
        event.preventDefault()
        const {name, number} = this.state
        this.props.onSubmit({name, number})
        this.setState({
            name: '',
            number: ''
        })
      }

    render(){
        return (
        <form onSubmit = {this.formSubmit} className ={s.form}>
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
              className = {s.input}
            />
            <h3>Number</h3>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange = {this.inputChange}
              value = {this.state.number}
              className = {s.input}
            />
          </label>
          <button type = "submit" className = {s.button}>Add contact</button>
        </form> 
        )
    }
}