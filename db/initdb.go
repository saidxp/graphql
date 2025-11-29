package db
 
import (
	"graphe/global"
	"database/sql"
	"os"
	"log"
)
// Her i Will Check And Chek And Check !! 
func InitDB() {
	// open the DB ...!
	var err error
	global.DB, err = sql.Open("sqlite3", "./tokens.db")
	if err != nil {
		log.Fatal(err)
	}
	schema, err := os.ReadFile("db/schema.sql")
	if err != nil {
		log.Fatal(err)
	}
	_, err = global.DB.Exec(string(schema))
	if err != nil {
		log.Fatal(err)
	}
}
