<?php
    if(isset($_GET)){
        $file  = fopen("numbers.json", "r");
        $data = fread($file, filesize("numbers.json"));
        $data = json_decode($data, true); 
        foreach($data['lista'] as $num){
            echo $num . '<br>';
        }
    }