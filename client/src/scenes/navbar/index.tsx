import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Box, Typography, useTheme} from "@mui/material"
import FlexBetween from '@/components/FlexBetween';

type Props = {}

const NavBar = (props: Props) => {
    const {palette} = useTheme();

  return (
    <FlexBetween mb="0.25rem" p="0.5 rem 0rem" color={palette.grey[300]}>
        DashBoard and Predictions
    </FlexBetween>
  )
}

export default NavBar;