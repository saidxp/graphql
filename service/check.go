package service

import (
	"fmt"
	"net/http"	
)

func CheckValidjwt(w http.ResponseWriter, r *http.Request) {	
	fmt.Println("CHECK IT'S SEND FROM WORKER");
}