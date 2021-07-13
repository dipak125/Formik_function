import React from "react";
import { useFormik } from "formik";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        handleChange: e => {

        },
        onSubmit: values => {
            console.log("value is", values.name, values.email, values.password)
        },
        validate: values => {
            const { name, email, password } = values;
            let error = {};
            if (!name) {
                error.name = "name is required"
            }
            if (!email) {
                error.email = "email is required"
            }
            if (!password) {
                error.password = "password is required"
            }
            return error
        }
    })
    return (
        <div class="container">
            <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.name && formik.touched.name && <div style={{color:"red"}}>{formik.errors.name}</div>}

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password && <div style={{color:"red"}}>{formik.errors.password}</div>}
                    
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Form;