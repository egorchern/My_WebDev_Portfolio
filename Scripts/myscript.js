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

function expandProject(prjID){
    
    var str = prjID;
    var num = Number(str.replace(/prj/i,""));
    var implementedStrings = ["C#, using WPF as the interface framework","Something"];
    var featuresForProjects = [["AI","Save/Load","Archive of Played Games","Fischer Random Chess"],["something","something","something","something","something"]];
    var githubLinks = ["https://github.com/egorchern/Project_ChessWithInterface","https://github.com/PathOfBuildingCommunity/PathOfBuilding"];
    var descriptions = [
        "Chess",
        "Something"
    ]
    $(document).ready(new function(){
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
        $("#detailedPrjGrid").css("display","grid");
    })
    
    

   
}