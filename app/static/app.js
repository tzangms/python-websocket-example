$(function() {
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://" + document.domain + ":8000/websocket");
        ws.onmessage = function (msg) {
            var message = JSON.parse(msg.data);
            $("p#log").append(message.output + '<hr />');
        };
    };

    $('#chat_form input[name=text]').focus();

    $("#chat_form").on('submit', function(e){
        e.preventDefault();

        var input = $('#chat_form input[name=text]');
        var message = $(input).val();
        $(input).val('');

        ws.send(JSON.stringify({'output': message}));
    });


    window.onbeforeunload = function() {
        ws.onclose = function () {};
        ws.close()
    };
});

