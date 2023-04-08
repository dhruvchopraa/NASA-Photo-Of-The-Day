import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import HomeScreen from "../../bin/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import NASA from "./screens/NASA";


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/" component={LoginScreen} exact />
          <Route path="/NASA" component={NASA} />
        </Container>
      </main>
      <br></br>
      <Footer />
    </Router>
  );
};

export default App;