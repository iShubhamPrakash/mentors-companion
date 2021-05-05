import React from "react";

export const Disclaimer = () => {
	return (
		<div className="disclaimer_container">
			<h1>Welcome Mentors 😊</h1>
			<p>
				This is a simple tool to view the feedback in a beautiful UI which we
				receive from the students whose projects we review at Udacity.
			</p>

			<br />

			<h2>Why?</h2>
			<p>
				For the past couple of months, the feedback section on the mentor
				dashboard has been disabled because of which we can't directly see the
				feedback given by our students. Some of us have been using{" "}
				<a
					href="https://review-api.udacity.com/api/v1/me/student_feedbacks"
					target="_blank"
					rel="noreferrer noopener"
				>
					this API
				</a>{" "}
				to get the feedback data in JSON format to know what feedback we have
				received from the students.
			</p>
			<p>
				I also use this trick for the same. It was difficult to quickly find the
				ratings and students' comments in the JSON data obtained from this API.
				I thought why not create a simple tool to convert this JSON into a
				beautiful UI? So, I got a cup of coffee and tapped few keys on the
				keyboard to create this simple tool that can show your feedback data in
				a good and easy to visualize UI. Here is how it looks with some sample
				JSON data:
			</p>

			<img
				width="1552"
				alt="Screenshot 2021-05-02 at 5 06 51 AM"
				src="https://user-images.githubusercontent.com/28767301/116797544-6ead4480-ab04-11eb-8947-11e0de703f3a.png"
			/>
			<img
				width="1552"
				alt="Screenshot 2021-05-02 at 5 07 07 AM"
				src="https://user-images.githubusercontent.com/28767301/116797547-71a83500-ab04-11eb-9398-238fd0c60085.png"
			/>

			<br />

			<h2>How to use this tool?</h2>

			<ol>
				<li>
					Go to{" "}
					<a
						href="https://review-api.udacity.com/api/v1/me/student_feedbacks"
						target="_blank"
						rel="noreferrer noopener"
					>
						this link
					</a>{" "}
				</li>

				<li>Copy the raw JSON data obtained from this API.</li>
				<li>
					Paste it in the textbox at the top right corner and click Analyse
					button
				</li>
			</ol>

			<br />

			<h2>Not working? Here are some tips</h2>

			<ol>
				<li>
					Make sure you are signed in to the Udacity mentors dashboard in the
					same browser.
				</li>

				<li>
					Make sure you copy-paste the JSON in raw format. Some of us might have
					certain JSON viewer extensions installed in the browser because of
					which correct JSON data does not get copied to the click board. You
					must copy-paste data in raw JSON format.
				</li>
				<li>Still not working? Let me know the details. I'll help you.</li>
			</ol>

			<br />

			<h2>Author</h2>
			<p>
				<a
					href="https://shubhamprakash.dev"
					target="_blank"
					rel="noreferrer noopener"
				>
					Shubham Prakash
				</a>{" "}
			</p>

			<br />

			<h2>Disclaimer</h2>
			<p>
				This is not an official tool from Udacity. I created this for myself and
				for those mentors who want to use a better tool than a boring JSON
				viewer to view the students' feedback.
			</p>
		</div>
	);
};
