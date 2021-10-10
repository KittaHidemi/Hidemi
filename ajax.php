<?php
$zaiko = [
	['name' => 'Rose', 'count' => 10],
	['name' => 'Sunflower', 'count' => 8],
	['name' => 'Gerbera', 'count' => 3]
];
$request = $_GET['name'];
if(empty($request)) $request = $_POST['name'];

if(!empty($request)) {
	foreach ($zaiko as $record) {
		if($request === $record['name']) {
			echo '{"result": 0 ,"count": ' . $record['count'] . "}";
			exit;
		}
	}
}
echo '{"result":1,"count":0}';
?>