<?php
$servername = "localhost"; // Replace with your MySQL server address
$username = "root"; // Replace with your MySQL username
$password = "Nep@li123"; // Replace with your MySQL password
$dbname = "Myfreemcq"; // Replace with your MySQL database name

// Create a new MySQLi instance and establish a connection
$connection = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Main Page</title>
</head>
<body>
    <?php
    // Assuming the connection variable is already defined

    // Query to retrieve data from a table
    $sql = "SELECT * FROM your_table_name";

    // Execute the query
    $result = $connection->query($sql);

    // Process the result set
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            // Process each row of data
            // ...
            // Example: echo $row["column_name"];
        }
    } else {
        echo "No results found.";
    }

    // Close the connection
    $connection->close();
    ?>
</body>
</html>