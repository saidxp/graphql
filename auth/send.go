package auth

import (
	"fmt"
	"net/http"
	"graphe/global"
	"encoding/json"
	"database/sql"
)

// <<<====>>> !!
func Sendjwt(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Sendjwt handler called")

	if r.Method != http.MethodGet {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"s":     false,
			"jwt":   "",
			"error": "Only GET allowed",
		})
		return
	} 
	var jwt string
	var status bool
	err := global.DB.QueryRow(
		"SELECT jwt FROM api_tokens ORDER BY created_at DESC LIMIT 1",
	).Scan(&jwt)

	if err == sql.ErrNoRows {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"s":     false,
			"jwt":   "",
			"error": "No token found",
		})
		return
	} else if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"s":     false,
			"jwt":   "",
			"error": "Database error",
		})
		return
	} 
	status = true
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"s":   status,
		"jwt": jwt,
	})
}
