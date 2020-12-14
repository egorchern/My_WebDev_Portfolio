var slide_animation_duration = "0.8s";
let slide_show_index = 0;
let slide_from_left = true;
function slide_query(x) {
    if (x.matches) { // If media query matches
      slide_animation_duration = "0.5s";
    } else {
      slide_animation_duration = "0.8s";
    }
}
let content_array = [null, null, null, null];
let x = window.matchMedia("(max-width: 739.999px)");
slide_query(x);
x.addListener(slide_query);
function bind_ajax_requests(){
    let pages_url = location.href + "Assets" + "/Pages";
    $.ajax({
        type: "GET",
        url: pages_url + "/about_myself.txt",
        
        success: function (response) {
            content_array[0] = response;
        }
    });
    $.ajax({
        type: "GET",
        url: pages_url + "/relevant_experience.txt",
        
        success: function (response) {
            content_array[1] = response;
        }
    });
    $.ajax({
        type: "GET",
        url: pages_url + "/projects.txt",
        
        success: function (response) {
            content_array[2] = response;
        }
    });
    $.ajax({
        type: "GET",
        url: pages_url + "/academics.txt",
        
        success: function (response) {
            content_array[3] = response;
        }
    });
}
bind_ajax_requests();
$(function () {

    $('#nav-list > li').bind("click", function (e) {
        load_content(this.id);
    });
    load_content("About_myself");
    
    

});

function load_content(id) {
    let content_to_load = ``;
    $('.modall').remove();
    $('#main').remove();
    $('#nav-list > li > span').removeClass("active");
    $(`#${id} > span`).addClass("active");
    let index;
    if(id === "About_myself"){
        index = 0;
    }
    else if(id === "Relevant_experience"){
        index = 1;
    }
    else if(id === "Projects"){
        index = 2;
    }
    else if(id === "Academics"){
        index = 3;
    }
    content_to_load = content_array[index];
    if(content_to_load === null){
        setTimeout(function(){load_content(id)}, 70);
        return false;
    }
    $('main').prepend(content_to_load);
    bind_left_slide_animation('#main');
    $(function () {
        $('.media_containers').bind("click", function(e){
            $('#personal_profile').empty();
            let refers = this.dataset.refs;
            let content = ``;
            if (refers === "resume"){
                content = `
                <div id="slide-down-container" style="display:none;position:relative;">
                    <a href="https://drive.google.com/file/d/1oJ7tTAUINkz5HnmWAvJrA9KPFMmL_jON/view?usp=sharing" target='_blank'>Click to download my CV</a>
                    <span style="font-size: 24px;position:absolute;right:5px;user-select: none;cursor:pointer" onclick="$('#slide-down-container').slideUp();">&times</span>
                </div >

                `;
                
            }
            else if(refers === "email"){
                content = `
                <div id="slide-down-container" style="display:none;position:relative;">
                    <span>egorch.formal@gmail.com</span>
                    <span style="font-size: 24px;position:absolute;right:5px;user-select: none;cursor:pointer" onclick="$('#slide-down-container').slideUp();">&times</span>
                </div >
                `
            }
            else if(refers === "phone"){
                content = `
                <div id="slide-down-container" style="display:none;position:relative;">
                    <span>+447827986635</span>
                    <span style="font-size: 24px;position:absolute;right:5px;user-select: none;cursor:pointer" onclick="$('#slide-down-container').slideUp();">&times</span>
                </div >
                `
            }
            $('#personal_profile').append(content);
            $('#slide-down-container').slideDown();
        });
    });
}

function bind_left_slide_animation(selector) {
    
    if (slide_from_left === true){
        $(selector).css("transform", "translateX(-100%)");
        slide_from_left = false;
    }
    else{
        $(selector).css("transform", "translateX(100%)");
        slide_from_left = true;
    }
    setTimeout(function () {
        $(selector).css({
            "animation-name": "slide-in",
            "animation-duration": slide_animation_duration,
            "animation-fill-mode": "forwards",
            "animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1.275)"

        });

    }, 65);

}

let image_sources = [];

