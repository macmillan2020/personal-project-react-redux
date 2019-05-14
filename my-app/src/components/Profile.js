import React from "react";


class Profile extends React.Component {
    componentDidMount() {
        this.props.getForkEventData();
        this.props.getPullRequestData();
    };

    render () {
        console.log(this.props.pullRequestData)
        return (
            <section>
                <h1>{this.props.user} Profile</h1>
                <h2>Recent Fork Events</h2>
                <ul>
                    {this.props.forkEventData ?
                        this.props.forkEventData.map( item => {
                            return <li key={item.id}><a href={item.url}> {item.title} </a></li>
                        })
                        :
                        <p>There are no recent Fork Events.</p>
                    }
                </ul>

                <h2>Recent Pull Requests</h2>
                <ul>
                    {this.props.pullRequestData.length ?
                        this.props.pullRequestData.map( item => {
                            return <li key={item.id}><a href={item.pull_request.html_url} className={item.state}>{item.title} ({item.state}) </a></li>
                        })
                        :
                        <p>There are no recent pullRequests.</p>
                    }
                </ul>
            </section>
        )
    }
}

export default Profile;
