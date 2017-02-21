// In a file called `Tweet.js`
const React = require('react');

class Tweet extends React.Component {
  render(
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
            <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    )

}
module.exports = Tweet;
// In a file in the same directory
//const Tweet = require('./foo');
ReactDOM.render(
  <Tweet />,
  document.getElementById('main')
);
