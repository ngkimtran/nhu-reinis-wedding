import React, { useState } from "react";
import { send } from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Headline from "../components/Headline";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RSVP = () => {
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    attendance: "",
    guestNumber: "",
    message: "",
  });
  // 'service_rukbaok',
  // 'template_cofcv8r',
  // toSend,
  // '5V4b30ncVIHlwUDDD' //Public Key

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_hf9um2k",
      "template_k206bqv",
      toSend,
      "I3sG_8Mt3bApsJy9Y" //Public Key
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="rsvp-page">
      <Header />
      <Headline>You&#39;re invited</Headline>
      <p className="text-small">Kindly RSVP before June 01, 2023</p>

      <form onSubmit={onSubmit}>
        <table className="rsvp-form">
          <tbody>
            <tr>
              <th>Can you attend?</th>
              <td>
                <RadioGroup name="attendance" defaultValue="yes">
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        sx={{
                          "&, &.Mui-checked": {
                            color: "#fff",
                          },
                        }}
                      />
                    }
                    label="Will be there"
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        sx={{
                          "&, &.Mui-checked": {
                            color: "#fff",
                          },
                        }}
                      />
                    }
                    label="Will not be there"
                  />
                </RadioGroup>
              </td>
              <td></td>
            </tr>
            <tr>
              <th>Full name</th>
              <td>
                <TextField
                  label="First name"
                  name="firstName"
                  placeholder="John"
                  variant="standard"
                  inputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  value={toSend.firstName}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <TextField
                  label="Last name"
                  name="lastName"
                  placeholder="Doe"
                  variant="standard"
                  inputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  value={toSend.lastName}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Number of guests</th>
              <td>
                <TextField
                  type="number"
                  name="guestNumber"
                  variant="standard"
                  inputProps={{ style: { color: "#fff" } }}
                  value={toSend.guestNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Message to the Bride &#38; Groom</th>
              <td>
                <TextField
                  multiline
                  name="message"
                  variant="standard"
                  inputProps={{ style: { color: "#fff" } }}
                  value={toSend.message}
                  onChange={handleChange}
                  rows="3"
                />
              </td>
            </tr>
            <br />
            <button className="rsvp-button" type="submit">
              Submit
            </button>
          </tbody>
        </table>
      </form>
      <Footer />
    </div>
  );
};

export default RSVP;
