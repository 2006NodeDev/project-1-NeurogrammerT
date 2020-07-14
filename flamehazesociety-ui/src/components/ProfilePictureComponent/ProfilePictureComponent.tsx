import React, { FunctionComponent } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  xsmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: "auto",
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  xlarge: {
    width: theme.spacing(48),
    height: theme.spacing(48),
    margin: "auto",
    marginTop: theme.spacing(5)
  }
}));

export const ProfilePictureComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  return (
    <div><Avatar variant="circle" alt="Remy Sharp" src="https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg" className={classes.small} /></div>
  )
}