<?php
include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

$sql = "SELECT * FROM user WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(["success" => true, "user" => $row]);
    } else {
        echo json_encode(["success" => false, "error" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "No user found"]);
}

$conn->close();
?>