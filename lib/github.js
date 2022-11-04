const tempData = {
  login: "jubin369",
  id: 55713505,
  node_id: "MDQ6VXNlcjU1NzEzNTA1",
  avatar_url: "https://avatars.githubusercontent.com/u/55713505?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/jubin369",
  html_url: "https://github.com/jubin369",
  followers_url: "https://api.github.com/users/jubin369/followers",
  following_url: "https://api.github.com/users/jubin369/following{/other_user}",
  gists_url: "https://api.github.com/users/jubin369/gists{/gist_id}",
  starred_url: "https://api.github.com/users/jubin369/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/jubin369/subscriptions",
  organizations_url: "https://api.github.com/users/jubin369/orgs",
  repos_url: "https://api.github.com/users/jubin369/repos",
  events_url: "https://api.github.com/users/jubin369/events{/privacy}",
  received_events_url: "https://api.github.com/users/jubin369/received_events",
  type: "User",
  site_admin: false,
  name: "Jubin Ayoob",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: true,
  bio: "React Developer",
  twitter_username: "jubin369",
  public_repos: 31,
  public_gists: 10,
  followers: 8,
  following: 1,
  created_at: "2019-09-23T18:37:14Z",
  updated_at: "2022-07-02T03:07:58Z",
};

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false;
  if (fake) return tempData;
  return fetch("https://api.github.com/users/jubin369").then((res) =>
    res.json()
  );
}

// its for getting temporary old data
export function getOldStats() {
  return tempData;
}
