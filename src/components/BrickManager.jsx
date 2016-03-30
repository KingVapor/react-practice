var React = require('react');
var TopBrick = require('./TopBrick.jsx');

var BrickManager = React.createClass({

	render: function() {
		return(
			<div className="col-sm-4">
				<div className="panel panel-default">
					<div className="panel-body">
						<TopBrick title="20" text="New followers added this month"/>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = BrickManager;
