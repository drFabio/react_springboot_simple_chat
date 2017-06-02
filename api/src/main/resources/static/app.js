var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/chatExample');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log('greeting', greeting)
            // showGreeting(JSON.parse(greeting.body).content);
        });
        stompClient.subscribe('/user/topic/registerResponse', function (register) {
            console.log('registration', register)
            // showGreeting(JSON.parse(greeting.body).content);
        });
        stompClient.subscribe('/user/registerResponse', function (register) {
            console.log('registration', register)
            // showGreeting(JSON.parse(greeting.body).content);
        });
        stompClient.subscribe('/registerResponse', function (register) {
            console.log('registration', register)
            // showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    // stompClient.send("/api/hello", {}, JSON.stringify({'message': $("#name").val(), senderName: 'FOo bar'}));
    stompClient.send("/api/register", {}, JSON.stringify({'name': $("#name").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});
