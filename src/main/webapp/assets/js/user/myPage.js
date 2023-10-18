

document.addEventListener("DOMContentLoaded", function (){


    // 버튼 클릭하면 해당 카테고리만 나열하고 나머지는 디스플레이 none 이벤트
    const contentsCategory = document.querySelectorAll(".contents-category"); // 카테고리들
    const shipping = document.querySelector(".user-shipping");
    const review = document.querySelector(".user-review");
    const board = document.querySelector(".user-board");
    const ripple = document.querySelector(".user-ripple");
    const removeFrm = document.forms['removeFrm'];

    contentsCategory.forEach( contents => {
        contents.addEventListener("click", function () {
            if(contents.value === "shipping") {
                shipping.style.display = "inline-block";
                review.style.display = "none";
                board.style.display = "none";
                ripple.style.display = "none";
            }
            else if(contents.value === "review"){
                review.style.display = "inline-block";
                shipping.style.display = "none";
                board.style.display = "none";
                ripple.style.display = "none";
            }
            else if(contents.value === "board") {
                board.style.display = "inline-block";
                shipping.style.display = "none";
                review.style.display = "none";
                ripple.style.display = "none";
            }
            else {
                ripple.style.display = "inline-block";
                shipping.style.display = "none";
                review.style.display = "none";
                board.style.display = "none";
            }
        })
    })


    // 회원탈퇴 버튼 클릭
    const removeUserBtn = document.getElementById("remove-user-btn");
    removeUserBtn.addEventListener("click", function () {
        if(confirm("주의 : 정말 회원탈퇴 하시겠습니까?")){
            removeFrm.action="/user/remove?memberId="+removeUserBtn.dataset.id;
            removeFrm.submit();
        }
    })
    
})