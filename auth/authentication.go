package auth

import (
	"net/http"
	"graphe/global"
	"encoding/json"
)

func Authentication(w http.ResponseWriter, r *http.Request) {
	var jwt string
	err := global.DB.QueryRow("SELECT jwt FROM api_tokens ORDER BY issued_at DESC LIMIT 1").Scan(&jwt)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"ok": false,
		})
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"ok":    true,
		"token": jwt,
	})
}