<?php
$allowed = array(
	array(
		'start'	=> '204.232.175.00',
		'end' 	=> '204.232.175.255'
	),
	array(
		'start' 	=> '192.30.252.0',
		'end' 	=> '192.30.252.255'
	)
);

if(!isset($_REQUEST['payload'])) {
    echo "no no!";
    exit;
}

$ip = ip2long($_SERVER['REMOTE_ADDR']);

foreach($allowed as $allow) {
	if( $ip >= ip2long($allow['start'] && $ip <= ip2long($allow['end']))) {

	    chdir('..');
	    echo `git fetch --all`;
	    echo `git reset --hard origin/master`;
	    echo `./bootstrap.sh`;
	    break;
	}
}