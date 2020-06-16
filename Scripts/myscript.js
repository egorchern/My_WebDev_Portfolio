var navButtonState = 0;





function displayMobileNavMenu(){
   
    if(navButtonState == 0)
    {
        
        navButtonState = 1;
        $(document).ready(function(){
            $("#forTransform").show();
            
            
        })
    }
    else{
        navButtonState = 0;
        $(document).ready(function(){
            $("#forTransform").hide();
            
            
        })
    }
}
$(document).ready(function(){
    $('.close').click(function(){
        $('.modall').hide();
        $('body').css("overflow-y","auto");
    })
})
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
        $('body').css("overflow-y","hidden");
        
    })
                      
                      
    
    
    

   
}