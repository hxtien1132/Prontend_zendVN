
    $(document).ready(function(){
        var _id = 1;
        var tab = $("#tab_contents")
        var list_string = [];
        

        $(document).on('click', '.close', function() { 
            var id = $(this).attr('i-data')
            
            var e = $(this).parents('.item')
            e.remove()
            if(tab.children().length<=0){
                tab.children().remove()
                var p = $("<span>").attr({
                    'id':'default'
                }).text('Chưa có nội dung')
                tab.append(p)
            }
            
        });
        
        $("#copy").click(function(){
            $(".vl").each(function(e){
                var t = $(this).text()
                list_string.push(t);
            })
             
            navigator.clipboard.writeText(list_string.toString())
        })

        $("#exit").click(function(){
            list_string=[]
            tab.children().remove()
            tab.append($("<p id='default'>Chưa có nội dung<p>"))
        })

        $("#OK").click(function(){
            $("#default").remove()
            var content = $("#text_contents").val()
            var parent = $("#tab_contents")
            if(content.length==0){
                alert("Vui lòng nhập giá trị!")
            }
            else {          
                $("#default").remove()
                var data = content.trim().split(',')
                data.forEach(function(e){

                    if(e==""){
                        return;
                    }

                    var d = $("<div>")
                    d.attr('class','item')
                    d.attr('i-data',_id)

                    var c1 = $("<span>")
                    c1.attr({
                        'class':'vl',
                        'i-data':_id
                    })
                    c1.text(e)
                    d.append(c1)

                    var c2 = $("<span>")
                    c2.attr({
                        'e-type':'close',
                        'class': 'close',
                        'i-data':_id
                    })
                    c2.text('X')
                    d.append(c2)

                    _id++;

                    parent.append(d)

                })
                $("#text_contents").val('')
            }
        })
    })
