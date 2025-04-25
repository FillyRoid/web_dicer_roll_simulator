//every dice dot in an array form
var dot_list = [
    document.getElementById("dot1"), 
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4"),
    document.getElementById("dot5"),
    document.getElementById("dot6"),
];


var full_dice = document.getElementById("dice1");

var ani_dur = "1.5s";
var new_roll = 0;
var old_roll = 0;

//style-array of every dot after every animation into a number
dot_style = [
    //1. dot
    [
        "top: 50px; left: 50px; width: 50px; height: 50px; border-radius: 30px;",
        "top: 23px; left: 97px; width: 30px; height: 30px; border-radius: 30px;",
        "top: 23px; left: 97px; width: 30px; height: 30px; border-radius: 30px;",
        "top: 23px; left: 97px; width: 30px; height: 30px; border-radius: 30px;",
        "top: 23px; left: 97px; width: 30px; height: 30px; border-radius: 30px;",
        "top: 10px; left: 23px; width: 30px; height: 30px; border-radius: 30px;"
    ],
    //2. dot 
    [
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 97px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 97px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 97px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 97px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 10px; left: 97px; background-color: rgba(0, 0, 0, 1);"
    ],
    //3. dot
    [
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 1);",
        "top: 23px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 23px; left: 23px; background-color: rgba(0, 0, 0, 1);",
        "top: 60px; left: 23px; background-color: rgba(0, 0, 0, 1);"
    ],
    //4. dot
    [
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 97px; left: 97px; background-color: rgba(0, 0, 0, 1);",
        "top: 97px; left: 97px; background-color: rgba(0, 0, 0, 1);",
        "top: 60px; left: 97px; background-color: rgba(0, 0, 0, 1);"
    ],
    //5. dot
    [
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 1);",
        "top: 110px; left: 23px; background-color: rgba(0, 0, 0, 1);"
    ],
    //6. dot
    [
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 60px; left: 60px; background-color: rgba(0, 0, 0, 0);",
        "top: 110px; left: 97px; background-color: rgba(0, 0, 0, 1);",
    ]
];





//animation from number to base
function dice_base(old_num) {
    if (old_num == 1) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }
    } else if (old_num == 2) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }
    } else if (old_num == 3) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }
    } else if (old_num == 4) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }
    } else if (old_num == 5) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }

    } else if (old_num == 6) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_roll${old_num}_base ${ani_dur}`;
        }
    }
}


//animation from base to number
function dice_roll(new_num) {
    if (new_num == 1) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    } else if (new_num == 2) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    } else if (new_num == 3) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    } else if (new_num == 4) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    } else if (new_num == 5) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    } else if (new_num == 6) {
        for (let i = 0; i < 6; i++) {
            dot_list[i].style.animation = `dot${i+1}_base_roll${new_num} ${ani_dur}`
        }
    }   
}


//main function 
document.getElementById("dice1").onclick = function() {
    old_roll = new_roll;        //var get old number
    new_roll = Math.floor(Math.random() * 6) + 1;       //randomize new number
    
    dice_base(old_roll);    //animation function for "into base"

    if (old_roll == 0) {
        full_dice.style.animation = `dice_start_to_base ${ani_dur}`;        //individual animation (only first roll)
    } else {
        full_dice.style.animation = `dice_to_base ${ani_dur}`;      //animation for dice background
    }

    setTimeout(function() {         //timer setting
        for (let i = 0; i < 6; i++) {
            dot_list[i].style = dot_style[i][new_roll-1];     //setting new parameter for tags, that can be stay after animation
        }
        full_dice.style = "background-color: rgb(128, 160, 128);"   //same here for the dice background
        dice_roll(new_roll);                                            //new animation (into number)
        full_dice.style.animation = `dice_to_final ${ani_dur}`;         //dice background animation
        document.getElementById("score").innerHTML = `Your Roll: ${new_roll}`

    }, 1500);

}
