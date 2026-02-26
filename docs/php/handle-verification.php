<?php

include('./config.php');

if(empty($_SESSION['phone'])){
    echo json_encode(['message' => 'لطفا دوباره وارد شوید']);
    exit;
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $otp = intval(numberToEnglish($_POST['code']));

    $stmt = $pdo -> prepare("SELECT otp, otp_exp, name From users WHERE phone = ?");
    $stmt->execute([$_SESSION['phone']]);
    $user = $stmt -> fetch(PDO::FETCH_ASSOC);

  
    if(time() < intval($user['otp_exp'])){

        if($otp){
        if($otp === intval($user['otp'])){

            $_SESSION['name'] = $user['name'];
            
            $token = bin2hex(random_bytes(32));
            setcookie('login_token',$token,time() + 7 * 24 * 60 * 60);
            $stmt = $pdo -> prepare("Update users SET login_token = ? WHERE phone = ?");
            $stmt -> execute([$token, $_SESSION['phone']]);
            
            if($user['name']){
                echo json_encode([
                    'situation' => 'sign-in',
                    'name' => $user['name'],
                    'phone' => $_SESSION['phone']
                ]);
            }else{
                echo json_encode([
                    'situation' => 'sign-up'
                ]);
            }
           
     
        
        }else{
            echo json_encode([
                'message' => 'کد اشتباه است'
            ]);
        }
    }else{
        echo json_encode([
            'message' => 'کد را وارد کنید'
        ]);
    }
    }else{
        echo json_encode([
            'message' => 'کد شما منقضی شده است'
        ]);
    }
}



function numberToEnglish($txt){
    $fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    $en = ['0','1','2','3','4','5','6','7','8','9'];

    return str_replace($fa,$en,$txt);
}