var slide_animation_duration = "0.8s";
let slide_show_index = 0;
let slide_from_left = true;
let selected_index = -1;
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
    let pages_url = location.href + "/Assets" + "/Pages";
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
    
    if(index != selected_index){
        let content_to_load = ``;
        $('.modall').remove();
        $('#main').remove();
        $('#nav-list > li > span').removeClass("active");
        $(`#${id} > span`).addClass("active");
        
        content_to_load = content_array[index];
        if(content_to_load === null){
            setTimeout(function(){load_content(id)}, 70);
            return false;
        }
        selected_index = index;
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
            "animation-timing-function": "cubic-bezier(0.19, 1, 0.22, 1)"

        });

    }, 65);

}

let image_sources = [];

function expandProject(prjID) {

    var str = prjID;
    var num = Number(str.replace(/prj/i, ""));
    var implementedStrings = ["C#, using WPF as the interface framework", "HTML + CSS(Bootsrap included) + JS(jQuery)", "HTML + CSS(Bootsrap included) + JS(jQuery)", "Flask(Python) + HTML + CSS(Bootsrap included) + JS(jQuery)", "C#, using WPF as the interface framework", "HTML + CSS(Bootsrap included) + JS(jQuery)", "HTML + CSS(Bootsrap included) + JS", "HTML + JS", "HTML + CSS(Bootsrap included) + JS", "HTML + CSS(Bootstrap included) + JS(React)", "HTML + CSS(Bootstrap included) + JS(React)", "HTML + CSS + JS", "HTML + CSS(Bootstrap included) + JS(React) + Node.js(Express)"];
    var featuresForProjects = [
        ["AI", "Save/Load", "Archive of Played Games", "Fischer Random Chess"],
        ["Dynamic addition of bookmarks", "Responsive", "Visual layering of bookmarks"],
        ["Help pages with rules", "Same minesweeper but in the browser", "Modern interface"],
        ["Responsive design", "Asynchronous load of content", "Customly made API"],
        ["Quick algrorithm", "Responsive interface", "Shows intermidiate simplex tables"],
        ["Animations on scroll","Responsive", "Fast"],
        ["Help page", "Hold piece feature", "Modern interface"],
        ["No external libraries", "Performance"],
        ["Dark theme", "Autosave", "Single-page", "Import && Export"],
        ["Single page", "Reactful", "AI"],
        ["No libraries used for graphing or algorithms", "Responsive design", "Efficient algorithms"],
        ["No libraries", "Scaling difficulty", "Upgrade system"],
        ["Authentication system", "Secure", "Responsive", "Real-time"]
    ];
    let slide_show_lists = [
        ["Assets/prj1_slide1.webp", "Assets/prj1_slide2.webp", "Assets/prj1_slide3.webp"],
        ["Assets/prj2_slide1.webp", "Assets/prj2_slide2.webp", "Assets/prj2_slide3.webp"],
        ["Assets/prj3_slide1.webp", "Assets/prj3_slide2.webp", "Assets/prj3_slide3.webp", "Assets/prj3_slide4.webp"],
        ["Assets/prj4_slide1.webp", "Assets/prj4_slide2.webp", "Assets/prj4_slide3.webp"],
        ["Assets/prj5_slide1.webp", "Assets/prj5_slide2.webp"],
        ["Assets/prj6_slide1.webp", "Assets/prj6_slide2.webp","Assets/prj6_slide3.webp" ],
        ["Assets/prj7_slide1.webp", "Assets/prj7_slide2.webp"],
        ["Assets/prj8_slide1.webp", "Assets/prj8_slide2.webp"],
        ["Assets/prj9_slide1.webp", "Assets/prj9_slide2.webp", "Assets/prj9_slide3.webp"],
        ["Assets/prj10_slide1.webp", "Assets/prj10_slide2.webp", "Assets/prj10_slide3.webp"],
        ["Assets/prj11_slide1.webp", "Assets/prj11_slide2.webp", "Assets/prj11_slide3.webp", "Assets/prj11_slide4.webp", "Assets/prj11_slide5.webp"],
        ["Assets/prj12_slide1.webp", "Assets/prj12_slide2.webp", "Assets/prj12_slide3.webp", "Assets/prj12_slide4.webp"],
        ["Assets/prj13_slide1.webp", "Assets/prj13_slide2.webp", "Assets/prj13_slide3.webp"]
    ];
    var githubLinks = ["https://github.com/egorchern/Project_ChessWithInterface", "https://github.com/egorchern/bookmarker", "https://github.com/egorchern/minesweeper", "https://github.com/egorchern/Compare_flask", "https://github.com/egorchern/Simplex_Solver", "https://github.com/egorchern/MyTutor", "https://github.com/egorchern/Tetris", "https://github.com/egorchern/Snake", "https://github.com/egorchern/Nought_and_Crosses_React", "https://github.com/egorchern/Start_warriors", "https://github.com/egorchern/Real_message"];
    var descriptions = [
        "This application was made with WPF which is the modern framework for developing desktop apps with C languages. My chess app includes a choice to have control over both sides or play against an AI which utilizes parallel processing. Everything has been done from scratch except for the visual assets which were taken from royalty-free image website. This project also includes an interfacing app to connect to an offline database. Every completed game automatically gets recorded in the database so that the user can analyze them later. The games can be queried for several parameters that can be mixed together to find the intended game(s)",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/bookmarker/' target='_black'>here</a><br>This project is a web site hosted on GitHub Pages.   website allows users to add a visual bookmark via a user-friendly interface which can be maximized or minimized by clicking an appropriate button again. The bookmark data is stored permanently via cookies. Bookmark tiles are then generated dynamically via JavaScript. Bookmarks can be easily deleted via another menu that can be expanded via the minus button at the top of the page. The site is minimalistic in its design, as it only includes the necessary details.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/minesweeper/' target='_black'>here</a><br>I have remade the original Minesweeper that was only available on windows, I have used modern web development technologies such as flexbox and jQuery. This simple yet quite addictive game can now be experienced on all devices that are capable of running a browser. I have also added a feature that allows to input a custom playing field with a user selected number of mines.",
        "You can have a look at the website by clicking <a href='https://gocompare.herokuapp.com/' target='_black'>here</a><br></br>I always wanted all of reviews to be accessible from one location without having to go to all the websites and manually comparing reviews and scores. I have achieved just that. The website uses AJAX to make requests to the server that runs on Flask. The server then web-scrapes the websites and returns them in turn to the client-side JS. The contents are then loaded asyncrhonously to enhance the user experince. For example the user can have a look at scores form one site while others are loading.",
        "This application solves linear optimisation problems. I decided to make it since I could not find another app that would also show all the workings and not just the final result. The program utilizes a two-step simplex method to solve the problem. The process is very quick and the message box is displayed with the answer in about 1-4s for problems with 1-4 inequalities",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/MyTutor/' target='_black'>here</a><br></br>This is a short, static, front-end focused website that I've created to promote my tutoring services. It is responsive and utilizes scroll track that then animates in page content. The pages are designed in a tile layout (one block element per tile). Also, the scroll animations make the user focus on every part of the webpage before reading next tile.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Tetris/' target='_black'>here</a><br></br>This is a remake of a classical game called Tetris. I remade it in browser without using any game engines or libraries (except for Bootstrap). The game logic is made using objects and the drawing is done via HTML5 canvas element. New shapes can easily be added by modifying shapes dictionary.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Snake/' target='_black'>here</a><br></br>This is a remake of classical game that was popular on early mobile phones - Snake. Implementation is made using html canvas and processing made at every frame. All rules follow the original ones, score is recorder at the top menu. Restart available without having to reload the page.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Youtube_note_taker/' target='_black'>here</a><br></br>This website allows you to make notes on YouTube videos side by side. You can then see notes recorder to the right of the video, by clicking on them you will skip to the time that note was taken, this way notes can be reviset and YouTube video slice watched again for revision. All of the data is stored client-side and autosaved. Import or Export data is implemented as well.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Nought_and_Crosses_React/' target='_black'>here</a><br></br>This is the website I made when I started using React.js, it is a simple Nought-and-Crosses game with an AI made with Minimax algorithm. Due to simple complexity of the game, the AI is unbetable. Game can be quickly restarted by pressing R when the current game has ended.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/GraphMaster/' target='_black'>here</a><br></br>I mainly did this website to improve my skills in React and to check myself when doing exam questions on graph algorithms for Further maths. This website is centered around creating and using algorithms on graphs. The GUI allows for easy creation of graphs with modern front-end design. Graphs can be visially examined after creation, this is achieved via HTML5 canvas. Nodes are positioned in n-gon using mathematical calculations. Algorithms can then be executed on the graph, and relevant edges highlighted to show the path.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/Start_warriors/' target='_black'>here</a><br></br>This is another browser game made using HTML5 canvas. You move with standard controls of W,A,S,D and the ship shoots bullets automatically based on your attack rate. The goal is to get as high of a score as you can. I've always liked games similar to this one, where the difficulty as well as your strength scale with time, and you try to get as high of a score as possible. This game uses OOP to optimise the readability and code length.",
        "You can have a look at the website by clicking <a href='https://real-message.herokuapp.com/' target='_black'>here</a><br></br>This is the website I've made to practice my node.js. I've learnt fundamentals and proceeded to Express library that is very similar to Flask in Python. This website uses SocketIO and React, which allows it to be quite fast and efficient. Message history is stored in a Postgres DB via Heroku addon. Authentication is done via auth tokens in cookies that are also stored in a Postgres DB. Allows one user to be logged in on different devices."
    ];

    $(document).ready(function () {
        $('#wrapper').css("overflow-y","hidden");

        slide_show_index = 0;
        image_sources = slide_show_lists[num];
        reset_slideshow("my-slide-show");
        load_slideshow("my-slide-show");
        document.querySelector(".modall-content").classList.toggle("out");
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

function close_modall(){
    
    let element = document.querySelector(".modall-content");
    element.classList.toggle("out");
    setTimeout(() => {
        element = document.querySelector(".modall");
        element.style.display = "none";
        $('#wrapper').css("overflow-y","auto");
    }, 500);
    
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
