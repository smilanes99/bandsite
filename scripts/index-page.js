
const apiKey = `?api_key=5a3fa11d-8c58-4c11-bd97-4c292d09c0d6`;
const apiBaseUrl = 'https://project-1-api.herokuapp.com/';



let comments = [];


function displayComment(comment) {

  const commentEl = document.createElement("div");
  commentEl.classList.add("comment");

  const commentImg = document.createElement("div");
  commentImg.classList.add("commentImg");
  commentImg.style.backgroundImage = `url('assets/images/gray image.jpeg')`;
  commentEl.appendChild(commentImg);

  const commentName = document.createElement("div");
  commentName.classList.add("commentName");
  commentEl.appendChild(commentName);

  const personName = document.createElement("div");
  personName.innerHTML = comment.name;

  commentName.appendChild(personName);

  const commentDate = document.createElement("div");
  commentDate.classList.add("commentDate");
  commentName.appendChild(commentDate);

  const date= new Date(comment.timestamp);
  const formattedDate = date.toLocaleDateString("newDate",{
   
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    
    const dateText = document.createElement("div");
    dateText.innerHTML = formattedDate;
    commentDate.appendChild(dateText);


  const commentText = document.createElement("div");
  commentText.classList.add("commentText");
  commentEl.appendChild(commentText);

  const text = document.createElement("p");
  text.innerHTML = comment.comment;

  commentText.appendChild(text);

  return commentEl;

}


axios
  .get(`${apiBaseUrl}comments${apiKey}`)
  .then((response) => {
    console.log(response);

    let comments = response.data.sort((a,b)=>
    { return new Date(b.timestamp)-new Date(a.timestamp);
    });


    comments.forEach(comment => {
      console.log(comment);
      const commentEl = document.getElementById("comment-section");
      const cardEl = displayComment(comment);
      commentEl.appendChild(cardEl);
    });
  })
  .catch(error => {
    console.log(error);
  });
const form = document.querySelector('.comments__form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
})


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardInfo = {
    name: event.target.elements.name.value,
    comment: event.target.elements.comment.value

  }
  axios
    .post(`${apiBaseUrl}comments${apiKey}`, cardInfo)
    .then((response) => {
      comments.unshift(response.data);

      const commentEl = document.querySelector(".comments");
      const cardEl = displayComment(response.data);
      commentEl.insertBefore(cardEl, commentEl.firstChild);

    })
    .catch((error) => {
      console.log(error);
    });

  comments.unshift(cardInfo);
  const commentEl = document.querySelector(".comments");
  commentEl.insertBefore(cardEl, commentEl.firstChild);
  event.target.reset();
});