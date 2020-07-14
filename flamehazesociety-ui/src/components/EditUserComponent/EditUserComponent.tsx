import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { User } from '../../models/User'
import { RouteComponentProps, useParams } from 'react-router'
import { flamehazesocietyEditUser } from '../../remote/flamehazesociety-api/edit-user'
import { Grid, makeStyles, Container } from '@material-ui/core'

interface IUserEditProps extends RouteComponentProps {
    user: User
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    grid: {
        padding: theme.spacing(5),
        margin: 'auto',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        flexWrap: 'wrap',

    },
    fixedHeight: {
        height: 600,
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

export const EditUserComponent: FunctionComponent<IUserEditProps> = (props) => {

    const classes = useStyles();

    const { userId } = useParams()
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    const [firstname, changeFirstname] = useState('')
    const [lastname, changeLastname] = useState('')
    const [email, changeEmail] = useState('')

    const updateUsername = (event: any) => {
        event.preventDefault()

        changeUsername(event.currentTarget.value)
    }

    const updatePassword = (event: any) => {
        event.preventDefault()

        changePassword(event.currentTarget.value)
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

    const editSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await flamehazesocietyEditUser(userId, username, password, firstname, lastname, email)

        props.history.push(`/profile/${userId}`)
    }
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <form className={classes.form} autoComplete="off" onSubmit={editSubmit}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={12} lg={6} className={classes.grid}>
                            <TextField id="username" label="Username" value={username} onChange={updateUsername} />
                            <TextField id="password" type='password' label="Password" value={password} onChange={updatePassword} />
                            <TextField id="firstname" label="First Name" value={firstname} onChange={updateFirstname} />
                            <TextField id="lastname" label="Last Name" value={lastname} onChange={updateLastname} />
                            <TextField id="email" type='email' label="Email" value={email} onChange={updateEmail} />
                            <Button className={classes.submit} type='submit' variant="contained" color="primary">Update</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}