function expandProject(prjID) {

    var str = prjID;
    var num = Number(str.replace(/prj/i, ""));
    var implementedStrings = ["C#, using WPF as the interface framework", "HTML + CSS(Bootsrap included) + JS(jQuery)", "HTML + CSS(Bootsrap included) + JS(jQuery)", "Flask(Python) + HTML + CSS(Bootsrap included) + JS(jQuery)", "C#, using WPF as the interface framework", "HTML + CSS(Bootsrap included) + JS(jQuery)", "HTML + CSS(Bootsrap included) + JS", "HTML + JS", "HTML + CSS(Bootsrap included) + JS"];
    var featuresForProjects = [
        ["AI", "Save/Load", "Archive of Played Games", "Fischer Random Chess"],
        ["Dynamic addition of bookmarks", "Responsive", "Visual layering of bookmarks"],
        ["Help pages with rules", "Same minesweeper but in the browser", "Modern interface"],
        ["Responsive design", "Asynchronous load of content", "Customly made API"],
        ["Quick algrorithm", "Responsive interface", "Shows intermidiate simplex tables"],
        ["Animations on scroll","Responsive", "Fast"],
        ["Help page", "Hold piece feature", "Modern interface"],
        ["No external libraries", "Performance"],
        ["Dark theme", "Autosave", "Single-page", "Import && Export"]
    ];
    let slide_show_lists = [
        ["Assets/prj1_slide1.PNG", "Assets/prj1_slide2.PNG", "Assets/prj1_slide3.PNG"],
        ["Assets/prj2_slide1.PNG", "Assets/prj2_slide2.PNG", "Assets/prj2_slide3.PNG"],
        ["Assets/prj3_slide1.PNG", "Assets/prj3_slide2.PNG", "Assets/prj3_slide3.PNG", "Assets/prj3_slide4.PNG"],
        ["Assets/prj4_slide1.PNG", "Assets/prj4_slide2.PNG", "Assets/prj4_slide3.PNG"],
        ["Assets/prj5_slide1.PNG", "Assets/prj5_slide2.PNG"],
        ["Assets/prj6_slide1.PNG", "Assets/prj6_slide2.PNG","Assets/prj6_slide3.PNG" ],
        ["Assets/prj7_slide1.PNG", "Assets/prj7_slide2.PNG"],
        ["Assets/prj8_slide1.PNG", "Assets/prj8_slide2.PNG"],
        ["Assets/prj9_slide1.PNG", "Assets/prj9_slide2.PNG", "Assets/prj9_slide3.PNG"]
    ];
    var githubLinks = ["https://github.com/egorchern/Project_ChessWithInterface", "https://github.com/egorchern/bookmarker", "https://github.com/egorchern/minesweeper", "https://github.com/egorchern/Compare_flask", "https://github.com/egorchern/Simplex_Solver", "https://github.com/egorchern/MyTutor", "https://github.com/egorchern/Tetris", "https://github.com/egorchern/Snake"];
    var descriptions = [
        "This application was made with WPF which is the modern framework for developing desktop apps with C languages. My chess app includes a choice to have control over both sides or play against an AI which utilizes parallel processing. Everything has been done from scratch except for the visual assets which were taken from royalty-free image website. This project also includes an interfacing app to connect to an offline database. Every completed game automatically gets recorded in the database so that the user can analyze them later. The games can be queried for several parameters that can be mixed together to find the intended game(s)",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/bookmarker/' target='_black'>here</a><br>This project is a web site hosted on GitHub Pages.   website allows users to add a visual bookmark via a user-friendly interface which can be maximized or minimized by clicking an appropriate button again. The bookmark data is stored permanently via cookies. Bookmark tiles are then generated dynamically via JavaScript. Bookmarks can be easily deleted via another menu that can be expanded via the minus button at the top of the page. The site is minimalistic in its design, as it only includes the necessary details.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/minesweeper/' target='_black'>here</a><br>I have remade the original Minesweeper that was only available on windows, I have used modern web development technologies such as flexbox and jQuery. This simple yet quite addictive game can now be experienced on all devices that are capable of running a browser. I have also added a feature that allows to input a custom playing field with a user selected number of mines.",
        "You can have a look at the website by clicking <a href='https://gocompare.herokuapp.com/' target='_black'>here</a><br></br>I always wanted all of reviews to be accessible from one location without having to go to all the websites and manually comparing reviews and scores. I have achieved just that. The website uses AJAX to make requests to the server that runs on Flask. The server then web-scrapes the websites and returns them in turn to the client-side JS. The contents are then loaded asyncrhonously to enhance the user experince. For example the user can have a look at scores form one site while others are loading.",
        "This application solves linear optimisation problems. I decided to make it since I could not find another app that would also show all the workings and not just the final result. The program utilizes a two-step simplex method to solve the problem. The process is very quick and the message box is displayed with the answer in about 1-4s for problems with 1-4 inequalities",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/MyTutor/' target='_black'>here</a><br></br>This is a short, static, front-end focused website that I've created to promote my tutoring services. It is responsive and utilizes scroll track that then animates in page content. The pages are designed in a tile layout (one block element per tile). Also, the scroll animations make the user focus on every part of the webpage before reading next tile.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Tetris/' target='_black'>here</a><br></br>This is a remake of a classical game called Tetris. I remade it in browser without using any game engines or libraries (except for Bootstrap). The game logic is made using objects and the drawing is done via HTML5 canvas element. New shapes can easily be added by modifying shapes dictionary.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Snake/' target='_black'>here</a><br></br>This is a remake of classical game that was popular on early mobile phones - Snake. Implementation is made using html canvas and processing made at every frame. All rules follow the original ones, score is recorder at the top menu. Restart available without having to reload the page.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Youtube_note_taker/' target='_black'>here</a><br></br>This website allows you to make notes on YouTube videos side by side. You can then see notes recorder to the right of the video, by clicking on them you will skip to the time that note was taken, this way notes can be reviset and YouTube video slice watched again for revision. All of the data is stored client-side and autosaved. Import or Export data is implemented as well."
    ];

    $(document).ready(function () {
        $('#wrapper').css("overflow-y","hidden");

        slide_show_index = 0;
        image_sources = slide_show_lists[num];
        reset_slideshow("my-slide-show");
        load_slideshow("my-slide-show");
        $('.modall').css("display", "flex");
        $("#implemented").html(implementedStrings[num]);
        var featureList = featuresForProjects[num];
        $(".featureGrid").empty();
        for (var i = 0; i < featureList.length; i++) {
            $(".featureGrid").append("<p>" + featureList[i] + "</p>");
        }
        $("#githubLink").attr("href", githubLinks[num]);
        $("#descr").empty();
        $("#descr").append("<p>" + descriptions[num] + "</p>");


    });







}

