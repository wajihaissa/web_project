<?php
$servername = "localhost";
$username = "root"; // your database username
$password = "96703053"; // your database password
$dbname = "webbackend"; // your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>