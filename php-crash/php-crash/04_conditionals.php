<?php
$age = 10;

if($age >= 18) {
    echo 'you are old enough to vote' ;
} else {
    echo 'Sorry, you are not old enough to vote';
}



$t = date("H");

if( $t < 12) {
    echo 'Good Morning';
} else if($t < 17 ) {
    echo  "Good Afternoon!";
} else {
    echo 'Good Evening!';
}

// $posts = ['first posts'];

// if(!empty($posts)) {
//     echo $posts[0];
// } else {
//     echo 'No posts';
// }

//echo !empty($posts) ? $posts[0] : 'No Posts';

$firstPosts = !empty($posts) ? $posts[0] : 'null';

echo $firstPost;

?>

