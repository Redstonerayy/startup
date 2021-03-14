'use strict';

/*
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
*/

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>sadf</h1>
    );
  }
}

const domContainer = document.querySelector('.root');
ReactDOM.render(<LikeButton />, domContainer); //e(LikeButton)