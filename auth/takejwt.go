package auth

import ( 
 	"net/http"
    "github.com/golang-jwt/jwt/v5"
    "time"
    "graphe/global" 
)


func Takejwt(w http.ResponseWriter, r *http.Request) {
    r.ParseForm()
    tokenString := r.FormValue("jwt")
    username := r.FormValue("username") 

    if tokenString == "" || username == "" {
        http.Error(w, "Missing JWT or username", http.StatusBadRequest)
        return
    }

    token, _, err := new(jwt.Parser).ParseUnverified(tokenString, jwt.MapClaims{})
    if err != nil {
        http.Error(w, "Invalid JWT", http.StatusBadRequest)
        return
    }

    claims, ok := token.Claims.(jwt.MapClaims)
    if !ok {
        http.Error(w, "Invalid JWT claims", http.StatusBadRequest)
        return
    }

    expFloat, ok := claims["exp"].(float64)
    if !ok {
        http.Error(w, "JWT missing exp", http.StatusBadRequest)
        return
    }
    exp := int64(expFloat)

   
    _, err = global.DB.Exec("DELETE FROM api_tokens WHERE logi1 = ?", username)
    if err != nil {
        http.Error(w, "Failed to remove old JWT", http.StatusInternalServerError)
        return
    }

    _, err = global.DB.Exec(
        "INSERT INTO api_tokens(logi1, jwt, expires_at) VALUES(?, ?, ?)",
        username,
        tokenString,
        exp,
    )
    if err != nil {
        http.Error(w, "Failed to store JWT", http.StatusInternalServerError)
        return
    }

    http.SetCookie(w, &http.Cookie{
        Name:     "jwt",
        Value:    tokenString,
        Expires:  time.Unix(exp, 0),
        HttpOnly: true,
        Secure:   true,
        SameSite: http.SameSiteStrictMode,
    })
    w.WriteHeader(http.StatusOK)
}
