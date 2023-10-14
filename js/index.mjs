import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";


const path = location.pathname;

if (path === '/profile/login.html') {
    setLoginFormListener();
} else if (path === '/profile/register.html') {
    setRegisterFormListener();
}
