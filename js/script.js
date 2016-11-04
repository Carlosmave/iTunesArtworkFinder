function getartwork(){
    
    //Declaration of variables
    var link1 = "http://is5.mzstatic.com/image/thumb/";
    var link3 = "/source/100000x100000-999.jpg";
    var hyperlink = "Artwork Hyperlink";
    var link2=null;
    var sublink=null;
    var imglink=null;
    var inputText=null;
    var ftype=null;
    
    //Get text from inputTextBox    
    inputText = document.getElementById("inputtb").value;
        
   //Main Method
    if(inputText!=="" && inputText.length>50 && inputText.substring(10,22)==="mzstatic.com"){
        var index = document.getElementById("typecombobox").value;
        sublink=inputText.substring(30);
        switch(index){
            case "movie":
                link2=sublink.substring(0, sublink.length-19);
                break;
            case "tvshow":
                link2=sublink.substring(0, sublink.length-18);
                break;
            case "album":
                link2=sublink.substring(0, sublink.length-18);
                break;
            case "musicvideo":
                link2=sublink.substring(0, sublink.length-21);
                break;
            case "book":
                link2=sublink.substring(0, sublink.length-18);
                break;
            case "audiobook":
                link2=sublink.substring(0, sublink.length-18);
                break;
            case "podcast":
                link2=sublink.substring(0, sublink.length-18);
                break;
            case "app":
                ftype=sublink.substring(70);
                if(ftype==="png"){
                    link2=sublink.substring(0, sublink.length-16);
                }else if (ftype==="jpeg"){
                    link2=sublink.substring(0, sublink.length-17);
                }   
                break;      
        }
                imglink=link1.concat(link2).concat(link3);
                document.getElementById("outputtb").value=imglink;
                document.getElementById("hyperlink").innerHTML=hyperlink.link(imglink);
                document.getElementById("inputtb").value="";
    }else{
        alert("You have not entered a valid link");
        //document.getElementById("outputtb").value="You have not entered a valid link";
        }
        
    //Set variables to null  
    link2=null;
    sublink=null;
    imglink=null;
    inputText=null;
    ftype=null;
    
}
       
function init(){
    
    //Clear text fields
    document.getElementById("inputtb").value = "";
    document.getElementById("outputtb").value = "";
    
}
window.onload = init;



