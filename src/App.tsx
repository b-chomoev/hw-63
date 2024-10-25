import Toolbar from './components/NavBar/NavBar';
import { Container, Typography } from '@mui/material';
import Home from './containers/Home/Home';
import AddForm from './containers/AddForm/AddForm';
import Contacts from './containers/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import About from './containers/About/About';


const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<AddForm />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='*' element={<Typography variant='h1'>Not Found</Typography>}></Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
