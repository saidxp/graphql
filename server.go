package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"encoding/json"
	_ "github.com/mattn/go-sqlite3"
)

// her is the db !!
var db *sql.DB

func initDB() {
	// Open the DB
	var err error
	db, err = sql.Open("sqlite3", "./tokens.db")
	if err != nil {
		log.Fatal(err)
	}
	schema, err := os.ReadFile("db/schema.sql")
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec(string(schema))
	if err != nil {
		log.Fatal(err)
	}
}

func Takejwt(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println("hhhh")
	jwt := r.FormValue("jwt")
	fmt.Println(jwt)
	_, err := db.Exec("INSERT INTO api_tokens(jwt) VALUES(?)", jwt)
	if err != nil {
		http.Error(w, "Failed to store JWT", http.StatusInternalServerError)
		fmt.Println("Failed to store this jwt !!")
		return
	}
	// Did U Recommonde !! //
}

func Sendjwt(w http.ResponseWriter, r *http.Request) {
	fmt.Println("im at send data her if you want ")
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET allowed", http.StatusMethodNotAllowed)
		return
	}
	// <<==>> \\
	var jwt string
	var status bool
	err := db.QueryRow(
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

func authentication(w http.ResponseWriter, r *http.Request) {
	var jwt string
	err := db.QueryRow("SELECT jwt FROM api_tokens ORDER BY issued_at DESC LIMIT 1").Scan(&jwt)
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

func main() {
	// I Will Create Handler... !! \\
	initDB()
	defer db.Close()

	filesystem := http.FileServer(http.Dir("./static"))
	http.HandleFunc("/auth", authentication)
	http.Handle("/", filesystem)
	http.HandleFunc("/jwt", Takejwt)
	http.HandleFunc("/takejwt", Sendjwt)
	log.Println("localhost:8080")
	http.ListenAndServe(":8080", nil)
}
