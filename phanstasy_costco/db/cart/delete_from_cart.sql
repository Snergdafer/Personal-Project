DELETE FROM cart
WHERE item_id = $1
RETURNING * 
WHERE user_id = $2;