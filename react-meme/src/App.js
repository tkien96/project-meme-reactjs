import Header from "./components/Header"
import Footer from "./components/Footer"
import Loading from "./components/Shared/Loading"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import PostPage from "./pages/PostPage"
import PostDetailPage from "./pages/PostDetailPage"
import UploadPage from "./pages/UploadPgae"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchAllCategoriesAsync } from './store/category/actions';
import { actFetchMeAsync } from './store/auth/actions';
import { getToken } from './helpers'

function App() {
  const dispatch = useDispatch()
  const token = getToken()

  useEffect(() => {
    dispatch(actFetchMeAsync(token))
    dispatch(actFetchAllCategoriesAsync())
  }, [dispatch, token]);

  return (
    <BrowserRouter>
      <Loading />
        <Switch>
          <Route path="/upload">
            <Header />
            <UploadPage />
            <Footer /> 
          </Route>
          <Route path="/post/:id">
            <Header />
            <PostDetailPage />
          </Route>
          <Route path="/search">
            <Header />
            <PostPage typePost={2} />
            <Footer /> 
          </Route>
          <Route path="/postuser/:id">
            <Header />
            <PostPage typePost={1} />
            <Footer /> 
          </Route>
          <Route path="/categories/:id">
            <Header />
            <PostPage typePost={0} />
            <Footer /> 
          </Route>
          <Route path="/login">
            <LoginPage />
            <Footer /> 
          </Route>
          <Route path="/profile">
            <Header />
            <ProfilePage />
            <Footer /> 
          </Route>
          <Route path="/register">
            <RegisterPage />
            <Footer /> 
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;