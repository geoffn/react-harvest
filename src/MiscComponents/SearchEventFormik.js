import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function SearchEventForm(props) {

    const validationSchema = Yup.object({
        eventSearch: Yup.string().required('Required!')
    })

    const onSubmit = async (values) => {

        let baseURL = 'http://localhost:3001/event/search/' + values.eventSearch

        //If search criteria is provided then search


        console.log("Form Data:" + values.eventSearch)
        let results = await axios.get(baseURL)
            .catch((e) => {
                console.log(e)
            })


        console.log(results.data.results)

        props.searchCallback(results.data.results)

    }


    const initialValues = {
        eventSearch: 'Bellingham Wa'
    }




    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            <Form>

                <div className="search-bar">
                    <Field className="search-bar-input search-bar-input-border"
                        name="eventSearch"
                        type="text"
                        placeholder="Zip or City,State"
                    />


                    <button className="search-bar-button search-bar-button-border" type="submit" >Event Search</button>
                    <p><ErrorMessage name='eventSearch' /></p>
                </div>

            </Form>
        </Formik >


    )
}

export default SearchEventForm