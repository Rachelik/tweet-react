import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div class="image-content">
          <img src="https://previews.123rf.com/images/rtguest/rtguest1007/rtguest100700002/7302080-world-globe-map.jpg" className="profile-image" />
        </div>
        <div class="card-content">
          <p>
            <span class="name">{this.props.name}</span>
            <span><i class="las la-check-circle"></i> </span>
            <span class="tweet-info">@kenyawest </span>
            <span class="tweet-info">{this.props.cdate}</span>
          </p>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;