function reset_slideshow(id) {
    $(`#${id} > .slide-show-dots-container`).empty();
    $(`#${id} .right-slide-btn`).unbind();
    $(`#${id} .left-slide-btn`).unbind();
    $(`#${id} > .slide-show-dots-container > .slide-show-dot`).unbind();
}

function load_slideshow(id) {
    $(`#${id} > .slide-show-image-container > img`).attr("src", image_sources[slide_show_index]);
    for (let i = 0; i < image_sources.length; i++) {
        $(`#${id} > .slide-show-dots-container`).append(`
        <div class='slide-show-dot' data-index='${i}'>
        </div>
        `)
    }
    $(`#${id} > .slide-show-dots-container > .slide-show-dot:first-child`).addClass("slide-show-dot-active");
    $(`#${id} .right-slide-btn`).bind("click", function (e) {
        if (slide_show_index < image_sources.length - 1) {
            slide_show_index += 1;
            $(`#${id} > .slide-show-image-container > img`).attr("src", image_sources[slide_show_index]);
            $(`#${id} > .slide-show-dots-container > .slide-show-dot`).removeClass("slide-show-dot-active");
            $(`#${id} > .slide-show-dots-container > .slide-show-dot:nth-child(${slide_show_index + 1})`).addClass("slide-show-dot-active");
        }
    });
    $(`#${id} .left-slide-btn`).bind("click", function (e) {
        if (slide_show_index > 0) {
            slide_show_index -= 1;
            $(`#${id} > .slide-show-image-container > img`).attr("src", image_sources[slide_show_index]);
            $(`#${id} > .slide-show-dots-container > .slide-show-dot`).removeClass("slide-show-dot-active");
            $(`#${id} > .slide-show-dots-container > .slide-show-dot:nth-child(${slide_show_index + 1})`).addClass("slide-show-dot-active");
        }
    });
    $(`#${id} > .slide-show-dots-container > .slide-show-dot`).bind("click", function (e) {
        let index = Number(this.dataset.index);
        slide_show_index = index;
        $(`#${id} > .slide-show-image-container > img`).attr("src", image_sources[slide_show_index]);
        $(`#${id} > .slide-show-dots-container > .slide-show-dot`).removeClass("slide-show-dot-active");
        $(`#${id} > .slide-show-dots-container > .slide-show-dot:nth-child(${slide_show_index + 1})`).addClass("slide-show-dot-active");
    })

}
