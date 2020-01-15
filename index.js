var container = document.querySelector("#comment");
var button = document.querySelector("button");
var input = document.querySelector("input");
var first = '<div class="comment-list"><img  class="resize" src="dance.jpg" alt=""><div class="actual-comment"><p> <strong>picasso </strong>';
var second = '</p><div class="function"><p class="gray">4 days ago <strong> reply</strong></p>    </div><i class="far fa-heart"></i></div>';
button.addEventListener("click", function () {
    input.value;
    container.innerHTML += first + input.value + second;
    input.value = "";
});
