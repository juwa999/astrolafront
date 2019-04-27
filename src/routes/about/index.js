import React, { Component } from 'react';
import Layout from '../../components/Layout';


const MainHeader = (props) => {
  return <header className="masthead">
  <div className="container d-flex h-100 align-items-center">
    <div className="mx-auto text-center">
      <h1 className="mx-auto my-0 text-uppercase">Exclusive Daycations</h1>
      <h2 className="text-white-50 mx-auto mt-2 mb-5">The online platform connecting you to the best daycations in the city.</h2>
      <a href="http://localhost:3000/about" className="btn btn-primary js-scroll-trigger">Find Experiences</a>
    </div>
  </div>
  
</header>
}
const AboutContent = (props) => {
return <section id="projects" className="projects-section bg-light">
    <div className="container">
      
      <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src="img/poolandbeach.jpg" alt=""/>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black2 text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                    <i className="fas fa-umbrella-beach fa-lg" id="icon"></i>
                  <h4 className="text-black">POOL & BEACH</h4>
                  <p className="mb-0 text-black-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                  <hr className="d-none d-lg-block mb-0 mr-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src="img/Spa.jpg" alt=""/>
        </div>
        <div className="col-lg-6">
          <div className="bg-black2 text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                  <i className="fas fa-spa fa-lg" id="icon"></i>
                <h4 className="text-black">SPA DAYS</h4>
                <p className="mb-0 text-black-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                <hr className="d-none d-lg-block mb-0 ml-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <img className="img-fluid" src="img/golf.jpg" alt=""/>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black2 text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                  <i className="fas fa-golf-ball fa-lg" id="icon"></i>
                <h4 className="text-black">GOLF</h4>
                <p className="mb-0 text-black-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                <hr className="d-none d-lg-block mb-0 mr-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
      <div className="col-lg-6">
        <img className="img-fluid" src="img/water.jpg" alt=""/>
      </div>
      <div className="col-lg-6">
        <div className="bg-black2 text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
                <i className="fas fa-water fa-lg" id="icon"></i>
              <h4 className="text-black">WATERSPORTS</h4>
              <p className="mb-0 text-black-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
              <hr className="d-none d-lg-block mb-0 ml-0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </section>
}
const ContactSection = (props) => {
  return <section class="contact-section bg-black">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <i class="fas fa-map-marked-alt text-primary mb-2"></i>
            <h4 class="text-uppercase m-0">Address</h4>
            <hr class="my-4"/>
            <div class="small text-black-50">4923 Market Street, Orlando FL</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <i class="fas fa-envelope text-primary mb-2"></i>
            <h4 class="text-uppercase m-0">Email</h4>
            <hr class="my-4"/>
            <div class="small text-black-50">
              <a href="#">hello@yourdomain.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="card py-4 h-100">
          <div class="card-body text-center">
            <i class="fas fa-mobile-alt text-primary mb-2"></i>
            <h4 class="text-uppercase m-0">Phone</h4>
            <hr class="my-4"/>
            <div class="small text-black-50">+1 (555) 902-8832</div>
          </div>
        </div>
      </div>
    </div>
    <div class="social d-flex justify-content-center">
      <a href="#" class="mx-2">
        <i class="fab fa-twitter fa-inverse fa-3x"></i>
      </a>
      <a href="#" class="mx-2">
        <i class="fab fa-facebook-f fa-inverse fa-3x"></i>
      </a>
      <a href="#" class="mx-2">
        <i class="fab fa-instagram fa-inverse fa-3x"></i>
      </a>
    </div>
  </div>
</section>
}
class About extends Component {
  render(){
    return <Layout>
        <MainHeader />
        <AboutContent />
        <ContactSection />
      </Layout>
  }
}
export default About;