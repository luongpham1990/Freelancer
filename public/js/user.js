$("#register-name").keyup(function(){var t=$(this).val();$("#username_status").text("...."),""!=t?$.post("/valid/client.php",{username:t},function(t){return $("#username_status").text(t),"Tên đăng nhập đã được sử dụng"==t?($("#regis_btn").attr("disabled",!0),!1):!1}):$("#username_status").text("")}),$("#register-email").keyup(function(){var t=$(this).val();$("#email_status").text("...."),""!=t?$.post("/valid/client.php",{email:t},function(t){return $("#email_status").text(t),"Email đã được sử dụng"==t?($("#regis_btn").attr("disabled",!0),!1):!1}):$("#email_status").text("")});