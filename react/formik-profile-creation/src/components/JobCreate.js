import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import FormikObserver from 'formik-observer';
import { FormLabel } from 'react-bootstrap';

const JobCreate = () => {
    // states
    const [result, setResult] = useState('Start filling the form to see the JSON output here');

    //initial values
    const initialValues = {
        test_name: "",
        profile_name: ""
    };


    return (
        <>
            <div className='container'>
                <div className="py-3 text-center">
                    <h2>Initiate a SOX Test</h2>
                    <p className="lead">Fill out the form below to create a SOX Test
                    </p>
                </div>



                <div className="row mb-4">
                    <div className="col-sm-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-5">
                                    <div className="col-md-7 col-lg-8">
                                        <h4 className="mb-3">SOX Test Job Creation UI</h4>
                                        <Formik
                                            onSubmit={values => console.log(values)}
                                            initialValues={initialValues}
                                        >
                                            {props => (

                                                <Form className="whatever">

                                                    <div className="row mb-3 text-align-left">
                                                        <label htmlFor="test_name" className="col-sm-3 col-form-label text-end">Test Name</label>
                                                        <div className="col-sm-9">
                                                            <Field name="test_name" placeholder="test1" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3 align-items-center">
                                                        <label htmlFor="profile_name" className="col-sm-3 col-form-label text-end">Profile Name</label>
                                                        <div className="col-sm-9">
                                                            <Field name="profile_name" placeholder="profile1" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                    <FormikObserver
                                                        onChange={({ values }) => {
                                                            setResult(JSON.stringify(values, null, 2));
                                                        }

                                                        }
                                                    />
                                                </Form>

                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">JSON Result</h5>
                                <button className="btn btn-success">Copy Json</button>
                                <hr />
                                <pre id='result'>{result}</pre>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default JobCreate;