import React from 'react';
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailSidebar from "./EventDetailSidebar";

const EventDetailsPage = (props) => {
  return (
		<div className="row">
			<div className="col-md-8 col-offset-md-1">
				<EventDetailHeader />
				<EventDetailInfo />
				<EventDetailChat />
			</div>

			<div className="col-md-3">
				<EventDetailSidebar />
			</div>
		</div>      
  );
};

export default EventDetailsPage;