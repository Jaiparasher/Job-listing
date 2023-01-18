import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { format } from "date-fns";

const ViewJobModal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center" className="text-[#325fa8] ">
          {props.job.title} @ {props.job.companyName}
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Posted On:</p>
            <Typography varient="caption">
              {props.job.postedOn &&
                format(props.job.postedOn, "dd/MM/yyyy HH:MM")}
            </Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Job Type:</p>
            <Typography varient="body2">{props.job.type}</Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Job Location:</p>
            <Typography varient="body2">{props.job.location}</Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Job Type:</p>
            <Typography varient="body2">{props.job.type}</Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Job description:</p>
            <Typography varient="body2">{props.job.description}</Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Company name:</p>
            <Typography varient="body2">{props.job.companyName}</Typography>
          </Box>
          <Box className="m-1" display="flex">
          <p className="font-medium mr-[3px]  mb-1">Company Website:</p>
            <Typography varient="body2">{props.job.companyUrl}</Typography>
          </Box>
          <Box className="m-1">
          <p className="font-medium mr-[3px]  mb-1">Skills:</p>
            <Grid container alignItems="center">
              {props.job.skills &&
                props.job.skills.map((skill) => (
                  <Grid item key={skill} mx={0.5} className="bg-black rounded-xl text-white px-2 font-normal py-1">
                    {skill}
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions className="w-full px-5">
        <Button variant="outlined">Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewJobModal;
