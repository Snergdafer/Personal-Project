SELECT * FROM items 
WHERE item_attributes LIKE '%' || $1 || '%';