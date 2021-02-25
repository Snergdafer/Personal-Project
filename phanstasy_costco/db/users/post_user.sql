INSERT INTO youser (
    email,
    username,
    password
)VALUES(
    $1,
    $2,
    $3
)
RETURNING *;