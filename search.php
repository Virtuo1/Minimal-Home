<?php

if (isset($_POST["search-value"])) {
    header('Location: https://duckduckgo.com/?q=' . $_POST["search-value"]);
} else {
    header('Location: /');
}

?>