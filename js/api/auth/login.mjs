import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";
const token = localStorage.getItem("token");

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    })
    
    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);

    storage.save("profile", user);

    alert("You are now logged in!")

    if (response.ok) {
        return result;
    } 

    throw new Error(result.error[0].message);


    //console.log(result);

}