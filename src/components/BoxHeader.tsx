import React from 'react'
import FlexBetween from './FlexBetween'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material';

type Props = {
    // not required that is why we use ? 
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    sideText: string;
}

const BoxHeader = ({icon, title, subtitle, sideText}: Props) => {
    const { palette } = useTheme();
  return (
    < FlexBetween 
        color={palette.grey[400]}
        margin="1.5rem 1rem 0 1rem"
        mt="0">
        <FlexBetween 
            color={palette.grey[400]}
            margin="1.5rem 1rem 0 1rem" 
        >
            <FlexBetween>
                {icon}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography varient="h6">{subtitle}</Typography>
                </Box>
            </FlexBetween>
         
        </FlexBetween>
           <Typography variant="h5" fontWeight='700' color={palette.secondary.main}>
                {sideText}
            </Typography>
    </FlexBetween>
)
}

export default BoxHeader;