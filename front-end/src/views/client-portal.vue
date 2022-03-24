<template>
    <div>
        <h2>Welcome, please login or register</h2>

        <section id="clientPortal">
            <router-link :to="`/login`">
                <div>
                    <img src="static/login.svg" alt="Login button image">
                    <h3>Login</h3>
                </div>
            </router-link>

            <router-link :to="`/register`">
                <div>
                    <img src="static/register.svg" alt="Register button image">
                    <h3>Register</h3>
                </div>
            </router-link>

        </section>
    </div>
</template>

<style lang="scss" scoped>
    #clientPortal{
        margin-top: 40px;
        display: flex; 
        flex-direction: column;
        align-items: center;
        div{
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            background-color: #233554;
            padding: 30px;
            width: 250px;
            margin-bottom: 40px;
            transition: .3s ease-in-out;
            &:hover{
                background-color: #233554b1;
                h3{
                    color: #64ffda;
                }
            }
            img{
                padding-bottom: 20px;
                max-height: 150px;
            }
        }
    }

    @media screen and (min-width: 780px) {
        #clientPortal{
            display: flex; 
            flex-direction: row;
            justify-content: space-around;
        }
    }
</style>