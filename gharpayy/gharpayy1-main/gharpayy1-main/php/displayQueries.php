<!DOCTYPE html>
<html>
<head>
  <title>Display all records from Database</title>
</head>
<body>

<h2>Details</h2>

<table border="2">
  <tr>
    <td>Sr.No.</td>
    <td>Full Name</td>
    <td>Mail Id</td>
    <td>Phone Number</td>
    <td>Message</td>
  </tr>

<?php

include "./dbDetails.php"; // Using database connection file here

$records = mysqli_query($conn,"select * from queries"); // fetch data from database

while($data = mysqli_fetch_array($records))
{
?>
  <tr>
    <td><?php echo $data['id']; ?></td>
    <td><?php echo $data['name']; ?></td>
    <td><?php echo $data['email']; ?></td>
    <td><?php echo $data['phone']; ?></td>
    <td><?php echo $data['message']; ?></td>

  </tr>	
<?php
}
?>
</table>

<?php mysqli_close($conn); // Close connection ?>

</body>
</html>