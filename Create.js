import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, publisher,description} = this.state;

    axios.post('/api/book', { isbn, title, author, publisher,description })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { isbn, title, author, publisher,description } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Project list</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Project ID:</label>
                <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="Project ID" />
              </div>
              <div class="form-group">
                <label for="title">Responsible:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Responsible" />
              </div>
              <div class="form-group">
                <label for="author">Location:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Location" />
              </div>
                <div class="form-group">
                <label for="description">Date Completed:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Date Completed" cols="78" rows="1">{description}</textArea>
              </div> 
              {/* <div class="form-group">
                <label for="published_date">Date Completed:</label>
                <input type="text" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Date Completed" />
              </div> */}
              <div class="form-group">
                <label for="publisher">Status:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Status" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
