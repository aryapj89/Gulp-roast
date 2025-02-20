$(document).ready(function(){
             
    $(".nav-links").click(function(e) {

        $(".nav-links").removeClass("active");
       $(this).addClass("active");
    });
});

document.querySelector(".hamburger").addEventListener("click",function()
{
    document.querySelector(".menu").classList.toggle("show-menu")
})

document.querySelector(".hamburger").addEventListener("click",function()
{
    if(document.querySelector(".menu").classList.contains("show-menu"))
    {
        hamburgerBtn.innerHTML = '<i class="bi bi-x"></i>';
    
} else {
    hamburgerBtn.innerHTML = '<i class="bi bi-list"></i> ';
}
})

