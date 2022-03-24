<template>
    <div>
        <h3>Register</h3>
    <form method="post" action="/register">
        <label for="fname">First Name: </label>
        <input type="text" name="fname" id="fname"><br>
        <label for="lname">Last Name: </label>
        <input type="text" name="lname" id="lname"><br>
        <label for="username">Username: </label>
        <input type="text" name="username" id="username"><br>
        <label for="password">Password: </label>
        <input type="text" name="password" id="password"><br><br>
        <input type="submit" value="register">
    </form>
    </div>
</template>