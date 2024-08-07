import { Box, Card } from '@mui/material';
import React from 'react';
import { alpha } from '@mui/material/styles';

function CustomCard(props) {
  return (
    <Card
      className="p-5 flex-grow flex h-full"
      sx={(theme) => ({
        alignSelf: 'center',
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'url("/static/images/templates/templates-images/hero-light.png")'
            : 'url("/static/images/templates/templates-images/hero-dark.png")',
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
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)', // Moves the card up by 10 pixels on hover
          boxShadow: theme.palette.mode === 'light'
            ? `0 0 24px 16px ${alpha('#9CCCFC', 0.3)}` // Adjust shadow on hover
            : `0 0 36px 18px ${alpha('#033363', 0.3)}`, // Adjust shadow on hover
        },
      })}
    >
      {props.children}
    </Card>
  );
}

export default CustomCard;
