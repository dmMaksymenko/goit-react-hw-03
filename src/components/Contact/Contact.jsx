const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <div>
        <b>
          <h2>{contact.name}</h2>
        </b>
        <p>{contact.phone}</p>
      </div>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
