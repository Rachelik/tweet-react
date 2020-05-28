import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';
import Card from 'card.jsx';

class App extends React.Component {
  render() {

    return (
      <div className="tweets-container">
        <div>
          <List/>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const listOfItems = tweets.tweets;

    const items = listOfItems.map((item)=>{
        return <Card
          name={item.user.name}
          cdate={item.created_at}
          text={item.text}
        />
    });


    return (
      <div  className="list">
        {items}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");
