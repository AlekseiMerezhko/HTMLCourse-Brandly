<?php

$recepient = "merezhko.lesha@mail.ru";
$sitename = "BRANDly";

$email = trim($_POST["email"]);
$message = "Имя: E-mail $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");