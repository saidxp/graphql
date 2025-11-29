package service

import  (
	"net/http"
	"encoding/json"
	"graphe/global"
	"fmt"
	"time"
)

type LogoutRequest struct {
	Token string `json:"token"`
}

func Logout(w http.ResponseWriter, r *http.Request) { 

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var req LogoutRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil || req.Token == "" {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}
	// Delete JWT from DB
	err = DeleteToken(req.Token)
	if err != nil {
		http.Error(w, "Failed to logout", http.StatusInternalServerError)
		return
	} 
	http.SetCookie(w, &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Unix(0, 0),  
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteStrictMode,
	})
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"status": "success",
	}) 
}

func DeleteToken(token string) error {
    result, err := global.DB.Exec("DELETE FROM api_tokens WHERE jwt = ?", token)
    if err != nil {
        return err
    }
    rowsAffected, _ := result.RowsAffected()
    fmt.Println("Rows deleted:", rowsAffected)
    return nil
}