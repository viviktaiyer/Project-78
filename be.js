var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg", "https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ac3449d-a6ae-4a4e-8355-ffddb833c77c/dbnzhza-99e8c36f-7534-4e5d-97a6-af9b28e089ef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhYzM0NDlkLWE2YWUtNGE0ZS04MzU1LWZmZGRiODMzYzc3Y1wvZGJuemh6YS05OWU4YzM2Zi03NTM0LTRlNWQtOTdhNi1hZjliMjhlMDg5ZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmQj3ByejODp-RnH8vD6vi2kpvj_mAfce1TrqjwFS8U"];
var names = ["family book", "Ganesh Iyer", "Latha Iyer", "Viveykta Iyer"];
var i = 0;

function update() {
    i++;
    number_family = 3;
    if (i > number_family) {
        i = 0;
    }
    var img = images[i];
    var n = names[i];
    document.getElementById("family_member_image").src = img;
    document.getElementById("family_member_name").innerHTML = n;
}