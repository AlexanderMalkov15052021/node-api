create TABLE person(
    id serial PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
)

create TABLE post(
    id serial PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)