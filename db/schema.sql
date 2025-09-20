-- schema.sql >>>>>>>>>>>> 
CREATE TABLE IF NOT EXISTS api_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,                              
    jwt TEXT NOT NULL UNIQUE,             
    issued_at DATETIME DEFAULT CURRENT_TIMESTAMP 
);
