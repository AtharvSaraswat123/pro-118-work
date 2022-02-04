function check_sketch(){
    timer_counter=timer_counter+1;
    document.getElementById("timer").innerHTML="Timer: "+timer_counter;
    if(timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed"){
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
    if(answer_holder=="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
}
sketch="";
function setup(){
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
}
quick_draw_data_set = ['book', 'pencil', 'paper', 'bottle', 'alarm', 'apple', 'banana'];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML="Sketch To be Drawn: "+sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
function updateCanvas(){
    random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 2);
console.log(quick_draw_data_set.length);
sketch=quick_draw_data_set[random_no];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 3);
sketch=quick_draw_data_set[random_no];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 4);
sketch=quick_draw_data_set[random_no];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 5);
sketch=quick_draw_data_set[random_no];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 6);
sketch=quick_draw_data_set[random_no];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 7);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML="Sketch To be Drawn: "+sketch;
}
function draw(){
    check_sketch();
}
if(drawn_sketch==sketch){
    answer_holder="set";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score;
}