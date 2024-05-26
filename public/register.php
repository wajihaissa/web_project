<?php
include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$name = $data['name'];
$pfpurl = $data['pfpurl'];

$sql = "INSERT INTO user (name, username, password, pfpurl) VALUES ('$name', '$username', '$password', '$pfpurl')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>