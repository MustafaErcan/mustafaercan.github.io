document.addEventListener('DOMContentLoaded', function(){
    let free_ans_btn = document.getElementById('free_button');

    free_ans_btn.addEventListener('click', function() {
        free_text = document.getElementById('free_answer').value.toLowerCase();
        if (free_text === "dopefish")
        {
            document.getElementById('free_answer').style.backgroundColor = 'green';
            free_ans_btn.parentElement.querySelector("p").innerHTML = "Correct!";

        }
        else if (free_text !== "dopefish")
        {
            document.getElementById('free_answer').style.backgroundColor = 'red';
            free_ans_btn.parentElement.querySelector("p").innerHTML = "Incorrect";
        }
        //debugger;
    })
});

function check_multp_answer(event)
{
    let answer_btn = event.srcElement;
    if (answer_btn.className === "correct")
    {
        answer_btn.style.backgroundColor = 'green';
        answer_btn.parentElement.querySelector("p").innerHTML = "Correct!";
    }
    else if (answer_btn.className === "incorrect")
    {
        answer_btn.style.backgroundColor = 'red';
        answer_btn.parentElement.querySelector("p").innerHTML = "Incorrect!";
    }
}