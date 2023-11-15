//1)\\
let twitter = document.querySelector(
  ".col-md-4.blog-sidebar .p-4:last-of-type .list-unstyled li:nth-of-type(2) a"
);
const removeTwitter = function () {
  twitter.remove();
};
removeTwitter();

//2)\\
let continuaLeggere = document.querySelector(".col-md-6 a");
const removeParent = function () {
  continuaLeggere.removeParent();
};
removeParent();

//3)\\
let autori=document.querySelector(".col-md-8 .blog-post:nth-of-type(1) .blog-post-meta a")
const find=function(evOnMouse){
  alert(evOnMouse.target.innerText)
}
let primoAlert=autori.addEventListener("mouseover",find)