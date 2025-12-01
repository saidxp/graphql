package main

import (
	"log"
	"net/http"
	"graphe/db"
	_ "github.com/mattn/go-sqlite3"
	"graphe/auth"
	"graphe/global"
	"graphe/service"
	"fmt"
)

func main() { 
	
	// HER I WILL  
	// I Will Create Handler... !! \\ !!! 
	fmt.Println("hello")
	db.InitDB()
	defer global.DB.Close()
	filesystem := http.FileServer(http.Dir("./FRONT-END"))
	http.HandleFunc("/auth", auth.Authentication)
	http.Handle("/", filesystem)
	http.HandleFunc("/jwt", auth.Takejwt)
	http.HandleFunc("/takejwt", auth.Sendjwt)
	http.HandleFunc("/logout", service.Logout)
	http.HandleFunc("/check-jwt", service.CheckValidjwt)
	log.Println("localhost:8080") // <<<>> \\  
	http.ListenAndServe(":8080", nil) // <<==!!==>> \\ !  
}

