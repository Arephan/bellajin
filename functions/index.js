const functions = require("firebase-functions");

const { JWT } = require("google-auth-library");

const keys = require("./jwt.keys.json");

exports.addToGoogleCal = functions.https.onRequest((request, response) => {
  const client = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar"
    ]
  });
  let startTime = request.query.startTime;
  let endTime = request.query.endTime;
  let summary = request.query.summary;
  const url = `https://www.googleapis.com/calendar/v3/calendars/1vibev6ahu8hfl6u4p2me4rnq8@group.calendar.google.com/events`;
  var data = {
    end: {
      dateTime: endTime
    },
    start: {
      dateTime: startTime
    },
    summary: summary
  };
  client
    .request({ url: url, method: "POST", data: data })
    .then(res => {
      console.log(res.data);
      return response.send(res.data);
    })
    .catch(err => {
      return response.send(err);
    });
});
