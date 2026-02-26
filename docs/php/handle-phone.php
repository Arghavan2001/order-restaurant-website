<?php


include('./config.php');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $phone = trim($_POST['phone']);

    if($phone){
        
        $phone = numberToEnglish($phone);

        if(validationPhone($phone)){

            $otp = generateCode();
            $otp_exp = time() + 120;
        
        $_SESSION['phone'] = $phone;

        $stmt = $pdo -> prepare("SELECT id From users WHERE phone = ?");
        $stmt->execute([$_SESSION['phone']]);
        $user = $stmt -> fetch();
    
        if(!$user){
         
            $stmt = $pdo -> prepare("INSERT INTO users (phone,otp,otp_exp) VALUES (?,?,?)");
            $stmt -> execute([$_SESSION['phone'],$otp,$otp_exp]);
        
                
        }else{
            $stmt = $pdo -> prepare("UPDATE users SET otp = ? , otp_exp = ? WHERE phone = ?");
            $stmt -> execute([$otp,$otp_exp,$_SESSION['phone']]);

         }

         echo json_encode([
            'otp' => $otp
        ]);

    }else{
        echo json_encode([
            'message' => 'شماره موبایل معتبر وارد کن'
        ]);
  
    }

    }else{
        echo json_encode([
            'message' => 'خالیه'
        ]);
  
    }

}





function numberToEnglish($txt){
    $fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    $en = ['0','1','2','3','4','5','6','7','8','9'];

    return str_replace($fa,$en,$txt);
}

function validationPhone($phone){
    return preg_match('/^09\d{9}$/',$phone);
}

function generateCode(){
    return rand(1000,9999);
}
