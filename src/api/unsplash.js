import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID VjvpQNIDK-7DQHSFW_gpoK4uBqgZqL8r2CJQuu_6oug"
    }
});