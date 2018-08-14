import React from 'react';
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailSidebar from "./EventDetailSidebar";

const event = {
  id: '1',
  title: 'Trips to Tower of London',
  date: '2018-03-27',
  category: 'culture',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
  city: 'London, UK',
  venue: "Tower of London, St Katharine's & Wapping, London",
  hostedBy: 'Bob',
  hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
  attendees: [
    {
      id: 'a',
      name: 'Bob',
      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
    },
    {
      id: 'b',
      name: 'Tom',
      photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ]
}

const EventDetailsPage = (props) => {
  return (
		<div className="row">
			<div className="col-md-8 col-offset-md-1">
				<EventDetailHeader event={event} />
				<EventDetailInfo event={event} />
				<EventDetailChat />
			</div>

			<div className="col-md-3">
				<EventDetailSidebar attendees={event.attendees} />
			</div>
		</div>      
  );
};

export default EventDetailsPage;