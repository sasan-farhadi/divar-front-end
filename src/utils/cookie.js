const setCookie = tokens => {
    document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`

    document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`
}

const getCookie = (cookieName) => {
    //علامت سوال آبشنال چینینگ است که اگر عبارت اشتباه وارد شد فانکشن به خطا نخورد
    return document.cookie.split(";").find(token => token.trim().split("=")[0] === cookieName)?.split("=")[1]
}

export { setCookie, getCookie } 