function moveSlider(imgNum) {
	var current_img = $(".show");
    var current_img_id = current_img.attr("id");
    var current_num = idToInt(current_img_id);
	var current_selector = $(".selector-show");
	
    move = imgNum - current_num;

    if(move > 0){
        for (i = 0; i < move; i++) {
            rightAnimation(500/move);
        } 
    }
    else{
        for (i = 0; i > move; i--) {
            leftAnimation(500/(move * -1));
        } 
    }

    if (imgNum == 1) {
		target_img = $("#img-1");
		target_selector = $("#selector-1");
	}
    else if (imgNum == 2) {
		target_img = $("#img-2");
		target_selector = $("#selector-2");
	}
    else if (imgNum == 3) {
		target_img = $("#img-3");
		target_selector = $("#selector-3");
	}
    else if (imgNum == 4) {
		target_img = $("#img-4");
		target_selector = $("#selector-4");
	}

    classManipulation(current_img, target_img, current_selector, target_selector);
}

function idToInt(img_id){
    if (img_id == "img-1") {
        return "1";
	}
    else if (img_id == "img-2") {
		return "2";
	}
    else if (img_id == "img-3") {
		return "3";
	}
    else if (img_id == "img-4") {
		return "4";
	}
}

function nextImg() {
	rightAnimation(500);
}

function prevImg() {
    leftAnimation(500);
}

function rightAnimation(duration){
    var img_holder = $('#img-holder');
    var current_img = $(".show");
    var current_img_id = current_img.attr("id");
    var current_num = idToInt(current_img_id);

    if(current_num < 4){
        $(img_holder).animate({
            'left': '-=350px',
        }, duration);

        changeFoward(current_img);
    }
    else{
        $(img_holder).animate({
            'left': '0px',
        }, duration);

        goToStart(current_img);
    }
}

function leftAnimation(duration){
    var img_holder = $('#img-holder');
    var current_img = $(".show");
    var current_img_id = current_img.attr("id");
    var current_num = idToInt(current_img_id);

    if(current_num > 1){
        $(img_holder).animate({
            'left': '+=350px',
        }, duration);
    
        changeBackward(current_img);
    }
    else{
        $(img_holder).animate({
            'left': '-=1050px',
        }, duration);

        gotoEnd(current_img);
    }
}

function changeFoward(current_img){
    var current_img_id = current_img.attr("id");
    var current_num = idToInt(current_img_id);
    var current_selector = $(".selector-show");

    if (current_num == 1) {
		target_img = $("#img-2");
		target_selector = $("#selector-2");
	}
    else if (current_num == 2) {
		target_img = $("#img-3");
		target_selector = $("#selector-3");
	}
    else if (current_num == 3) {
		target_img = $("#img-4");
		target_selector = $("#selector-4");
	}

    classManipulation(current_img, target_img, current_selector, target_selector);
}

function changeBackward(current_img){
    var current_img_id = current_img.attr("id");
    var current_num = idToInt(current_img_id);
    var current_selector = $(".selector-show");

    if (current_num == 2) {
		target_img = $("#img-1");
		target_selector = $("#selector-1");
	}
    else if (current_num == 3) {
		target_img = $("#img-2");
		target_selector = $("#selector-2");
	}
    else if (current_num == 4) {
		target_img = $("#img-3");
		target_selector = $("#selector-3");
	}

    classManipulation(current_img, target_img, current_selector, target_selector);
}


function goToStart(current_img){
    var current_selector = $(".selector-show");

    var target_img = $("#img-1");
	var target_selector = $("#selector-1");

    classManipulation(current_img, target_img, current_selector, target_selector);
}

function gotoEnd(current_img){
    var current_selector = $(".selector-show");

    var target_img = $("#img-4");
	var target_selector = $("#selector-4");

    classManipulation(current_img, target_img, current_selector, target_selector);
}

function classManipulation(current_img, target_img, current_selector, target_selector){
    $(current_img).removeClass("show");
	$(target_img).addClass("show");

    $(current_selector).attr("src", "../Asset/Utility/Empty Eclipse.png");
	$(current_selector).removeClass("selector-show");
	$(target_selector).addClass("selector-show");
	$(target_selector).attr("src", "../Asset/Utility/Current Eclipse.png");
}

setInterval(nextImg, 5000);