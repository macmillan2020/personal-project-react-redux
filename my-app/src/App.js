import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from "./Login";


import EventsWrapper from "./EventsWrapper";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            isLoggedIn: false,
            forkEventData: [],
            pullRequestData: []
        };
      this.handleChange = this.handleChange.bind(this);
      this.logUserIn = this.logUserIn.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    logUserIn(e) {
      e.preventDefault();
      this.getForkEvents(this.state.user)
        .then(eventList => {
            const forkEvents = eventList.data.reduce((acc, curr) => {
                let singleEvent = { ...curr };
                if (singleEvent.type === "ForkEvent"){
                acc.push({
                      id: singleEvent.id,
                      type: singleEvent.type,
                      url: singleEvent.repo.url,
                      title: singleEvent.repo.name
                  });
                }
                return acc;
            }, []);
            return forkEvents;
        })
        .then(forkData => {
            this.setState({
                isLoggedIn: true,
                forkEventData: forkData,
            });
        })
        .catch(error => { console.log(error.message) });

        this.getPullRequests(this.state.user)
          .then(res => {
            const pullRequests = res.data.items.reduce((acc,curr)=> {
              acc.push({
                id: curr.id,
                type: curr.state,
                url: curr.pull_request.html_url,
                title: curr.title
              })
              return acc;
            }, [])
            console.log(pullRequests)
            return pullRequests
          })
          .then(pullRequestList => {
            this.setState({
              pullRequestData: pullRequestList
            })
          })
    }

    getForkEvents(username){
      return axios.get(`https://api.github.com/users/${username}/events`)      
    }

    getPullRequests(username){
      return axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`)  
    }

    render() {
        if (!this.state.isLoggedIn) {
          return <div className="wrapper justify-center ">
                  <Login handleChange={this.handleChange} logUserIn={this.logUserIn} user={this.state.user} name="user" placeholder="ex: macmillan2020"/>
                  </div>
        } else {
          return (
          <div className="wrapper ">
            <main className="profile">
              <EventsWrapper className="profile__list" title="Fork Events" allEvents={this.state.forkEventData}/>
              <EventsWrapper className="profile__list" title="Pull Requests" allEvents={this.state.pullRequestData}/>
            </main>
            </div>
            )
        }


    };
};

export default App;