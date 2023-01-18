import { Box, Button, MenuItem, Select} from "@mui/material";
import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [jobSearch, setJobSearch] = useState({
    type: "Full time",
    location: "Remote",
  });

  const handleChange = (e) => {
    e.persist = () => {};
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    await props.fetchJobsCustom(jobSearch);
  };

  return (
    <Box
      mt={-5}
      className="flex mb-4 justify-center md:gap-10 gap-4 py-4  w-[90vw] items-center h-[80px]  shadow-md bg-white rounded-md"
    >
      <Select
        onChange={handleChange}
        className="w-[28%] bg-[#fafafa] rounded-lg flex items-center h-[42px]"
        labelId="demo-simple-select-filled-label"
        name="type"
        value={jobSearch.type}
        id="demo-simple-select-filled"
      >
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select
        onChange={handleChange}
        className="w-[28%] rounded-lg flex items-center h-[42px] bg-[#fafafa]"
        labelId="demo-simple-select-filled-label"
        name="location"
        value={jobSearch.location}
        id="demo-simple-select-filled"
      >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>
      <Button
        className="w-[28%] h-10 "
        variant="contained"
        color="primary"
        disableElevation
        onClick={search}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
