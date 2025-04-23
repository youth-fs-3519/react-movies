import { Field, Form, Formik } from "formik";

type FormValues = {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const handleSubmit = (values: FormValues) => {
        fetch('http://localhost:8000/auth/register', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    return (
        <Formik
            initialValues={{
                name: 'Pamplona',
                email: '',
                password: ''
            }}
            onSubmit={handleSubmit}
        >
            <Form>     
                <div className="mb-3">
                    <label 
                        htmlFor="name" 
                        className="form-label"
                    >
                        Nome
                    </label>
                    <Field 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                    />
                </div>

                <div className="mb-3">
                    <label 
                        htmlFor="email" 
                        className="form-label"
                    >
                        Email
                    </label>
                    <Field 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                    />
                </div>

                <div className="mb-3">
                    <label 
                        htmlFor="password" 
                        className="form-label"
                    >
                        Senha
                    </label>
                    <Field 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                    />
                </div>

                <button className="btn btn-primary" type="submit">Enviar</button>
            </Form>
        </Formik>
    )
}

export default Register