import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography to='/' color='inherit' variant="h6" component={NavLink} sx={{ flexGrow: 1, textDecoration: 'none' }}>
              My Blog
            </Typography>
            <Button to='/' color='inherit' component={NavLink}>Home</Button>
            <Button to='/new-post' color='inherit' component={NavLink}>Add</Button>
            <Button to='/about' color='inherit' component={NavLink}>About</Button>
            <Button to='/contacts' color='inherit' component={NavLink}>Contacts</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;