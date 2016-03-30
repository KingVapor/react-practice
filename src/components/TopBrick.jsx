var React = require('react');
var TopBrick = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
});

module.exports = TopBrick;