var slide_animation_duration = "0.8s";


$(function () {
    
    $('#nav-list > li').bind("click", function (e) {
        load_content(this.id);
    });
    bind_left_slide_animation("#main");
});

function load_content(id){
    let content_to_load = ``;
    
    $('#main').empty();
    $('#nav-list > li > span').removeClass("active");
    $(`#${id} > span`).addClass("active");
    if(id === "About_myself"){
        let about_myself_content = `
        <div id="main">
            <div id="MainGrid">
                <div class="MainGrid-item page_item">
                    <div id="profilePic">
                        <img src="Assets/ProfilePic.png">

                    </div>
                    <p class="alignCenter">Mr. Egor Chernyshev</p>
                    <p>Currently, I am a studying A-Levels at Bury College.<br>
                        Specifically I am studying: Computer science, Mathematics, Further Mathematics and Accounting.
                        <br>
                        I aspire to get a career in web development as a full-stack developer.
                    </p>
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
    }
    else if(id ==="Relevant_experience"){

    }
    else if(id === "Projects"){

    }
    else if(id === "Academics"){
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
    else if(id === "Contacts"){

    }
    $('main').prepend(content_to_load);
    bind_left_slide_animation('#main')
    
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


function expandProject(prjID){
    
    var str = prjID;
    var num = Number(str.replace(/prj/i,""));
    var implementedStrings = ["C#, using WPF as the interface framework","HTML + CSS(Bootsrap included) + JS(jQuery)"];
    var featuresForProjects = [["AI","Save/Load","Archive of Played Games","Fischer Random Chess"],["Dynamic addition of bookmarks","Interactive deletion of bookmarks","Visual layering of bookmarks"]];
    var pictures = ["prj1Big.png","prj2Big.png"];
    var githubLinks = ["https://github.com/egorchern/Project_ChessWithInterface","https://github.com/egorchern/bookmarker"];
    var descriptions = [
        "This application was made with WPF which is the modern framework for developing desktop apps with C languages. My chess app includes a choice to have control over both sides or play against an AI which utilizes parallel processing. Everything has been done from scratch except for the visual assets which were taken from royalty-free image website. This project also includes an interfacing app to connect to an offline database. Every completed game automatically gets recorded in the database so that the user can analyze them later",
        "This project is a web site hosted on GitHub Pages. This website allows users to add a visual bookmark via a user-friendly interface which can be maximized or minimized by clicking an appropriate button again. The bookmark data is stored permanently via cookies. Bookmark tiles are then generated dynamically via JavaScript. Bookmarks can be easily deleted via another menu that can be expanded via the minus button at the top of the page. The site is minimalistic in its design, as it only includes the necessary details."
    ];
    
    $(document).ready(function(){
        $('#expandedPrj-pic').attr("src", "Assets/" + pictures[num]);
        $('.modall').css("display","flex");
        $("#implemented").html(implementedStrings[num]);
        var featureList = featuresForProjects[num];
        $(".featureGrid").empty();
        for(var i = 0; i < featureList.length; i++)
        {
            $(".featureGrid").append("<p>" + featureList[i] + "</p>");
        }
        $("#githubLink").attr("href",githubLinks[num]);
        $("#descr").empty();
        $("#descr").append("<p>" + descriptions[num] + "</p>");
        
        
    })
                      
                      
    
    
    

   
}