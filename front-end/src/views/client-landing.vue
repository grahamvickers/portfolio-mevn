<template>
    <div>
        <h2>Welcome back, let's checkout your content!</h2>

        <section id="clientPortal">
            <div>
                <img src="static/login.svg" alt="Login button image">
                <h3>Socials</h3>
            </div>

            <div>
                <img src="static/register.svg" alt="Register button image">
                <h3>Blog</h3>
            </div>

        </section>
       
       <button>Logout</button>

    </div>
</template>

<style lang="scss" scoped>
    #clientPortal{
        margin-top: 60px;
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
                cursor: pointer;
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
    button{
        margin-top: 40px !important;
        display: flex;
        margin: 0 auto;
        &:hover{
            cursor: pointer;
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

