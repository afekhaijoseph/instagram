var container = document.querySelector("#comment");
var button = document.querySelector("button");
var container2=document.querySelector("#your-comment");
var input = container2.querySelector("input");
var replies = document.getElementsByClassName("clap-back");
var likes = document.getElementsByClassName("fa-heart");
var num = 11;
var first ='<div class="comment-list" ';
var second='><img  class="resize" src="dance.jpg" alt=""><div class="actual-comment"><p> <strong>picasso </strong>';
var third = '</p><div class="function"><p class="gray">4 days ago <strong> reply</strong></p>    </div><i class="far fa-heart"></i></div>';
var fourth= '<div id="reply-content"><img src="glasses.jpeg" alt=""><div class="actual-comment"><p> <strong>pyro </strong>';
var fifth = ' </p><div class="function"><p class="gray">1hr ago <strong class="reply"> reply</strong></p>    </div></div></div>';
   
     function postComment(commentId){
        document.getElementById("commentId").outerHTML+=fourth + input.value + fifth;
        num++;
        input.value;
        container.innerHTML += first +'"'+second + input.value + third;
        input.value="";
    }
    for(var i=0; i < likes.length; i++){
        likes[i].addEventListener("click", function(){
        this.classList.toggle("liked");
       })
}
    for(var i=0; i < replies.length; i++){
        replies[i].addEventListener("click", function(){
        input.getAttribute('placeholder')
        input.setAttribute('placeholder', 'Add a reply');
    });
}
