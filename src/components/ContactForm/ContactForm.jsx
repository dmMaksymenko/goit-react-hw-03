import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const MAX_CHAR_NAME_LENGTH = 50;
const MIN_CHAR_NAME_LENGTH = 3;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CHAR_NAME_LENGTH,
      `Name must be at least ${MIN_CHAR_NAME_LENGTH} characters`
    )
    .max(
      MAX_CHAR_NAME_LENGTH,
      `Name must be at most ${MAX_CHAR_NAME_LENGTH} characters`
    )
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});
const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label>
            <span>Name</span>
            <br />
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            <span>Number</span>
            <br />
            <Field type="number" name="number"></Field>
            <ErrorMessage name="number" component="p" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
