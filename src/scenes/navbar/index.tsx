import { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from "@/components/FlexBetween";
import PixIcon from '@mui/icons-material/Pix';

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween 
        mb="'0.25rem" 
        p="0.5rem 0rem" 
        color={palette.grey[300]}
    >
        {/* Left Side */}
        <FlexBetween gap="0.75rem">
            <PixIcon sx={{ fontSize: "28px", color:"white"}} />
            <Typography variant='h4' fontSize="16px">Finanseer</Typography>
        </FlexBetween>

        {/* Right side */}
        
    </FlexBetween>
  )
}

export default Navbar;