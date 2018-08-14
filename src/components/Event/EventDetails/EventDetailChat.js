import React from 'react';

const EventDetailChat = (props) => {
  return (
  	<div className="panel panel-primary">
			<div className="panel-heading text-center">
				<h4 className="no-margin">Chat about this event</h4>
			</div>
			
			<div className="panel-body">
				<ul className="event_comments">
					<li className="comment">
						<a className="avatar">
							<img src="/assets/images/user.png" alt="User"/>
						</a>
						<div className="comment_content">
							<a className="author">Matt Elliot </a>
							<span className="metadata">Today at 5:40PM</span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet sequi enim, modi molestias rerum!</p>
							<a className="reply">Reply</a>
						</div>
					</li>
					<li className="comment">
						<a className="avatar">
							<img src="/assets/images/user.png" alt="User"/>
						</a>
						<div className="comment_content">
							<a className="author">Matt Elliot </a>
							<span className="metadata">Today at 5:40PM</span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet sequi enim, modi molestias rerum!</p>
							<a className="reply">Reply</a>
						</div>
					</li>
					<li className="comment">
						<a className="avatar">
							<img src="/assets/images/user.png" alt="User"/>
						</a>
						<div className="comment_content">
							<a className="author">Matt Elliot </a>
							<span className="metadata">Today at 5:40PM</span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet sequi enim, modi molestias rerum!</p>
							<a className="reply">Reply</a>
						</div>
					</li>
					<li className="comment">
						<a className="avatar">
							<img src="/assets/images/user.png" alt="User"/>
						</a>
						<div className="comment_content">
							<a className="author">Matt Elliot </a>
							<span className="metadata">Today at 5:40PM</span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet sequi enim, modi molestias rerum!</p>
							<a className="reply">Reply</a>
						</div>
					</li>
				</ul>

				<div className="comment_form">
					<form>
						<div class="form-group">
              <textarea class="form-control" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-md"> <i className="fas fa-edit"></i> Submit</button>
					</form>
				</div>
			</div>
  	</div>
  );
};

export default EventDetailChat;