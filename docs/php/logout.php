<?php
session_start();

if(isset($_SESSION['name']) || $_SESSION['phone']){
    unset($_SESSION['name']);
    unset($_SESSION['phone']);
    setcookie('login_token', '',time() - 3600);
}

if(!isset($_SESSION['name']) && !isset($_SESSION['phone']) && !isset($_COOKIE['login_token'])){
    echo true;
}else{
    echo false;
}