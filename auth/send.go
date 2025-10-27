package auth

import (
	"fmt"
	"net/http"
	"graphe/global"
	"encoding/json"
)

func Sendjwt(w http.ResponseWriter, r *http.Request) {
	fmt.Println("im at send data her if you want ")
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET allowed", http.StatusMethodNotAllowed)
		return
	}
	// <<==>> \\
	var jwt string
	var status bool
	err := global.DB.QueryRow(
		"SELECT jwt FROM api_tokens ORDER BY issued_at DESC LIMIT 1",
	).Scan(&jwt)
	if err != nil {
		http.Error(w, "No token found", http.StatusNotFound)
		return
	}else {
		status = true 
	}
	// <<===>> \\
	w.Header().Set("Content-Type", "application/json")
	response := map[string]interface{}{
		"s":    status,
		"jwt":  jwt,
	}
	json.NewEncoder(w).Encode(response)
}
