import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '../../models/contacts.class';

const ContactosComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.nombre }
            </h2>
            <h3>
                Apellido: { task.apellido }
            </h3>
            <h4>
                Email: { task.email }
            </h4>
            <h5>
                Estado: { task.conectado? 'Contacto En Línea' : 'Contacto No Disponible' }
            </h5>
        </div>
    );
};


ContactosComponent.propTypes = {
    task: PropTypes.instanceOf(Contacts)
};


export default ContactosComponent;
