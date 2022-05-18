
$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    $('.nav-tabs a').on('shown.bs.tab', function (event) {
        var x = $(event.target).attr('href');
        var tab_ngang_localstorage = GetTabNgang();
        if(x!=tab_ngang_localstorage){
            SaveTabDoc(0);
        }
        ActiveTabNgang(x);
        
    });

    var CreateDB = function () {
        if (localStorage.getItem('ta1o9er_tab_ngang') == null) {
            localStorage.setItem('ta1o9er_tab_ngang', 0)
        }
        if (localStorage.getItem('ta1o9er_tab_doc') == null) {
            localStorage.setItem('ta1o9er_tab_doc', 0)
        }
    }

    var GetTabNgang = function () {
        return (localStorage.getItem('ta1o9er_tab_ngang'));
    }

    var GetTabDoc = function () {
        return (localStorage.getItem('ta1o9er_tab_doc'));
    }

    var ActiveTabNgang = function (x) {
        var ngang = $("#root>li");
        ngang.each(function () {
            $(this).removeClass('active');
        })
        $(".tab-pane.fade").each(function () {
            $(this).removeClass('active');
        })
        var j = $(x).addClass('active in');
        var o = $("li>a[href='" + x + "']").parents("li").first();
        o.addClass("active");
        SaveTabNgang(x);
    }

    var ActiveTabDoc = function (y,x) {
        var h = y.substring(1)
        var v = $(y+">[i-label='"+x+"']")
        v.addClass("active")
        v.next().addClass('show')
        return v;
    }

    var SaveTabNgang = function (x) {
        if (x != null) {
            localStorage.setItem('ta1o9er_tab_ngang', x);
        }
    }

    var SaveTabDoc = function (x) {
        if (x != null) {
            localStorage.setItem('ta1o9er_tab_doc', x);
        }
    }
    var StartGame = function () {
        CreateDB();
        var h = GetTabNgang();
        ActiveTabNgang(h)
        var v = GetTabDoc();
        if(v!=0){
            console.log("ac")
            ActiveTabDoc(h,v);
            console.log(ActiveTabDoc(h,v))
        }
    }

    $("p.accordion").click(function () {
        var isset = $(this).hasClass('active')==true

        var l = $(this).attr('i-label')
        var parents = $(this).parents('.tab-pane')
        var tab_child = $(this).next()
        var list_tab =  $("p.accordion");

        list_tab.each(function () {
            if($(this).hasClass('active')){
                $(this).removeClass('active')
                $(this).next().removeClass('show')
            }
        })

        
        if(isset){
            $(this).removeClass('active')
            tab_child.removeClass('show')
            SaveTabDoc(0)
        }
        else {
            $(this).addClass('active');
            tab_child.addClass('show');
            SaveTabDoc(l)
        }

        
    })

    StartGame();
});
