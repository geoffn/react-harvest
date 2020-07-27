import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class EventAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            eventAddVisible: false,
            title: "",
            description: "",
            address1: "",
            city: "",
            stateRegion: "",
            addressCode: null,
            email: ""

        }

        this.handleClick = this.handleClick.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

    }

    onSubmit = (e) => {
        e.preventDefault()

        const formJSON = JSON.stringify(this.state)

        // axios.post('http://localhost:3001/event', { formJSON })
        //     .then((response) => {
        //         console.log(response)
        //     }, (error) => {
        //         console.log(error);
        //     })

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
        }).then(() => this.setState(() => ({
            submitCompleted: true
        })))


    }
    //Update the state with the new form vaules.
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        //console.log(e.target.name + " " + e.target.value)
    }

    //Show the new event form
    handleClick() {
        this.setState(state => ({
            eventAddVisible: true
        }))
    }
    //hide the new event form
    handleCancel() {
        this.setState(state => ({
            eventAddVisible: false
        }))
    }


    render() {

        if (this.state.submitCompleted === true) {
            window.location.reload(false)
        }

        return (
            <div>
                {!this.state.eventAddVisible && (<div className="navbar-end">

                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" onClick={this.handleClick} >
                                <strong>New Event</strong>
                            </a>
                        </div>
                    </div>
                </div>)}
                {
                    this.state.eventAddVisible && (<div className="content" id="addEventDiv" >
                        <form id="eventAddForm">
                            <div className="field">
                                <div className="control">
                                    <label>Title:
                            <input className="input is-primary" type="text" name="title" placeholder="Brief description" onChange={this.onChange}></input>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label>Descirption:
                            <textarea className="textarea" name="description" placeholder="Detailed Description" onChange={this.onChange}></textarea>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label>Address:
                            <input className="input is-primary" type="text" name="address1" placeholder="Street Address" onChange={this.onChange}></input>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label>City:
                            <input className="input is-primary" type="text" name="city" placeholder="City" onChange={this.onChange}></input>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="select">
                                    <label>State:
                            </label><p>
                                        < select name="stateRegion" className="select" onChange={this.onChange}>
                                            <option value="AL">Alabama</option>
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
                                        </select >
                                    </p>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">

                                    <label>Zip Code
                            <input className="input is-primary" type="text" name="addressCode" placeholder="Zip Code" onChange={this.onChange}></input>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label>Email:
                                    <input className="input" type="email" placeholder="Email" name="email" onChange={this.onChange}></input>
                                    </label>


                                </div>
                            </div>
                            <div className="buttons">
                                <a className="button is-primary" onClick={this.onSubmit} >
                                    <strong>Submit</strong>
                                </a>
                            </div>
                            <div className="buttons">
                                <a className="button is-primary" onClick={this.handleCancel} >
                                    <strong>Cancel</strong>
                                </a>
                            </div>

                            <p>&nbsp;</p>


                        </form>
                    </ div >)
                }
            </div >
        )



    }
}

export default EventAdd


