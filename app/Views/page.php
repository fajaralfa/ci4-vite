<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Igniter 4 + Vite</title>
    <?php if (getenv('CI_ENVIRONMENT') === 'production') { ?>
        <script type="module" src="/assets/main.js"></script>
        <link rel="stylesheet" href="/assets/main.css">
    <?php } else { ?>
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/frontend/main.js"></script>
    <?php } ?>
</head>

<body>

</body>

</html>