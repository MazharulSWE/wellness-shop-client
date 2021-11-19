import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider/AuthProvider';
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Explore from "./pages/Explore/Explore";
import Purchase from "./pages/Purchase/Purchase";
import Footer from './pages/Shared/Footer/Footer';
import PrivateRoute from "./private/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;



//---------Thanks to you fo your time and support------------------- 
















/*
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Explores from './pages/Explores/Explores';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddCar from './pages/AddCar/AddCar';
import AddReview from './pages/AddReview/AddReview';
import Booking from './pages/Booking/Booking';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import MyOrder from './pages/MyOrder/MyOrder';
import ManageOrder from './pages/ManageOrder/ManageOrder';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
            <Header></Header>
            <Switch>
               <Route exact path='/'>
                 <Home></Home>
               </Route>
               <Route exact path='/home'>
                 <Home></Home>
               </Route>
               <Route path='/explores'>
                 <Explores></Explores>
               </Route>
               <PrivateRoute path='/add'>
                 <AddCar></AddCar>
               </PrivateRoute>
               <PrivateRoute path="/details/:serviceId">
                 <Booking></Booking>
              </PrivateRoute>
               <Route path='/addReview'>
                 <AddReview></AddReview>
               </Route>
               <Route path='/login'>
                 <Login></Login>
               </Route>
               <Route path='/register'>
                 <Register></Register>
               </Route>
               <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
               <Route path='*'>
                 <NotFound></NotFound>
               </Route>
            </Switch>
            <Footer></Footer>
         </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
*/