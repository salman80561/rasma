import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Root from './MainNavigation/Root';
import { lazy, Suspense, useContext } from 'react';
import Econtext from './Store/ecom-context';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Container } from 'react-bootstrap';
const NotFound = lazy(() => import('./NotFound/NotFound'));
const SignupForm = lazy(() => import('./SignUp/SignUpForm'));
const Account = lazy(() => import('./UserAccount/Account'));
const About = lazy(() => import('./About/About'));
const Product = lazy(() => import('./Product/Product'));
const ContactUs = lazy(() => import('./Contact/Contact'));
const Login = lazy(() => import('./Login/Login'));
const ProductDetailsPage = lazy(() => import('./Product/ProductDetailsPage'))
const Cart = lazy(() => import('./Cart/Cart'))

const App = () => {
  const ctx = useContext(Econtext);
  return (
    <div>
      
      <Container className='overflow-auto h-100 p-0' fluid>
        <Suspense fallback={<p>Loading...</p>}>
          <Root>
            <Routes>
              <Route path='/' element={<Navigate to='/home' replace />} />
              <Route path='/home' element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              } />
              {ctx.isLogedin && <Route path='/Login/Product/:email' element={
                <>
                  <Header />
                  <Product />
                  <Footer />
                </>
              } />}
              {ctx.isLogedin && <Route path='/Product/:id' element={
                <>
                  <Header />
                  <ProductDetailsPage />
                  <Footer />
                </>
              } />}
              {ctx.isLogedin && <Route path='/Login/Cart/:userId' element={
                <>
                  <Header />
                  <Cart />
                  <Footer />
                </>
              } />}
              <Route path='/About' element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              } />
              
             
              <Route path='/Contact' element={
                <>
                  <Header />
                  <ContactUs />
                  <Footer />
                </>
              } />
              <Route path='/Login' element={
                <>
                  <Header />
                  <Login />
                  <Footer />
                </>
              } />
              <Route path='/SignUp' element={
                <>
                  <Header />
                  <SignupForm />
                  <Footer />
                </>
              } />
              
              {ctx.isLogedin && <Route path='/Login/:emailId' element={
                <>
                  <Header />
                  <Account />
                  <Footer />
                </>
              } />}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Root>
        </Suspense>
      </Container>
      
    </div>
    
  );
}

export default App;
