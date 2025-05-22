const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', () => {
  const username = searchInput.value.trim();
  fetchData(username);
});
async function fetchData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    getData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
function getData(response) {
  //User personal details
  const avatar = document.getElementById('avatar');
  avatar.src = response.avatar_url;
  const name = document.getElementById('name');
  name.textContent = response.name || ' Not Available';
  const username = document.getElementById('username');
  username.textContent = response.login || ' Not Available';
  const joined = document.getElementById('joined');
  joined.textContent = formatDate(response.created_at);
  //User Info
  //Repositories
  const repos = document.getElementById('repos-count');
  repos.textContent = response.public_repos;

  //Followers
  const followers = document.getElementById('followers-count');
  followers.textContent = response.followers;

  //Following
  const following = document.getElementById('following-count');
  following.textContent = response.following;
  ///User Bio
  const bio = document.getElementById('bio');
  bio.textContent = response.bio || ' This profile has no bio';
  //User social media
  const location = document.getElementById('location');
  location.textContent = response.location || ' Not Available';
  const website = document.getElementById('website');
  website.textContent = response.blog || ' Not Available';
  const twitter = document.getElementById('twitter');
  twitter.textContent = response.twitter_username || ' Not Available';
  const company = document.getElementById('company');
  company.textContent = response.company || ' Not Available';
}
function formatDate(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `Joined ${day} ${month} ${year}`;
}
window.addEventListener('DOMContentLoaded', fetchData('bradtraversy'));
