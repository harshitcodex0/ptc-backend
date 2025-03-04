require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

const githubData = 
  {
  "login": "harshitcodex0",
  "id": 66560532,
  "node_id": "MDQ6VXNlcjY2NTYwNTMy",
  "avatar_url": "https://avatars.githubusercontent.com/u/66560532?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshitcodex0",
  "html_url": "https://github.com/harshitcodex0",
  "followers_url": "https://api.github.com/users/harshitcodex0/followers",
  "following_url": "https://api.github.com/users/harshitcodex0/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshitcodex0/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshitcodex0/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshitcodex0/subscriptions",
  "organizations_url": "https://api.github.com/users/harshitcodex0/orgs",
  "repos_url": "https://api.github.com/users/harshitcodex0/repos",
  "events_url": "https://api.github.com/users/harshitcodex0/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshitcodex0/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harshit",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "HarshSi82158470",
  "public_repos": 17,
  "public_gists": 0,
  "followers": 0,
  "following": 5,
  "created_at": "2020-06-07T14:10:53Z",
  "updated_at": "2025-03-04T06:17:16Z"
}



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello from X not twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login at jarvis AI </h1>");
});

app.get("/github", (req,res) => {
  res.json(githubData);
})

app.get("/youtube", (req, res) => {
  res.send("<h2> Jarvis AI is great </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
