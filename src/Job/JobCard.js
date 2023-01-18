import { Box, Grid } from '@mui/material'
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'
import React from 'react'
import './JobCard.css'


const JobCard = (props) => {
  return (
    <Box className='wrapper p-2 w-[90vw] rounded-md font-medium '>
        <Grid container alignItems="center">
            <Grid item xs>
                <h3>{props.title}</h3>
                <span className='flex'><h3 className='text-black'>Company:</h3><h3 className='text-[#3c5c91] ml-1'>{props.companyName}</h3></span>
            </Grid>
            <Grid item container xs>
              {props.skills.map((skill)=>(
                <Grid m={0.5} className="bg-black rounded-xl text-white px-2 font-normal py-1" key={skill} item>{skill}</Grid>
              ))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
              <Grid item>
            <p className="font-normal">{
            (differenceInHours(Date.now(),props.postedOn)>24 && `${differenceInDays(Date.now(),props.postedOn)} days ago`)||(differenceInMinutes(Date.now(),props.postedOn)>60?(`${differenceInHours(Date.now(),props.postedOn)} hrs ago`): `${differenceInMinutes(Date.now(),props.postedOn)} min ago `
              )} | {props.type} | {props.location}</p>
              </Grid>
              <Grid item mt={1}>
                <button onClick = {props.open} className='border border-black rounded-2xl px-4 text-sm font-medium py-[5px] hover:bg-gray-50'>Check</button>
              </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default JobCard
