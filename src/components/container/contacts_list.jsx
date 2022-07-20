import React from 'react';
import { Contacts } from '../../models/contacts.class';
import ContactosComponent from '../pure/contactos';

const ContactsList = () => {
    //colocamos los datos por default
    const defaultcontacts = new Contacts('Carlos','Casas', 'xxx@gmail.com', false);
    
    return (
        <div>
            <div>
                <h1>Contacto:</h1>
            </div>
             {/* TODO: Aplicar un For/Map para renderizar un a lista*/}
             <ContactosComponent task={defaultcontacts}></ContactosComponent>
        </div>
    );
}

export default ContactsList;
