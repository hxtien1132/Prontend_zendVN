
        $(document).ready(function () {
            $(".nav-tabs a").click(function () {
                $(this).tab('show');
            });

            $('.nav-tabs a').on('shown.bs.tab', function (event) {
                var x = $(event.target).attr('href');
                var tab_ngang_localstorage = GetTabNgang();
                if(x!=tab_ngang_localstorage){
                    
                }
                ActiveTabNgang(x);          
            });

            var CreateDB = function () {
                if (localStorage.getItem('ta1o9erf_tab_ngang') == null) {
                    localStorage.setItem('ta1o9erf_tab_ngang', 0)
                }
            }

            var GetTabNgang = function () {
                return (localStorage.getItem('ta1o9erf_tab_ngang'));
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


            var SaveTabNgang = function (x) {
                if (x != null) {
                    localStorage.setItem('ta1o9erf_tab_ngang', x);
                }
            }


            var StartGame = function () {
                CreateDB();
                var h = GetTabNgang();
                ActiveTabNgang(h)
            }

            StartGame();
        });
    