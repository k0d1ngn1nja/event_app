import React from 'react';

const EventDetailSidebar = (props) => {
  return (
  	<div className="panel panel-info">
			<div className="panel-heading"><h4 className="no-margin">5 People Going</h4></div>
			<ul class="list-group">
				<li class="list-group-item">
					<img src="/assets/images/user.png" alt="user" className="img-responsive sm-avatar"/>
					<a>James Dean</a> (<i className="fas fa-couch">Host</i>)
				</li>
				<li class="list-group-item">
					<img src="/assets/images/user.png" alt="user" className="img-responsive sm-avatar"/>
					<a>Hillary Rodham</a>
				</li>
				<li class="list-group-item">
					<img src="/assets/images/user.png" alt="user" className="img-responsive sm-avatar"/>
					<a>Monica Karen</a>
				</li>
				<li class="list-group-item">
					<img src="/assets/images/user.png" alt="user" className="img-responsive sm-avatar"/>
					<a>Matt Phillip</a>
				</li>
				<li class="list-group-item">
					<img src="/assets/images/user.png" alt="user" className="img-responsive sm-avatar"/>
					<a>Ahmed Tarik</a>
				</li>
			</ul>
  	</div>
  );
};

export default EventDetailSidebar;
