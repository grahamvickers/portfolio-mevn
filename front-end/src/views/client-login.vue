<template>
    <div>
        <h2>Hi, please enter your account details</h2>

        <section>
            <form method="post" action="/login">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username"><br>
                <label for="password">Password: </label>
                <input type="text" name="password" id="password"><br>
                <input type="submit" value="log in">
            </form>
        </section>
    </div>
</template>