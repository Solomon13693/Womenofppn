import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Alert from  "../../components/Alert"
import Error from '../../components/Error';

import {
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

function JoinForm() {

    const [show, setShow] = useState(false)
    const [view, setView] = useState(false)

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Womenofppn', 'JoinForm', form.current, 'user_qG6qOSvfywjXLKyitIyUh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
            e.target.reset()
            setView(true)
            setShow(false)
            setTimeout(() => {
              setView(false)
            }, 3000);
          });
          e.target.reset()
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 3000);
        }

        

    return (
        <div>

          {show && <Alert/> }
          {view && <Error/> }
       
          <form ref={form} onSubmit={sendEmail}>

            <div className="form-row">
                <FormGroup className="col-md-6">
                    <Label for="">First Name</Label>
                    <Input type="text" name="user_fname"  id="" placeholder="First Name" required />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label for="">Last Name</Label>
                    <Input type="text"  name="user_lname" placeholder="Last Name" required/>
                </FormGroup>
            </div>

            <div className="form-row my-3">
                    <FormGroup className="col-md-6">
                    <Label for="">Email Address</Label>
                    <Input type="text" name="user_email"  id="" placeholder="Email Address" required/>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                    <Label for="">Phone Number</Label>
                    <Input type="tel"  name="user_phone" placeholder="Phone Number" required/>
                    </FormGroup>
            </div>
            
              <div className="form-row">

                <FormGroup className="col-md-6">
                    <Label for="input">Date of birth</Label>
                    <Input type="date"  name="user_date" required />
                </FormGroup>

                <FormGroup className="col-md-3">
                    <Label for="">Gender</Label>
                    <Input type="select" name="user_gender" id="" required >
                    <option>Male.</option>
                    <option>Female </option>
                    </Input>
                </FormGroup>

                <FormGroup className="col-md-3">
                    <Label for="">How did you hear about us?</Label>
                    <Input type="select" name="user_select" id="" required >
                    <option>Friends</option>
                    <option>Facebook </option>
                    <option>Facebook </option>
                    <option>Twitter </option>
                    <option>Instagram </option>
                    <option>Youtube </option>
                    <option>TV </option>
                    <option>Others </option>
                    </Input>
                </FormGroup>

            </div>

            <Button className="mt-3 w-100" type="submit" color="primary">Submit</Button>
          </form>

        </div>
    )
}

export default JoinForm
