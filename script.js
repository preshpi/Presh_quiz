// displaying the first block of question
document.getElementsByClassName('box')[0].style.display = "block";

// DEFINING THE NEXT FUNCTION
function next(id) {
    document.getElementsByClassName('box')[id-1].style.display = "none";
    document.getElementsByClassName('box')[id].style.display = "block";
}





function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    
    alert("your score is: "+ score);
}