var container = document.querySelector("#comment");
var button = document.querySelector("button");
var container2 = document.querySelector("#your-comment");
var input = container2.querySelector("input");
var replies = document.getElementsByClassName("clap-back");
var likes = document.getElementsByClassName("fa-heart");
var num = 11;
var first = '<div class="comment-list" ';
var second = '><img  class="resize" src="dance.jpg" alt=""><div class="actual-comment"><p> <strong>picasso </strong>';
var third = '</p><div class="function"><p class="gray">4 days ago <input type="submit" value="reply" class="clap-back"onclick="replyComment(commentId)"></p> </div> </div><i class="far fa-heart"></i></div></div>';
var fourth = '<div id="reply-content"><img src="glasses.jpeg" alt=""><div class="actual-comment"><p> <strong>pyro </strong>';
var fifth = '</p><div class="function"><p class="gray">1hr ago <strong class="reply"> reply</strong></p></div></div></div>';
var selectComment;
function postComment() {
    if (input.getAttribute('placeholder') == "Add a reply") {
        selectComment.outerHTML += fourth + input.value + fifth;
    }
    else {
        num++;
        input.value;
        container.innerHTML += first + '"' + "id=comment" + num + '"' + second + input.value + third;
    }
    input.value = "";
    input.setAttribute("placeholder", "Add a comment");
}
for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function () {
        this.classList.toggle("liked");
    });
}
for (var i = 0; i < replies.length; i++) {
    replies[i].addEventListener("click", function () {
        if (input.placeholder == "Add a comment") {
            input.getAttribute('placeholder');
            input.setAttribute('placeholder', 'Add a reply');
        }
        else {
            input.getAttribute("placeholder");
            input.setAttribute("placeholder", "Add a comment");
        }
    });
}
function replyComment(commentId) {
    selectComment = document.getElementById(commentId);
}
