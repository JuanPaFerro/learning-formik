import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";

const validate = (values) => {
  const errors = {};

  if (!values.nickname) {
    errors.nickname = "Required!";
  } else if (values.nickname.length < 5) {
    errors.nickname = "Nickname is too short!";
  }

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

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        nickname: "",
        accept: true,
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="nickname" label="NickName" />
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <br />
        <label>LastName</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />
        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <Checkbox name="accept">Accept therms and conditions</Checkbox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
