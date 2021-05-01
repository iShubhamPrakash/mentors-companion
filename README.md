# Welcome Mentors 😊

This is a simple tool to view the feedback in a beautiful UI which we receive from the students whose projects we review at Udacity.

## Why?

For the past couple of months, the feedback section on the mentor dashboard has been disabled because of which we can't directly see the feedback given by our students. Some of us have been using [this API](https://review-api.udacity.com/api/v1/me/student_feedbacks) to get the feedback data in JSON format to know what feedback we have received from the students.

I also use this trick for the same. It was difficult to quickly find the ratings and students' comments in the JSON data obtained from this API. I thought why not create a simple tool to convert this JSON into a beautiful UI? So, I got a cup of coffee and tapped few keys on the keyboard to create this simple tool that can show your feedback data in a good and easy to visualize UI. Here is how it looks with some sample JSON data:

![Screenshot 2021-05-02 at 5 06 51 AM](https://user-images.githubusercontent.com/28767301/116797544-6ead4480-ab04-11eb-8947-11e0de703f3a.png) ![Screenshot 2021-05-02 at 5 07 07 AM](https://user-images.githubusercontent.com/28767301/116797547-71a83500-ab04-11eb-9398-238fd0c60085.png)

## How to use this tool?

1.  Go to [this link](https://review-api.udacity.com/api/v1/me/student_feedbacks)
2.  Copy the raw JSON data obtained from this API.
3.  Paste it in the textbox at the top right corner and click Analyse button

## Not working? Here are some tips

1.  Make sure you are signed in to the Udacity mentors dashboard in the same browser.
2.  Make sure you copy-paste the JSON in raw format. Some of us might have certain JSON viewer extensions installed in the browser because of which correct JSON data does not get copied to the click board.You must copy-paste data in raw JSON format.
3.  Still not working? Let me know the details. I'll help you.

## This is too simple/not useful!!

Don't worry!! I'll be adding more features soon. If you have some cool ideas and want to add some more features then you are welcome. The project is open-source on my GitHub account. Send me PR and I'll happily accept it 😍

## Disclaimer

This is not an official tool from Udacity. I created this for myself and for those mentors who can be benefited from this.

## How to develop locally

1. Clone this project on your computer
2. Install dependencies using the command `npm install`
3. Build the project using the command `npm run build`

## Author

Shubham Prakash

https://shubhamprakash.dev
