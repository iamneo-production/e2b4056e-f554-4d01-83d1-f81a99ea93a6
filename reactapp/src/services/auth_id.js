
export default function authId() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return user.id;
    } else {
        return {};
    }

}
