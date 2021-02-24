INSERT INTO cart (
    user_id
)VALUES(
    $1
)RETURNING *
WHERE user_id = $1;