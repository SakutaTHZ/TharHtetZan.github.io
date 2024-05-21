const username = 'SakutaTHZ';
const url = `https://api.github.com/users/${username}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setProfile(data.avatar_url,data.name,data.login)
  })
  .catch(error => console.error('Error:', error));

  const setProfile = (link,name,nickname)=>{
    let profileBoxes = document.querySelectorAll('.profile')
    profileBoxes.forEach(profileBox => {
        profileBox.src = link;
        profileBox.alt = `${name}'s GitHub Profile Picture`;
    });
    document.querySelector('.username').innerHTML = name
    document.querySelector('.nickname').innerHTML = nickname
  }