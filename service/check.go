package service

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"graphe/global"   
)

// CheckValidjwt checks if the latest JWT in DB is still valid
func CheckValidjwt(w http.ResponseWriter, r *http.Request) { 

	fmt.Println("CHECK: request received from worker")
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	} 
	cookie, err := r.Cookie("jwt") 
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
		"valid": false,
	})
	}	
	tokenString := cookie.Value
	var expiresAt int64
	err = global.DB.QueryRow(
		"SELECT expires_at FROM api_tokens WHERE jwt = ? ORDER BY created_at DESC LIMIT 1",
			tokenString,
	).Scan(&expiresAt) 
	now := time.Now().Unix() 
	isValid := now < expiresAt  // << == >> \\ 
	// Whats' i will Do It's I Will Check If This It's Expired !!! 
	// IF YEAH REMOVE IT FROM DB !! .... 
	if !isValid {
    // Delete Expired Token ... 
   	 _, _ = global.DB.Exec("DELETE FROM api_tokens WHERE jwt = ?", tokenString)
	} 
	fmt.Println("i will print the now and the expiresAt", now , expiresAt); 
	fmt.Println("The user name of the login user", tokenString) 
	fmt.Println("Her It's About the state", isValid) // <<===>> <!!!!!> !! 
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"valid": isValid, 
	}) 
}
