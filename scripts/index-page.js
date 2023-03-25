
// need the img to be a div and flex that in scss
// neeed to make an array with the comments and do soemthing similar to what i did with the shows
// make sure to return comment

// function createComment (commentData) {
//     const comment=document.createElement ('article');
//     comment.classList.add
// }

// to submit use handleFormSubmit, preventDefault
// const commentData={}
// name: e.target.name.value,
// date:relativeTime
// comment: e.target.comment.value
// customElements.unshift(commentData) PUSHES IT TO THE BOTTOM
// renderComment
// ----------------------------------------------
const commentInfo = [
    {   name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        img: "assets/images/gray image.jpeg"
      },
    {name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    img: "assets/images/gray image.jpeg"
  },
{
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:" I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    img: "assets/images/gray image.jpeg"
  },
];
console.log(commentInfo);

function createComment(commentsArray) {
    const commentSection = document.getElementById("comment-section");
    commentSection.innerHTML = '';
  
    for (let i = commentsArray.length -1; i >= 0; i--) {
      const comment = document.createElement("div");
      comment.classList.add("comment");
      commentSection.appendChild(comment);
  
      const commentImg = document.createElement("div");
    commentImg.classList.add("commentImg");
    commentImg.style.backgroundImage = `url('assets/images/gray image.jpeg')`;
    comment.appendChild(commentImg);    
  
      const commentName = document.createElement("div");
      commentName.classList.add("commentName");
      comment.appendChild(commentName);
  
      const name = document.createElement("div");
      name.innerHTML = commentsArray[i].name;
      commentName.appendChild(name);
  
      const commentDate = document.createElement("div");
      commentDate.classList.add("commentDate");
      commentName.appendChild(commentDate);
  
      const date = document.createElement("div");
      date.innerHTML = commentsArray[i].date;
      commentDate.appendChild(date);
  
      const commentText = document.createElement("div");
      commentText.classList.add("commentText");
      comment.appendChild(commentText);
  
      const text = document.createElement("p");
      text.innerHTML = commentsArray[i].comment;
      commentText.appendChild(text);

      commentSection.insertBefore(comment, commentSection.firstChild);
  
    }
  }
  
  createComment(commentInfo);

 


const form = document.querySelector('.comments__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const img = "assets/images/gray image.jpeg";
  const name = event.target.name.value;
  const date = new Date().toLocaleDateString();
  const comment = event.target.comment.value;

  const newComment = { name, date, comment,img };
  commentInfo.unshift(newComment);
  createComment(commentInfo);
  event.target.reset();
});