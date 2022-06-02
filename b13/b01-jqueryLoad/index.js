$(document).ready(function () {
    var content = $(".main-content");
    content.load("content.html", function (data) {
        Active();
        $(".main-content>div:not(.nd)").click(function (e) {
            var a = $(this).attr("id");
            console.log("da clikc", a);
            Active(a)
        })
    });
    var Active = function (ob) {
        if (ob == null) {
            var o = localStorage.getItem("ta1o9er_active_tab")
            if (o == null) {
                localStorage.setItem("ta1o9er_active_tab", "home")
            }

            ob = localStorage.getItem("ta1o9er_active_tab")
        }

        $(".item:not(.nd)").each(function () {
            console.log('phan tu day ', $(this))
            if ($(this).attr("class").toLowerCase().includes('active')) {
                $(this).removeClass("active")
            }
        })
        var t = "#" + ob;
        console.log("gia tri day ", t)
        $(t).addClass("active")
        localStorage.setItem("ta1o9er_active_tab", ob)
        $("#msg").text("Bạn đang ở tab " + ob);
    }
})