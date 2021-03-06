import React from "react"
import { useFormik } from "formik"





function Login() {
  const initialValues = {
    username: "",
    password: ""
  }
  const onSubmit = (values) => {
    console.log("Submit clicked")
  }
  const validate = (values) => {
    console.log ("Validation")
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  


  return <div>
    <h2>Login Page</h2>
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder="Username"
        />
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder="Password"
        />
        <button type='submit' disabled={!formik.isValid}>Submit</button>
    </form>
  </div>;

}
export default Login;
