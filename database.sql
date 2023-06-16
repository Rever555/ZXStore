

create TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    items_id VARCHAR(255),
    status_now VARCHAR(255)
);