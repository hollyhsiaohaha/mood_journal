import { Routes, Route, useLocation } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import Header from './components/Header';
import CreateJournal from './components/CreateJournal';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Journal from './components/Journal';
import JournalList from './components/JournalList';
import Graph from './components/Graph';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import Authentication from './components/Authentication';
import Float from './components/Float';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const location = useLocation();
  return (
    <>
      <PrimeReactProvider>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTo />
        <Authentication path={location.pathname} />
        <h1>Mood Journal</h1>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="journalList" element={<JournalList />}></Route>
          <Route path="journal/:journalId" element={<Journal />}></Route>
          <Route path="newJournal/:newJournalDate" element={<CreateJournal />}></Route>
          <Route path="graph" element={<Graph showFilter={true} />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
        <Float />
      </PrimeReactProvider>
    </>
  );
}

export default App;
