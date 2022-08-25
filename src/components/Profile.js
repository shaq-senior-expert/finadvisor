import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const Profile = ({ user }) => {
  //   debugger;
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar src={user.avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {`${user.first_name} ${user.last_name}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.age || ""} ${user.gender || ""}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            <Moment format="D MMM YYYY hh:mm A">{new Date()}</Moment>
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
