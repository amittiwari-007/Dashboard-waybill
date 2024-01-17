import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Temp from './components/Temp';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Box display="flex">
      {/* Left Section */}
      <Temp />
      {/* Right Section */}
      <Card/>
    </Box>
    </>
  );
}

export default App;
