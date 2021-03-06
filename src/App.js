import { Formik, Form, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Radio from "./components/Radio";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required!";
  } else if (values.name.length < 5) {
    errors.name = "Name is too short!";
  }

  if (!values.lastname) {
    errors.lastname = "Required!";
  } else if (values.lastname.length < 5) {
    errors.lastname = "Lastname is too short!";
  }

  if (!values.radio) {
    errors.radio = "Requerido!"
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        level: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="name" />
        <br />
        <TextInput name="lastname" label="Lastname" />
        <br />
        <TextInput name="email" label="Email" />
        <Select label="Level" name="level">
          <option value="">Select your level</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </Select>
        <Checkbox name="accept">Accept therms and conditions</Checkbox>
        <Radio name="radio" value="opt1" label="option 1" />
        <Radio name="radio" value="opt2" label="option 2" />
        <Radio name="radio" value="opt3" label="option 3" />
        <ErrorMessage name="radio" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
