import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function SearchOrganization(props) {

    const validationSchema = Yup.object({
        organizationSearch: Yup.string().required('Required!')
    })

    const onSubmit = async (values) => {


        let baseURL = 'http://localhost:3001/organization/search/' + values.organizationSearch

        console.log(baseURL)
        let searchResults = await axios.get(baseURL)
            .catch((e) => {
                console.log(e)
            })

        //If search criteria is provided then search


        console.log(searchResults.data.results)

        props.searchCallback(searchResults.data.results)

    }


    const initialValues = {
        organizationSearch: 'Bellingham Wa'
    }




    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            <Form>

                <div className="search-bar">
                    <Field as="select" className="search-bar-select-gn"
                        name="organizationType">
                        <option value="All">All</option>
                        <option value="Harvest">Harvest</option>
                        <option value="Service">Service</option>
                        <option value="Foodbank">Food Bank</option>
                    </Field>

                    <Field className="search-bar-input search-bar-input-border"
                        name="organizationSearch"
                        type="text"
                        placeholder="Zip or City,State"
                    />


                    <button className="search-bar-button search-bar-button-border" type="submit" >Search</button>
                    <p><ErrorMessage name='organizationSearch' /></p>
                </div>

            </Form>
        </Formik >


    )
}

export default SearchOrganization