INSERT INTO items (
    item_name,
    item_type,
    item_attributes,
    item_image,
    item_desc,
    item_cost
)VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
)
RETURNING *;