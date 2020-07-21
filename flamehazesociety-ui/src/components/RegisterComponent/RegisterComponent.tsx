import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { flamehazesocietyCreateNewUser } from '../../remote/flamehazesociety-api/create-new-user';
import { User } from '../../models/User';
import { toast } from 'react-toastify'

export const RegisterComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  const [username, changeUsername] = useState('')
  const [password, changePassword,] = useState('')
  let [confirmPassword, changeConfirmPassword] = useState('')
  const [firstName, changeFirstname] = useState('')
  const [lastName, changeLastname] = useState('')
  const [email, changeEmail] = useState('')
  let [image, changeImage] = useState(undefined)

  const updateUsername = (event: any) => {
    event.preventDefault()

    changeUsername(event.currentTarget.value)
  }

  const updatePassword = (event: any) => {
    event.preventDefault()

    changePassword(event.currentTarget.value)
  }

  const updateConfirmPassword = (e: any) => {
    e.preventDefault()
    changeConfirmPassword(e.currentTarget.value)
  }

  const updateFirstname = (event: any) => {
    event.preventDefault()

    changeFirstname(event.currentTarget.value)
  }

  const updateLastname = (event: any) => {
    event.preventDefault()

    changeLastname(event.currentTarget.value)
  }

  const updateEmail = (event: any) => {
    event.preventDefault()

    changeEmail(event.currentTarget.value)
  }


  const updateImage = (e: any) => {
    let file: File = e.currentTarget.files[0]
    let reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      console.log(reader.result)
      changeImage(reader.result)
    }
  }

  const registerSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Password Do Not Match', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      })
    }

    let newUser: User = {
      userId: 0,
      username,
      password,
      firstName,
      lastName,
      email,
      role: { role: "Employee", roleId: 3 },
      image
    }

    await flamehazesocietyCreateNewUser(newUser)

    props.history.push('/login')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
          </Typography>
        <form autoComplete="off" onSubmit={registerSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={updateFirstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={updateLastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={updateEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={updateUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={updatePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={updateConfirmPassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor='file'>Profile Pic</label>
              <input type='file' name='file' accept='image/*' onChange={updateImage} />
              <img alt="" src={image} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in.
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        flamehazesociety
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'red',
    color: 'black',
    fontFamily: 'Impact',
    fontSize: 16,
  },
}));
