package main

import (
	"log"
	"fmt"
	"net/http"
)


func Takejwt(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println("hhhh")
	jwt := r.FormValue("jwt")
	fmt.Println(jwt)
}

func main(){
	// i will create handler 
	filesystem := http.FileServer(http.Dir("./static"))
    http.Handle("/", filesystem) 
	http.HandleFunc("/jwt", Takejwt)
	log.Println("localhost:8080")
	http.ListenAndServe(":8080", nil)

}