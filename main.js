var image=[
"family.jpg","download.jpg","download.png","brother.jpg","IMG_2993.jpg"

];
var names=["family book","Erik","Jackie","Xander","Aaron"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_members_in_array = 5
    if(i > numbers_of_family_members_in_array ){
i = 0;

    }
    var updatedimage = image[i];
    var updatedname = names[i];
    document.getElementById("family_member_image").src=updatedimage;
    document.getElementById("family_member_name").innerHTML=updatedname;
    
}
