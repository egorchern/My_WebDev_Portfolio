var slide_animation_duration = "0.8s";
let slide_show_index = 0;

$(function () {

    $('#nav-list > li').bind("click", function (e) {
        load_content(this.id);
    });
    load_content("About_myself");
    bind_left_slide_animation("#main");
    

});

function load_content(id) {
    let content_to_load = ``;
    $('.modall').remove();
    $('#main').remove();
    $('#nav-list > li > span').removeClass("active");
    $(`#${id} > span`).addClass("active");
    if (id === "About_myself") {
        let about_myself_content = `
        <div id="main">
            <div id="MainGrid">
                <div class="MainGrid-item page_item"  style="display:flex;flex-direction: column;">
                    
                    
                    <p>My name is Egor Chernyshev, I loved all things to do with IT from the age of 13. Since then I've practiced in various fields in IT. I aspire to get a career in web development as a full-stack developer.
                    </p>
                    <div style="display:flex;flex-flow: row wrap;justify-content: center;align-items: center;margin-top:5%;">
                        <div class="media_containers" data-refs="resume">
                            <img src="Assets/Resume_picture.png"  style="max-height: inherit;">
                        </div >
                        <div class="media_containers" data-refs="email">
                            <img src="Assets/email_picture.PNG"  style="max-height: inherit;">
                        </div >
                        <div class="media_containers" data-refs="phone">
                            <img src="Assets/phone_picture.PNG"  style="max-height: inherit;">
                        </div>
                    </div>
                    <div id="personal_profile">

                    </div>
                    
                </div>




                <div class="MainGrid-item page_item">
                    <p class="Heading">My favourite books:</p>
                    <div class="books-grid">
                        <div class="books-grid-item">

                            <div class="books-grid-img">
                                <img src="Assets/witcherIcon.jpg">
                            </div>
                        </div>

                        <div class="books-grid-item">
                            <div class="book-title">
                                <p class="alignCenter">The Witcher Series</p>
                            </div>


                        </div>
                        <div class="books-grid-item">
                            <div class="books-grid-img">
                                <img src="Assets/1984Icon.jpg">
                            </div>
                        </div>
                        <div class="books-grid-item">
                            <div class="book-title">
                                <p class="alignCenter">1984</p>
                            </div>


                        </div>
                        <div class="books-grid-item">
                            <div class="books-grid-img">
                                <img src="Assets/BraveNewWorldIcon.jpg">
                            </div>
                        </div>
                        <div class="books-grid-item">
                            <div class="book-title">
                                <p class="alignCenter">Brave New World</p>
                            </div>


                        </div>

                    </div>
                </div>

                <div class="MainGrid-item page_item" id="aboutMyself">
                    <p class="Heading">About myself:</p>
                    <br>
                    <p>When I was in year 11, I didn't know which A-Levels to pick and what I am going to do in the future as a profession. And one day, roughly in the middle of the academic year, we started doing our game projects in our ICT course. I watched some tutorials on Gamemaker and quickly grew in love with it. It was then that I experienced the joy of overcoming some coding problems and seeing how the seeds of my labour paid off, making the computer bend to your will. I was then filled with other ideas such as making websites and AI's. Though at the time I didn't have enough experience to implement those ideas. I talked with my ICT teacher extensively about that and he was very supportive saying that I would definitely enjoy A-Level Computer Science. That is how I got in love with programming and went on to study CS in College. </p>
                    <br>
                    <p>After enrolling at Bury College, we were introduced to C#. It was very different from my python which was my first programming language. Nevertheless, I've got the hang of basic features and went on to practice some primitive coding problems on Codewars (Website with programming questions of variant difficulty). Towards the end of my first year of college, I got the opportunity to participate in Manchester College's Creative Arts competition. I describe my experience with this event extensively in my "Relevant experience" section. Skipping forward to March 2020, A-Level exams were canceled and the countrywide lockdown began in the UK. After hearing that the university of Harvard has made the majority of their online courses free I've enrolled at CS50 Web Development course. Since then I've learned a lot about fundamentals and some advanced staff of Web Development. In a way, I was happy about the lockdown, since I had an opportunity to study a course that would otherwise cost $1350 but I am getting it for free!</p>
                    <br>
                    <p>However people need some balance between being productive and relaxing, and I've got a range of hobbies to help me with that. I play chess mostly online but on a day when me and my close friend can meet up, we play for hours and hours, trying to best each other mentally. I used to play semi-professionaly while I was in my native country, but upon migrating to UK I couldn't find any local tournaments and side tracked to some other sports. Speaking of sports, I used to play in basketball in my highschool as part of the backup roster. I only got to play in an official match once, but it was super fun and I think I made a decent contribution towards our victory as well as improving my team communication ability. I also enjoy playing video games, especially I like simulation/strategy type of games, like Total War series where you take control of a huge army and can turn the tide of battle with masterful plans and manevuers, even when severely outnumbered. When I play those kind of games, I feel like I am having fun and enhancing my decision making skills at the same time.
                    </p>

                </div>
            </div>
        </div>
        `;
        content_to_load = about_myself_content;
    } else if (id === "Relevant_experience") {
        let experience_content = `
        <div id="main">
            <div class="page_item" id="experience">
                <div>
                    <p class="Heading">My programming languages</p>
                    <div class="featureGrid">
                        <p>C# : 2 Years</p>
                        <p>Python : 1 Year</p>
                        <p>HTML + CSS + JS : 1 Year</p>
                    </div>
                    
                </div>
                <div style="margin-top: 20px; padding:10px;">
                    <p class="Heading">Manchester College's creative arts competition (Programming)</p>
                    <p>In 2018 I was asked if I wanted to be part of a team that would represent Bury College at creative arts competition in Manchester College. I was delighted to take part in my first programming competition. Two other students were picked from different courses. Nobody knew each other but we had similar interests: being interested in tech. While we were travelling to the competition, we casually chatted to better understand each other. We soon learned that the competition didn't have any project idea in mind and instead we were told that we could make whatever we wanted. This threw us off a little bit since we were expecting that we would only need to implement the idea given to us. We settled for a calculator app made in C# that would do normal calculations, simultaneous equations and have a small quiz-style game. That quiz would display an arithmetic expression and the user would need to pick a correct answer from four options. We planned for a quiz to have a varying level of difficulty but that perhaps proved to be a little too ambitious for a three-man team to build everything in four hours. We assigned roles to each other, and I was responsible for the quiz and bringing together all the code and making an interface. I nominated myself to this role since I had a lot of experience with making interface apps in C#. Because of how interface needs to communicate with the back-end, I kind of became a leader of our team, constantly communicating with my team members, asking how they envisioned they code and what interface would suit that.
                        In the end, managed to fulfil most of our project's promises. However, I wasn't quite able to implement varying difficulty in our quiz and our documentation wasn't complete. Still, we enjoyed working together and we each learned something new from each other. We placed third out of eight teams. Our end product could be much better, but we learned a lot about working as a team.</p>
                </div>
                <div style="margin-top: 20px; padding:10px;">
                    <p class="Heading">Work experience placement at M247</p>
                    <p>As a part of my A-Level study at Bury College, we took part in a one-week work experience placement. I have secured a placement at an ISP company called M247. I've done some research on the company beforehand. They mainly focus on providing high-bandwidth internet to other businesses. They also offer varying levels of support ranging from passive support to 24/7 network monitoring. Lastly, they offer security options on those networks such as physical and software firewalls. As part of my work experience placement, I experienced all aspects of IT positions at M247. Firstly I worked with internal IT support, they mainly focused on maintaining hardware at the office and managing employee access levels. I helped with resetting a laptop that required a full wipe. Next, I was placed with the company's two web developers. The fact that I didn't know much about web development at that moment didn't stop me from getting involved with the team. It was my first time seeing a big tech company's git repository, I was amazed by how much commits professional developers make. The code was also cleanly structured with comments appearing at around every ten lines of code. I also got to witness how the deployment process works. Unfortunately, I couldn't be of much help to them since I didn't know nearly enough about web development to be in a position to help with anything. But I learned a great deal about client-server interactions. Lastly, I got to experience the tech support that M247 offers. On that day there were an unusually huge number of calls to the tech support, I mainly listened and observed how those engineers got about solving customer's problems. After the influx of calls has ended, I got to ask some questions like what does it mean when customers request VPN access to their network and how the engineers check whether people can be given access to the server locations. 
                        Although at first I only thought that I would only enjoy my time with the developer team, I changed my opinions at the end of the work placement week. I learned a great deal about networking from the tech support team. I also got to experience how internal IT support works and how it isn't as easy of a job as it seems to be. I thoroughly enjoyed my time at M247 and I sincerely appreciate their time and effort in offering me the work placement.</p>
                </div>
            </div>
        </div>
        `;
        content_to_load = experience_content;
    } else if (id === "Projects") {
        let projects_content = `
        <div id="main">
            <div class="row" id="cards">
                
                <div style="width:90%" id="project_cards-grid">

                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/Prj1Preview.PNG">
                        </div>
                        <p class="alignCenter">A chess app with different game modes and an AI. Made in C# and WPF</p>

                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj0" onclick="expandProject(this.id)">Expand</span>
                        </div>
                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/prj2Preview.PNG">
                        </div>
                        <p class="alignCenter">A bookmarker website which utilizes cookies to store bookmars permanently. Made with basic web dev kit</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj1" onclick="expandProject(this.id)">Expand</span>
                        </div>

                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/prj3_preview.PNG">
                        </div>
                        <p class="alignCenter">A remake of a classical windows game: Minesweeper. Renovated with modern technology</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj2" onclick="expandProject(this.id)">Expand</span>
                        </div>

                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/prj4_preview.PNG">
                        </div>

                        <p class="alignCenter">Anime and manga review comparison website. Lets you compare reviews and ratings from multiple sites on touch of one button</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj3" onclick="expandProject(this.id)">Expand</span>
                        </div>
                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/prj5_preview.PNG">
                        </div>
                        <p class="alignCenter">This C# app solves linear optimisation problems via the algebraic approach: the Simplex method. It also shows all the tables that are used in the workings </p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj4" onclick="expandProject(this.id)">Expand</span>
                        </div>
                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/Prj1Preview.PNG">
                        </div>
                        <p class="alignCenter">Something else</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj5" onclick="expandProject(this.id)">Expand</span>
                        </div>

                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/Prj1Preview.PNG">
                        </div>
                        <p class="alignCenter">Something else</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj6" onclick="expandProject(this.id)">Expand</span>
                        </div>

                    </div>
                    <div class="project_cards-grid-item">
                        <div class="thumbnail">
                            <img src="Assets/Prj1Preview.PNG">
                        </div>

                        <p class="alignCenter">Something else</p>
                        <div class="viewProjectBtnContainer">
                            <span class="btn-expand" id="prj7" onclick="expandProject(this.id)">Expand</span>
                        </div>
                    </div>
                </div>
                






              
            </div>
            
        </div>
        <div class="modall">
        <span class="close" onclick="$('#wrapper').css('overflow-y','auto'); $('.modall').css('display','none')">&times;</span>
            <div style="display:flex; justify-content: center; align-items: center; flex-direction: column; width:100%; flex-grow:1;overflow: auto;">
            
                <div id="detailedPrjGrid" class="modall-content">
                    

                    
                    <div class="slide-show-container detailedPrjGrid-item" id="my-slide-show">
                        <div class="slide-show-image-container">
                            <div class="right-slide-btn slide-show-btn">❯</div>
                            <div class="left-slide-btn slide-show-btn">❮</div>
                            <img>
                        </div>
                        <div class="slide-show-dots-container">
                            
                        </div>
                        
                        
                    </div>
                    



                    <div class="detailedPrjGrid-item">
                        <p class="alignCenter" style="font-size: calc(16px + 0.65vw)">Implemented using:</p>
                        <p class="alignCenter" id="implemented"></p>
                    </div>

                    <div class="detailedPrjGrid-item">
                        <p class="alignCenter" style="font-size: calc(16px + 0.65vw)">Features:</p>
                        <div class="featureGrid">

                        </div>



                    </div>

                    <div class="detailedPrjGrid-item" id="github_logo">
                        <p class="alignCenter" style="font-size: calc(16px + 0.65vw); margin-top:6px;">GitHub link:</p>
                        <div style="max-width: 100px; margin:auto">
                            <a href="https://github.com/egorchern/Project_ChessWithInterface" target="_blank" id="githubLink">
                                <img src="Assets/GitHubLogo.png">
                            </a>

                        </div>

                    </div>
                    

                    <div class="detailedPrjGrid-item" id="descr" style="margin-top:40px">

                    </div>
                </div>
            </div>
        </div>
        
        `
        content_to_load = projects_content;
    } else if (id === "Academics") {
        let academics_content = `
        <div id="main">
            <div class="page_item">
                <div>
                    <div class="horizontal-aligner">

                        <div class="dropright" style="margin-bottom: 10px">
                            <button class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GCSEs</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p class="alignCenter">Name: Broad Oak High School</p>
                                <p class="alignCenter">Studied: 2015-2018</p>
                                <img src="Assets/high_school_1.jpg">
                            </div class="dropdown-menu">
                        </div>
                    </div>
                    
                    <table  class="table table-bordered academics-table">
                        <thead>
                            <tr><th>Subject</th><th>Year Taken</th><th>Grade</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Mathematics</td><td>2018</td><td>8</td></tr>
                            <tr><td>English Language</td><td>2018</td><td>6</td></tr>
                            <tr><td>English Literature</td><td>2018</td><td>8</td></tr>
                            <tr><td>Law</td><td>2017</td><td>B</td></tr>
                            <tr><td>Spanish</td><td>2018</td><td>7</td></tr>
                            <tr><td>Food Preparation and Nutrition</td><td>2018</td><td>6</td></tr>
                            <tr><td>History</td><td>2018</td><td>8</td></tr>
                            <tr><td>Russian</td><td>2016</td><td>A*</td></tr>
                            <tr><td>Cambridge National Certificate in ICT</td><td>2018</td><td>M2</td></tr>
                            <tr><td>Combined Science: Trilogy</td><td>2018</td><td>8 8</td></tr>
                        </tbody>
                        
                    </table>
                </div>
                <div style='margin-top:10px'>
                    <div class="horizontal-aligner">

                        <div class="dropright" style="margin-bottom: 10px">
                            <button class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">A-Levels</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p class="alignCenter">Name: Bury College</p>
                                <p class="alignCenter">Studied: 2018-2020</p>
                                <img src="Assets/bury_college_1.jpg">
                            </div class="dropdown-menu">
                        </div>
                    </div>
                    <table  class="table table-bordered academics-table" style="margin-bottom: 10px">
                        <thead>
                            <tr><th>Subject</th><th>Year Taken</th><th>Grade</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Mathematics</td><td>2020</td><td>A*</td></tr>
                            <tr><td>Further Mathematics</td><td>2020</td><td>A</td></tr>
                            <tr><td>Accounting</td><td>2020</td><td>A*</td></tr>
                            <tr><td>Computer Science</td><td>2020</td><td>A*</td></tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div id="main">
        `
        content_to_load = academics_content;
    }
    $('main').prepend(content_to_load);
    bind_left_slide_animation('#main')
    $(function () {
        $('.media_containers').bind("click", function(e){
            $('#personal_profile').empty();
            let refers = this.dataset.refs;
            let content = ``;
            if (refers === "resume"){
                content = `
                <div id="slide-down-container" style="display:none;position:relative;">
                    <a href="https://drive.google.com/file/d/1m2hE3COuW9gZkKjryJbunO3a-PWmb6c7/view?usp=sharing" target='_blank'>Click to download my CV</a>
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
    var implementedStrings = ["C#, using WPF as the interface framework", "HTML + CSS(Bootsrap included) + JS(jQuery)", "HTML + CSS(Bootsrap included) + JS(jQuery)", "Flask(Python) + HTML + CSS(Bootsrap included) + JS(jQuery)", "C#, using WPF as the interface framework"];
    var featuresForProjects = [
        ["AI", "Save/Load", "Archive of Played Games", "Fischer Random Chess"],
        ["Dynamic addition of bookmarks", "Responsive", "Visual layering of bookmarks"],
        ["Help pages with rules", "Same minesweeper but in the browser", "Modern interface"],
        ["Responsive design", "Asynchronous load of content", "Customly made API"],
        ["Quick algrorithm", "Responsive interface", "Shows intermidiate simplex tables"]
    ];
    let slide_show_lists = [
        ["Assets/prj1_slide1.PNG", "Assets/prj1_slide2.PNG", "Assets/prj1_slide3.PNG"],
        ["Assets/prj2_slide1.PNG", "Assets/prj2_slide2.PNG", "Assets/prj2_slide3.PNG"],
        ["Assets/prj3_slide1.PNG", "Assets/prj3_slide2.PNG", "Assets/prj3_slide3.PNG", "Assets/prj3_slide4.PNG"],
        ["Assets/prj4_slide1.PNG", "Assets/prj4_slide2.PNG", "Assets/prj4_slide3.PNG"],
        ["Assets/prj5_slide1.PNG", "Assets/prj5_slide2.PNG"]
    ];
    var githubLinks = ["https://github.com/egorchern/Project_ChessWithInterface", "https://github.com/egorchern/bookmarker", "https://github.com/egorchern/minesweeper", "https://github.com/egorchern/Compare_flask", "https://github.com/egorchern/Simplex_Solver"];
    var descriptions = [
        "This application was made with WPF which is the modern framework for developing desktop apps with C languages. My chess app includes a choice to have control over both sides or play against an AI which utilizes parallel processing. Everything has been done from scratch except for the visual assets which were taken from royalty-free image website. This project also includes an interfacing app to connect to an offline database. Every completed game automatically gets recorded in the database so that the user can analyze them later. The games can be queried for several parameters that can be mixed together to find the intended game(s)",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/bookmarker/' target='_black'>here</a><br>This project is a web site hosted on GitHub Pages.   website allows users to add a visual bookmark via a user-friendly interface which can be maximized or minimized by clicking an appropriate button again. The bookmark data is stored permanently via cookies. Bookmark tiles are then generated dynamically via JavaScript. Bookmarks can be easily deleted via another menu that can be expanded via the minus button at the top of the page. The site is minimalistic in its design, as it only includes the necessary details.",
        "You can have a look at the website by clicking <a href='https://egorchern.github.io/minesweeper/' target='_black'>here</a><br>I have remade the original Minesweeper that was only available on windows, I have used modern web development technologies such as flexbox and jQuery. This simple yet quite addictive game can now be experienced on all devices that are capable of running a browser. I have also added a feature that allows to input a custom playing field with a user selected number of mines.",
        "You can have a look at the website by clicking <a href='https://gocompare.herokuapp.com/' target='_black'>here</a><br></br>I always wanted all of reviews to be accessible from one location without having to go to all the websites and manually comparing reviews and scores. I have achieved just that. The website uses AJAX to make requests to the server that runs on Flask. The server then web-scrapes the websites and returns them in turn to the client-side JS. The contents are then loaded asyncrhonously to enhance the user experince. For example the user can have a look at scores form one site while others are loading.",
        "This application solves linear optimisation problems. I decided to make it since I could not find another app that would also show all the workings and not just the final result. The program utilizes a two-step simplex method to solve the problem. The process is very quick and the message box is displayed with the answer in about 1-4s for problems with 1-4 inequalities"
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