import { Box } from '@mui/material'
import React from 'react'
import { alpha } from '@mui/material';

function CustomBox(props) {
  return (
    <Box
        className="p-5 flex-grow flex h-full"
        sx={(theme) => ({
            alignSelf: 'center',
            width: '100%',
            backgroundImage:`linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
                theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
                theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
        })}
    >{props.children}</Box>
  )
}

export default CustomBox