import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import '../../css/bulma.min.css';
import '../../css/harvest.css'

function AddEvent(props) {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         eventAddVisible: false,
    //         stateRegion: "AL",
    //         eventType: "Harvest",


    //     }

    //     this.handleClick = this.handleClick.bind(this)
    //     this.handleCancel = this.handleCancel.bind(this)

    // }
    // const loadInitialValues = () => {

    //     let initEvent = null
    //     console.log("loading initial values")
    //     console.log(props.targetEvent)
    //     if (props.targetEvent) {
    //         initEvent = {
    //             eventType: "Harvest",
    //             title: "Title of Event",
    //             description: "",
    //             address1: "",
    //             city: "",
    //             stateRegion: "",
    //             addressCode: "",
    //             email: ""
    //         }
    //     } else {
    //         initEvent = {
    //             eventType: "Harvest",
    //             title: "else title",
    //             description: "",
    //             address1: "",
    //             city: "",
    //             stateRegion: "",
    //             addressCode: "",
    //             email: ""
    //         }
    //     }

    //     return initEvent

    // }


    const initialValues = {
        eventType: "Harvest",
        title: "",
        description: "",
        address1: "",
        city: "",
        stateRegion: "",
        addressCode: "",
        email: ""
    }

    const validationSchema = Yup.object({
        eventType: Yup.string().required('Required!'),
        title: Yup.string().required('Required!'),
        description: Yup.string().required('Required!'),
        address1: Yup.string().required('Required!'),
        city: Yup.string().required('Required!'),
        stateRegion: Yup.string().required('Required!'),
        addressCode: Yup.string().required('Required!').length(5, "5 digits"),
        email: Yup.string().required('Required!').email("Invalid Email")
    })

    const onSubmit = async (values, submitProps) => {


        const formJSON = JSON.stringify(values)


        // axios.post('http://localhost:3001/event', { formJSON })
        //     .then((response) => {
        //         console.log(response)
        //     }, (error) => {
        //         console.log(error);
        //     })

        console.log("submit")
        console.log(formJSON)
        axios({
            method: 'post',
            url: 'http://localhost:3001/event',
            data: formJSON,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        }).then(() => {

            console.log("Submitted")
            console.log("SubmitProps", submitProps)
            submitProps.resetForm()

        })




    }
    //Update the state with the new form vaules.


    let isVisible = props.isVisible



    return (
        <div className="harvest-main-div tile is-ancestor">
            <div className="harvest-event-left-Wrap">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child havest-event-card">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            <Form id="eventAddForm" className="event-form">
                                <div>

                                    <label className="event-form-select">Event Type:</label><p>

                                        < Field name="eventType" className="event-form-select event-form-input search-bar-input-border" component="select" placeholder="Type">
                                            <option value="Harvest">Harvest</option>
                                            <option value="Service">Service</option>
                                            <option value="Foodbank">Food Bank</option>
                                        </Field >
                                    </p>
                                    <p><ErrorMessage name="eventType" className="input-error" /></p>


                                </div>
                                <div>

                                    <label className="event-form-select">Title:
                        <Field
                                            className="input event-form-input search-bar-input-border"
                                            type="text"
                                            name="title"
                                            placeholder="Brief description"
                                        />
                                    </label>
                                    <p><ErrorMessage name='title' className="input-error" /></p>


                                </div>
                                <div>
                                    <label className="event-form-select">Descirption:
                            <Field className="textarea input event-form-input search-bar-input-border" name="description" placeholder="Detailed Description" ></Field>
                                    </label>
                                    <p><ErrorMessage name="eventDescription" className="input-error" /></p>

                                </div>

                                <div>
                                    <label className="event-form-select">Address:
                            <Field
                                            className="input event-form-input search-bar-input-border"
                                            type="text" name="address1"
                                            placeholder="Street Address"
                                        />

                                    </label>
                                    <p><ErrorMessage name="address1" className="input-error" /></p>

                                </div>
                                <div>

                                    <label className="event-form-select">City:
                            <Field
                                            className="input event-form-input search-bar-input-border"
                                            type="text" name="city"
                                            placeholder="City"
                                        />
                                    </label>
                                    <p><ErrorMessage name="city" className="input-error" /></p>

                                </div>
                                <div >
                                    <label className="event-form-select" >State:
                            </label><p>
                                        < Field as="select" name="stateRegion" className="event-form-select event-form-input search-bar-input-border" placeholder="State" >
                                            <option className="event-form-select" value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </Field >
                                    </p>
                                    <p><ErrorMessage name="stateRegion" className="input-error" /></p>

                                </div>
                                <div >

                                    <label className="event-form-select">Zip Code
                            <Field
                                            className="input event-form-input search-bar-input-border"
                                            type="text"
                                            name="addressCode"
                                            placeholder="Zip Code"
                                        />
                                    </label>
                                    <p><ErrorMessage name="addressCode" className="input-error" /></p>

                                </div>
                                <div>
                                    <label className="event-form-select">Email:
                                    <Field
                                            className="input event-form-input search-bar-input-border"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                        />
                                    </label>
                                    <p><ErrorMessage name="email" className="input-error" /></p>



                                </div>
                                <div ><p>&nbsp;</p>
                                    <button className="search-bar-button search-bar-button-border">Submit</button>


                                    <button className="search-bar-button search-bar-button-border" >Cancel</button>

                                </div>

                                <p>&nbsp;</p>


                            </Form>
                        </Formik>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child ">
                    <div >
                        <p>Please make sure to add valid contact information.  Details will only be provided once a volunteer signs sup.</p>
                    </div>
                </article>
            </div>
        </div>




    )
}

export default AddEvent


