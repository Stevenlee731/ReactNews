// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About ReactNews</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus.</p>
            </div>
        );
    }
}

export default AboutPage;
