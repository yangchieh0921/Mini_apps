<?php
//result will store the database request results so that we can encode and return them to index.php

$result = array();

function getAllUsers($conn) {
    $query = "SELECT * FROM tbl_mini_coopper";
    
    $runQuery = $conn->query($query);

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }
    //return $result;
    echo(json_encode($result));
}

// get a specific user
function getSingleUserp($conn, $id) {
    $query = "SELECT * FROM tbl_mini_coopper WHERE id=" . $id . "";
    $runQuery = $conn->query($query);

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }
    //return $result;
    echo(json_encode($result));
}