<?php

if(!isset($_REQUEST['payload'])) {
    echo "no no!";
    exit;
}
if(in_array($_SERVER['REMOTE_ADDR'], array('204.232.175.64', '192.30.252.0'))) {
    chdir('..');
    echo `git fetch --all`;
    echo `git reset --hard origin/master`;
    echo `./bootstrap.sh`;
} else {
    echo "Not allowed";
}