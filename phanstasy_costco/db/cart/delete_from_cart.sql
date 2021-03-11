DELETE FROM cart
WHERE cart_id = $1;

SELECT * FROM cart
JOIN items ON items.item_id = cart.item_id
WHERE user_id = $2;