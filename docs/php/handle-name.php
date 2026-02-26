<?php


include('./config.php');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = trim($_POST['name']);

    if($name){
       if(validationName($name)){
        $stmt = $pdo -> prepare("Update users SET name = ? WHERE phone = ?");
        $stmt -> execute([$name, $_SESSION['phone']]);

        $_SESSION['name'] = $name;

        $token = bin2hex(random_bytes(32));
        setcookie('login_token',$token,time() + 7 * 24 * 60 * 60);
        $stmt = $pdo -> prepare("Update users SET login_token = ? WHERE phone = ?");
        $stmt -> execute([$token, $_SESSION['phone']]);
        
        
        echo json_encode([
            'name' => $name,
            'phone' => $_SESSION['phone']
        ]);
       }else{
        echo json_encode([
            'message' => 'نام معتبر وارد کن'
        ]);
       }
    }else{
        echo json_encode([
            'message' => 'خالیه'
        ]);
    }
}

function validationName($name){
    return strlen($name) > 2;
}
  