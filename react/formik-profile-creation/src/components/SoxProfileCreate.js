import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import FormikObserver from 'formik-observer';
import { FormLabel } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SoxProfileCreate = () => {

    // states
    const [result, setResult] = useState('Start filling the form to see the JSON output here');
    const [alertVisible, setAlertVisible] = useState(false);

    //initial values
    const initialValues = {
        name: "",
        description: "",
        ipv4_address: "",
        // use_ipv6: true,
        // slot: 0,
        email_addresses: [
            ""
        ],
        pipelines: [
            ""
        ],
        ddc_verifiers_email_list: [
            ""
        ],
        requests: [
            {
                data: "",
                url: "",
                method: "",
                protocol: "",
                request_count: '',
                cp_code: '',
                expected_response_code: '',
                // headers: {
                //     additionalProp1: "",
                //     additionalProp2: "",
                //     additionalProp3: ""
                // },
                object_size: "",
            },
        ]

    };


    return (
        <>
            <div className='container'>
                <div className="py-3 text-center">
                    <h2>Profile Creation Form</h2>
                    <p className="lead">Fill out the form below to create a SOX Profile
                    </p>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-5">
                                    <div className="col-sm-10">
                                        <h4 className="mb-3">Profile Creation UI</h4>
                                        <Formik
                                            onSubmit={values => console.log(values)}
                                            initialValues={initialValues}
                                        >
                                            {props => (

                                                <Form className="whatever">

                                                    {/* name */}
                                                    <div className="row mb-3 text-align-left">
                                                        <label htmlFor="name" className="col-sm-3 col-form-label text-end">Name</label>
                                                        <div className="col-sm-9">
                                                            <Field name="name" placeholder="profile name" className="form-control" />
                                                        </div>
                                                    </div>

                                                    {/* description */}
                                                    <div className="row mb-3 text-align-left">
                                                        <label htmlFor="description" className="col-sm-3 col-form-label text-end">Description</label>
                                                        <div className="col-sm-9">
                                                            <Field name="description" placeholder="description (max 100 characters)" className="form-control" ></Field>
                                                        </div>
                                                    </div>

                                                    {/* ipv4_address */}
                                                    <div className="row mb-3">
                                                        <label htmlFor="ipv4_address" className="col-sm-3 col-form-label text-end">IPV4 Address</label>
                                                        <div className="col-sm-9">
                                                            <Field name="ipv4_address" placeholder="192.168.0.0" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <FieldArray name="email_addresses">
                                                        {(fieldArrayProps) => {
                                                            console.log('fieldArrayProps', fieldArrayProps);
                                                            const { push, remove, form } = fieldArrayProps
                                                            const { values } = form
                                                            const { email_addresses } = values
                                                            return (
                                                                <div>
                                                                    <div className="card my-3">
                                                                        <div className="card-body">
                                                                            <button type="button" className="btn btn-outline-primary me-2 mb-2" onClick={() => push('')}>Add</button>
                                                                            <label htmlFor="email_addresses" className="col-sm-4 col-form-label">Email Addresses</label>
                                                                            {
                                                                                email_addresses.map((email, index) => (
                                                                                    <div key={index}>
                                                                                        <div className="input-group mb-2">
                                                                                            <span className="col-sm-2 input-group-text text-end" >Email {index + 1}</span>
                                                                                            <Field name={`email_addresses[${index}]`} type="email" placeholder="abc@akamai.com" className="form-control" />
                                                                                            <div className="input-group-append">
                                                                                                {
                                                                                                    index > 0 ? <button type="button" className="btn btn-outline-danger" onClick={() => remove(index)}>Del</button> : <button type="button" className="btn btn-outline-danger disabled" onClick={() => remove(index)}>Del</button>
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        }
                                                    </FieldArray>

                                                    <FieldArray name="pipelines">
                                                        {(fieldArrayProps) => {
                                                            console.log('fieldArrayProps', fieldArrayProps);
                                                            const { push, remove, form } = fieldArrayProps
                                                            const { values } = form
                                                            const { pipelines } = values
                                                            return (
                                                                <div>
                                                                    <div className="card my-3">
                                                                        <div className="card-body">
                                                                            <button type="button" className="btn btn-outline-primary me-2 mb-2" onClick={() => push('')}>Add</button>
                                                                            <label htmlFor="pipelines" className="col-sm-4 col-form-label">Pipelines</label>
                                                                            {
                                                                                pipelines.map((pipelines, index) => (
                                                                                    <div key={index}>
                                                                                        <div className="input-group mb-2">
                                                                                            <span className="col-sm-2 input-group-text text-end" >Pipeline {index + 1}</span>
                                                                                            <Field name={`pipelines[${index}]`} type="text" placeholder="pipeline01" className="form-control" />
                                                                                            <div className="input-group-append">
                                                                                                {
                                                                                                    index > 0 ? <button type="button" className="btn btn-outline-danger" onClick={() => remove(index)}>Del</button> : <button type="button" className="btn btn-outline-danger disabled" onClick={() => remove(index)}>Del</button>
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        }
                                                    </FieldArray>

                                                    <FieldArray name="ddc_verifiers_email_list">
                                                        {(fieldArrayProps) => {
                                                            console.log('fieldArrayProps', fieldArrayProps);
                                                            const { push, remove, form } = fieldArrayProps
                                                            const { values } = form
                                                            const { ddc_verifiers_email_list } = values
                                                            return (
                                                                <div>
                                                                    <div className="card my-3">
                                                                        <div className="card-body">
                                                                            <button type="button" className="btn btn-outline-primary me-2 mb-2" onClick={() => push('')}>Add</button>
                                                                            <label htmlFor="ddc_verifiers_email_list" className="col-sm-4 col-form-label">DDC Verifiers Email List</label>
                                                                            {
                                                                                ddc_verifiers_email_list.map((email, index) => (
                                                                                    <div key={index}>
                                                                                        <div className="input-group mb-2">
                                                                                            <span className="col-sm-2 input-group-text text-end" >Email {index + 1}</span>
                                                                                            <Field name={`ddc_verifiers_email_list[${index}]`} type="text" placeholder="xyz@akamai.com" className="form-control" />
                                                                                            <div className="input-group-append">
                                                                                                {
                                                                                                    <button type="button" className="btn btn-outline-danger" onClick={() => remove(index)}>Del</button>
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        }
                                                    </FieldArray>


                                                    <FieldArray name="requests">
                                                        {(fieldArrayProps) => {
                                                            console.log('fieldArrayProps', fieldArrayProps);
                                                            const { push, remove, form } = fieldArrayProps
                                                            const { values } = form
                                                            const { requests } = values
                                                            return (
                                                                <div>
                                                                    <h4>Requests</h4>
                                                                    {
                                                                        requests.map((requests, index) => (

                                                                            <div className="card my-3">
                                                                                <div className="card-body bg-light" key={index}>
                                                                                    <label className="form-label">Request {index + 1}</label>
                                                                                    <button type="button" className="btn btn-outline-primary ms-2 mb-2"
                                                                                        onClick={() => push({
                                                                                            data: "",
                                                                                            url: "",
                                                                                            method: "",
                                                                                            protocol: "",
                                                                                            request_count: '',
                                                                                            cp_code: '',
                                                                                            expected_response_code: '',
                                                                                            object_size: "",
                                                                                        })}>Add</button>
                                                                                    {
                                                                                        index > 0 ? <button type="button" className="btn btn-outline-danger ms-2 mb-2" onClick={() => remove(index)}>Del</button> : <button type="button" className="btn btn-outline-danger ms-2 mb-2 disabled" onClick={() => remove(index)}>Del</button>
                                                                                    }
                                                                                    <div className="col">

                                                                                        {/* data */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.data]`} className="col-sm-3 col-form-label text-end">Data</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.data]`} type="text" placeholder="100MB" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Url */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.url]`} className="col-sm-3 col-form-label text-end">Url</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.url]`} type="text" placeholder="www.akamai.com" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Method */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.method]`} className="col-sm-3 col-form-label text-end">Method</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.method]`} type="text" placeholder="GET, POST" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Protocol */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.protocol]`} className="col-sm-3 col-form-label text-end">Protocol</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.protocol]`} type="text" placeholder="HTTPS" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Request Count */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.request_count]`} className="col-sm-3 col-form-label text-end">Request Count</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.request_count]`} type="text" placeholder="2, 3, 5, 7, 11" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* CP Code */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.cp_code]`} className="col-sm-3 col-form-label text-end">CP Code</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.cp_code]`} type="text" placeholder="abc123" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Expected Response Code */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.expected_response_code]`} className="col-sm-3 col-form-label text-end">Expected Response Code</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.expected_response_code]`} type="text" placeholder="200" className="form-control" />
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Object Size */}
                                                                                        <div className="row mb-3">
                                                                                            <label htmlFor={`requests[${index}.object_size]`} className="col-sm-3 col-form-label text-end">Object Size</label>
                                                                                            <div className="col-sm-9">
                                                                                                <Field name={`requests[${index}.object_size]`} type="text" placeholder="2" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                        }
                                                    </FieldArray>

                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                    <FormikObserver
                                                        onChange={({ values }) => {

                                                            let word = values;
                                                            // showing keys which have values
                                                            Object.keys(word).forEach(key => {
                                                                if (word[key] === '') {
                                                                    delete word[key];
                                                                }
                                                            });

                                                            // sorting the object based on keys
                                                            let res = Object.keys(word)
                                                                .sort().reduce(function (Obj, key) {
                                                                    Obj[key] = word[key];
                                                                    return Obj;
                                                                }, {});
                                                            setResult(JSON.stringify(word, null, 2));
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
                                <h5 className="card-title">Profile actions</h5>
                                <CopyToClipboard text={result}>
                                    <button className="btn btn-success">Copy Json</button>
                                </CopyToClipboard>
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

export default SoxProfileCreate;