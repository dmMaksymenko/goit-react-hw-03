import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name}
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
