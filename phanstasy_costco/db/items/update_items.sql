UPDATE items SET
    item_name = $1,
    item_type = $2,
    item_attributes = $3,
    item_image = $4,
    item_desc = $5,
    item_cost = $6
WHERE item_id = $7
RETURNING *;