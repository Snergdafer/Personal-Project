UPDATE youser SET
    email = $1,
    username = $2
WHERE user_id = $3
RETURNING *;