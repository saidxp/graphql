package auth

import (
	"net/http"
	"graphe/global"
	"encoding/json"
)

func Authentication(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("jwt")
    if err != nil {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]interface{}{
            "ok": false,
            "error": "No JWT cookie found",
        })
        return
    }
    tokenString := cookie.Value
    var username string
    err = global.DB.QueryRow("SELECT logi1 FROM api_tokens WHERE jwt = ?", tokenString).Scan(&username)
    if err != nil {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]interface{}{
            "ok": false,
            "error": "JWT not found in DB",
        })
        return
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]interface{}{
        "ok": true,
        "token": tokenString,
    })
}
