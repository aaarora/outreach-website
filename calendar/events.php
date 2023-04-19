<?php
// Create an array of events
$events = array();
$events[] = array(
    'title' => 'Event 1',
    'start' => '2023-04-20', // Start date and time in ISO8601 format
);

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Encode the events array into JSON format
$json = json_encode($events);

// Output the JSON feed
echo $json;
?>