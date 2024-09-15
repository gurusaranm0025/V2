import React from 'react'
import { contactData } from './ContactData'
import ContactItem from './ContactItem'
import './Contact.css'

function Conatct() {
    return (
        <div className='contact-grid'>
            {
                contactData.map((contact, i) => {
                    return <ContactItem contact={contact} key={i} />
                })
            }
        </div>
    )
}

export default Conatct