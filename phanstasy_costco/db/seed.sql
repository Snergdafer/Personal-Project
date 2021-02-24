CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(3000)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_type VARCHAR(25),
    item_attributes VARCHAR(150),
    item_image VARCHAR(3000),
    item_desc VARCHAR(500),
    item_cost INTEGER
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id REFERENCES users(user_id),
    item_id REFERENCES items(item_id),
    active BOOLEAN
);
