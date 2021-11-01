import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper, FormControl } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  TextField,
  Card,
  InputLabel,
  Alert,
  Input,
  Stack,
  Button,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { useRef } from 'react';
import Divider from '@mui/material/Divider/Divider';
import { useTheme } from '@mui/material/styles';

export default function GroupSelect({ dataProps, data }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const anchorRef = React.useRef(null);
  const containerRef = useRef(null);
  const defaultDataProps = {
    id: dataProps?.id || 'id',
    label: dataProps?.name || 'label',
    children: dataProps?.children || 'children',
  };

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const pannelContent = () => {
    console.log('da1', data);
    return (
      <Paper
        sx={{
          position: 'absolute',
          minHeight: 250,
          maxHeight: 400,
          minWidth: 320,
          overflow: 'auto',
          left: 0,
          top: 0,
          zIndex: 2,
          p: 1,
        }}
      >
        {(data || []).map((unit) => {
          return (
            <Box
              sx={{
                display: 'flex',
                borderBottom: `1px solid ${theme.palette.grey[200]}`,
                ':last-child': {
                  borderBottom: 'none',
                },
              }}
              key={unit[defaultDataProps.id]}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                    color: theme.palette.text.primary,
                    boxShadow: 'none',
                    my: '10px',
                    pl: '10px',
                    width: '60px',
                  }}
                >
                  {unit[defaultDataProps.label]}
                </Box>
              </Box>
              <Stack direction="row" spacing={0.5} flexWrap={'wrap'}>
                {unit[defaultDataProps.children].map((u) => (
                  <Button
                    sx={{
                      fontWeight: '400',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {u[defaultDataProps.label]}
                  </Button>
                ))}
              </Stack>
            </Box>
          );
        })}
      </Paper>
    );
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <FormControl>
        <InputLabel>Group</InputLabel>
        <Box onClick={handleClick}>
          <TextField
            ref={anchorRef}
            inputProps={{ readOnly: true }}
            variant="outlined"
          />
        </Box>
        <Box sx={{ position: 'relative' }}>{open ? pannelContent() : null}</Box>
      </FormControl>
    </ClickAwayListener>
  );
}
