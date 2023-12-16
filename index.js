require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const github = {
  login: "Aryan4884",
  id: 116114086,
  node_id: "U_kgDOBuvCpg",
  avatar_url: "https://avatars.githubusercontent.com/u/116114086?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Aryan4884",
  html_url: "https://github.com/Aryan4884",
  followers_url: "https://api.github.com/users/Aryan4884/followers",
  following_url:
    "https://api.github.com/users/Aryan4884/following{/other_user}",
  gists_url: "https://api.github.com/users/Aryan4884/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Aryan4884/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Aryan4884/subscriptions",
  organizations_url: "https://api.github.com/users/Aryan4884/orgs",
  repos_url: "https://api.github.com/users/Aryan4884/repos",
  events_url: "https://api.github.com/users/Aryan4884/events{/privacy}",
  received_events_url: "https://api.github.com/users/Aryan4884/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 72,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-10-18T19:01:49Z",
  updated_at: "2023-12-11T11:25:43Z",
};
app.get("/twitter", (req, res) => {
  res.send("Aryan Raj");
});
app.get("/Youtube", function (req, res) {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
