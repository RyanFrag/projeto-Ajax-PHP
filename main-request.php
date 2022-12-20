<?php
    
    if(isset($_GET)){       
        echo json_encode(rand(0, 100));        
    }

    if(isset($_POST['Number'])){
        $num = $_POST['Number'];
        $file  = fopen("numbers.json", "r");
        $data = fread($file, filesize("numbers.json"));
        $data = json_decode($data, true);
        array_push($data['lista'], $num);
        $data = json_encode($data);
        file_put_contents('numbers.json', $data);
    }
    