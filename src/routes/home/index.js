import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { searchExperiences } from '../../helpers/network';
import "./css/style.css";
class Home extends Component {
  
  state = {
    error: null,
    filtered: null,
    experiences:[]
  }
  
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async(e) => {
    console.log("submit form");
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
      let response = await searchExperiences({location: this.state.location, type: this.state.type});
      
      this.setState({
        filtered: true,
        experiences: response
      })
    }catch (e){
      console.log(e)
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return (<Layout>
      
      <div className="box">
      <div className="booking-form">
          <div className="row">
            <div className="col">
              <h1 className="heading">Check Availability</h1>
            </div>
          </div>

          {this.state.error ?
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          : null }

            <form onSubmit={this.submitForm}>
            <div className="form-group">
            <span className="form-label">Where</span>
            <select name="location" onChange={this.updateVal} className="form-control">
              <option>Umm Sequiem</option>
              <option>Marina</option>
              <option>Jumeirah</option>
            </select>
            <span className="select-arrow" />
            </div>
            <div className="form-group">
            <span className="form-label">Type of day</span>
            <select name="type" onChange={this.updateVal} className="form-control">
              <option>Beach</option>
              <option>Golf</option>
              <option>Kids</option>
            </select>
            <span className="select-arrow" />
            </div>
            <button type="search" className="btn btn-primary">Search</button>
          </form>
    </div>
    </div>
    {this.state.filtered ? <Filter experiences = {this.state.experiences}/> : null}
    
    </Layout>)
  }
}
const Filter=({experiences})=>{
return <div className="columns">
  {experiences.map( experience => <SingleExp experience={experience} />)}


</div>
};

const SingleExp = ({experience}) => {
  console.log("single")
  return <div >
    <h5>{experience.location}</h5>
    <h6>{experience.type}</h6>
    <img width="400px" src={experience.image} />
  </div>
}
export default Home;
      
  
