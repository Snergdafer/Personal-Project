SELECT * FROM items
WHERE item_type LIKE "%" || $1 || "%";