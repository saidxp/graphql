package auth

import (
	"fmt"
	"net/http"
	"graphe/global"
)

func Takejwt(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println("hhhh")
	jwt := r.FormValue("jwt")
	fmt.Println(jwt)
	_, err := global.DB.Exec("INSERT INTO api_tokens(jwt) VALUES(?)", jwt)
	if err != nil {
		http.Error(w, "Failed to store JWT", http.StatusInternalServerError)
		fmt.Println("Failed to store this jwt !!")
		return
	}
}
