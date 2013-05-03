<?php

date_default_timezone_set("GMT");


echo "Tiempo: " . date("Y-m-d G:i:s");

echo "<br><br>";

echo "Stampa: " . ((time())+86450);

echo "<br><br>";

			#   Hora | Min | Seg | Mes | Día | Año
$foo =  mktime(  12,   0,    0,    5,   12,  2015);


$bar = $foo-time();


echo " Foo: $foo <br> $bar ";
