import React from 'react';
import "./Home.css";

const Home = (props) => {
	const { history } = props;

  return (
  	<header id="header" className="header">
			<div className="header-overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="header-text">
								<h1>Welcome to 247Events</h1>
								<p><span onClick={() => history.push("/events")} className="btn btn-danger">Get Started</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>   
  );
};

export default Home;