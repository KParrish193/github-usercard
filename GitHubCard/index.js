/* Step 1: using axios, send a GET request to the following URL 
          (replacing the placeholder with your Github name):
          https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
  github info! You will need to understand the structure of this 
  data in order to use it to build your component function 

  Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
          create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

  function gitCardMaker(content){

      const card = document.createElement('div');
        card.classList.add('card');
      const profImg = document.createElement('img');
      const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
          const titleUser = document.createElement('h3');
            titleUser.classList.add('name');
          const userName = document.createElement('p');
            userName.classList.add('username');
          const location = document.createElement('p');
          const profile = document.createElement('p');
            const linkAddress = document.createElement('a');
          const followers = document.createElement('p');
          const following = document.createElement('p');
          const bio = document.createElement('p');

      profImg.src = content.avatar_url;
      titleUser.textContent = content.name;
      userName.textContent = content.login;
      location.textContent = `Location: ${content.location}`;
      profile.textContent = `Profile: `
      linkAddress.setAttribute('href', content.html_url); 
      linkAddress.setAttribute('target', '_blank');
      linkAddress.textContent = content.html_url;
      followers.textContent = `Followers: ${content.followers}`;
      following.textContent = `Following: ${content.following}`;
      bio.textContent = `Bio: ${content.bio}`;

      card.appendChild(profImg);
      card.appendChild(cardInfo);
      cardInfo.appendChild(titleUser);
      cardInfo.appendChild(userName);
      cardInfo.appendChild(location);
      cardInfo.appendChild(profile);
      profile.appendChild(linkAddress);
      cardInfo.appendChild(followers);
      cardInfo.appendChild(following);
      cardInfo.appendChild(bio);

      const cardEnterPoint = document.querySelector('.cards');
      cardEnterPoint.appendChild(card);

      return card;
  };




  axios.get("https://api.github.com/users/KParrish193")
    .then(response => {
        gitCardMaker(response.data);
        
        axios.get("https://api.github.com/users/KParrish193/followers")
        .then(response => {
          response.data.forEach(item => {
          axios.get(item.url)
            .then(response => {
              gitCardMaker(response.data);
            })
          })
        })
        .catch(error => {
        console.log("The data was not returned", error);
        })
        })
      .catch(error => {
        console.log("The data was not returned", error);
      });


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/