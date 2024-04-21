import css from "./Contact.module.css";
const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.box}>
      <div>
        <b>
          <h2>{contact.name}</h2>
        </b>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
