import logo from './logo.svg';
import './App.css';
import { CSSReset, Box, Flex } from '@chakra-ui/react';
import Sidebar from './Components/Sidebar';
import DashboardHeader from './Components/DashboardHeader';
import Payouts from './pages/Payouts';

function App() {
  return (
    <div className="App">
       <CSSReset />
      <Flex>
        <Sidebar />
        <Box ml="170px" flex="1" bg={"gray.50"}>
          <DashboardHeader />
          <Payouts/>
          {/* Add the main content of your application here */}
        </Box>
      </Flex>
    </div>
  );
}

export default App;
