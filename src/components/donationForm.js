import React from "react"
import {
  Grid,
  Select,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core"

const DonationForm = () => {
  const [value, setValue] = React.useState("oneTime")

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Grid container justify="center" alignItems="center">
      <FormControl>
        <Grid container>
          <Grid item style={{ padding: "1.1rem 0.9rem" }}>
            <Grid item>
              <TextField id="firstName" label="First Name" />
            </Grid>
            <Grid item>
              <TextField id="lastName" label="Last Name" />
            </Grid>
            {/* Address */}
            <Grid item>
              <TextField id="addressLine1" label="Address Line 1" />
            </Grid>
            <Grid item>
              <TextField id="addressLine2" label="Address Line 2" />
            </Grid>
            <Grid item>
              <TextField id="city" label="City" />
            </Grid>
            <Grid item>
              <TextField id="state" label="State" />
            </Grid>
            <Grid item>
              <TextField id="zipcode" label="Zipcode" />
            </Grid>
          </Grid>

          {/* Credit Card Form */}
          <Grid item style={{ padding: "1.1rem 0.9rem" }}>
            <Grid item>
              <TextField id="cardNumber" label="Card Number" />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Select
                    native
                    inputProps={{ id: "expMonth", name: "Expiration Month" }}
                  >
                    <option value="" />
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </Select>
                </Grid>
                <Grid item style={{ paddingLeft: "0.7rem" }}>
                  <Select
                    native
                    inputProps={{ id: "expYear", name: "Expiration Year" }}
                  >
                    <option value="" />
                    <option value={1}>2019</option>
                    <option value={2}>2020</option>
                    <option value={3}>2021</option>
                    <option value={4}>2022</option>
                    <option value={5}>2023</option>
                    <option value={6}>2024</option>
                    <option value={7}>2025</option>
                    <option value={8}>2026</option>
                    <option value={9}>2027</option>
                    <option value={10}>2028</option>
                    <option value={11}>2029</option>
                    <option value={12}>2030</option>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField id="cardSecurityCode" label="CVV" />
            </Grid>
            <Grid item>
              <RadioGroup
                aria-label="donationOption"
                name="Donation Option"
                value={value}
                onChange={handleChange}
                row
                style={{ paddingTop: "1rem" }}
              >
                <FormControlLabel
                  value="oneTime"
                  control={<Radio color="primary" />}
                  label="One-time"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="monthly"
                  control={<Radio color="primary" />}
                  label="Monthly"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </Grid>
            <Grid item style={{ paddingTop: "0.2rem" }}>
              <TextField id="amount" label="Donation Amount" />
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Button
          style={{
            marginBottom: `1.3rem`,
          }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </FormControl>
    </Grid>
  )
}

export default DonationForm
