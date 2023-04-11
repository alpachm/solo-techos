import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container-contact grilla">
        <h2 className="subtitulo">Envíanos un email</h2>

        <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Número de contácto" />
          <input type="text" placeholder="Motivo" />
          <textarea
            name=""
            placeholder="Dejános un mensaje"
            cols="30"
            rows="7"
          ></textarea>
          <button>Envíar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
