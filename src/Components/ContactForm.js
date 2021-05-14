import React from 'react';
import ContactList from "./ContactList";
import ContactInput from "./ContactList";


class ContactForm extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <ContactList />
        <ContactInput />
      </div>
     );
  }
}
 
export default ContactForm;