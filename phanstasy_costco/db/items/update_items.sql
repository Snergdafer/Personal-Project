UPDATE items SET 
    item_type = $1,
    item_attributes = $2,
    item_image = $3,
    item_desc = $4,
    item_cost = $5
WHERE item_id = $6;