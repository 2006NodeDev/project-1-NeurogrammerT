import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import { ProfilePictureComponent } from '../ProfilePictureComponent/ProfilePictureComponent'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            marginLeft: theme.spacing(15),
            color: "black",
            fontFamily: "fantasy"
        },
        bar: {
            backgroundColor: "red",
        },
    }),
);

export const NavBarComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let menuItems = []

    menuItems.push(<MenuItem key={'login'} onClick={handleClose}><Link to='/login'>Login</Link></MenuItem>)
    menuItems.push(<MenuItem key={'register'} onClick={handleClose}><Link to='/register'>Register</Link></MenuItem>)

    if(props.user){
        menuItems.push(<MenuItem key={'clicker'} onClick={handleClose}><Link to='/clicker'>Clicker</Link></MenuItem>,
        <MenuItem key={'first'} onClick={handleClose}><Link to='/first'>First</Link></MenuItem>,
        <MenuItem key={'title'} onClick={handleClose}><Link to='/title'>Title</Link></MenuItem>,
            <MenuItem key={'profile'} onClick={handleClose}><Link to={`/profile/${(props.user) ? props.user.userId : '0'}`}>My Profile</Link></MenuItem>,
            <MenuItem key={'edit'} onClick={handleClose}><Link to={`/edit/${props.user.userId}`}>Edit Profile</Link></MenuItem>)
    }
    if(props.user && props.user.role.role === 'Admin'){
        menuItems.push(<MenuItem key={'users'} onClick={handleClose}><Link to='/users'>All Users</Link></MenuItem>,)
    }
    return (
        (props.user)?
        <nav>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {menuItems}
                    </Menu>
                    <Typography variant="h4" className={classes.title}>
                        Flame Haze Society
                </Typography>
                    <ProfilePictureComponent/>
                </Toolbar>
            </AppBar>
            </nav>
            :
            <nav>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {menuItems}
                    </Menu>
                    <Typography variant="h4" className={classes.title}>
                        Flame Haze Society
                </Typography>
                    <Button><Link color="inherit" to='/login'>Login</Link></Button>
                    <Button><Link color="inherit" to='/register'>Register</Link></Button>
                </Toolbar>
            </AppBar>
            </nav>

    )
}