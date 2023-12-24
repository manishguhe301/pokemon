import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { pokeball } from '../assets/index';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#ffcb05' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img src={pokeball} alt='ball' className='h-10 mr-2' />
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontFamily: 'Lato',
              fontWeight: '900',
              fontSize: '24px',
            }}
          >
            PokeDéx
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
