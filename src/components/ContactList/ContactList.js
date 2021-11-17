import PropTypes from 'prop-types'
import s from './ContactList.module.css'

export default function ContactList({contacts, onClick}){
    return(
        <ul className = {s.list}>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id} id = {contact.id} className = {s.item}>
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick = {onClick} className = {s.button}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    onClick: PropTypes.func
}