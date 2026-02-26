<?php
include('./config.php');

if(isset($_COOKIE['login_token'])){
      
    
    $stmt = $pdo -> prepare("SELECT name , phone from users WHERE login_token = ?");
    $stmt -> execute([$_COOKIE['login_token']]);
    $res = $stmt -> fetch();

    if($res){
        $_SESSION['name'] = $res['name'];
        $_SESSION['phone'] = $res['phone'];
    }

    
}else{
    setcookie('login_token', '',time() - 3600);
}

if(isset($_SESSION['name']) && isset($_SESSION['phone'])){
    echo json_encode(['logged' => true, 'name' => $_SESSION['name'], 'phone' => $_SESSION['phone']]);
}else{
    echo json_encode(['logged' => false]);
}

