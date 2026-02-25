<?php

$host = 'localhost';
$db = 'sahandwich';
$user = 'root';
$pass = '';

try{
    $pdo = new PDO("mysql:$host;dbname:$db;charset:utf8",$user,$pass);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die(`Database connection failed:` . $e ->getMessage());
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $phone = trim($_POST['phone']);

    if(!$phone){
        $stmt = $pdo -> prepare('SELECT * FROM phones (phone) WHERE phone = ?');
        $stmt -> execute([$phone]);
        $exist = $stmt -> fetch();

        if($exist){
            log('شماره از قبل بود');
        }else{
            $stmt = $pdo -> prepare(`INSERT ? INTO phones (phone)`);
            $stmt -> execute([$phone]);
            $insert = $stmt -> fetch();

            if($insert){
                log('شماره ذخیره شد');
            }else{
                log('خطا در ذخیره شماره');
            }


        }
    }else{
        log('خالیه');
    }

}
