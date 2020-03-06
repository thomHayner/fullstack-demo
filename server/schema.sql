DROP buglist

CREATE DATABASE buglist

\c

CREATE TABLE buglist (
    id SERIAL PRIMARY KEY,
    descriptor VARCHAR NOT NULL,
    reportedby  VARCHAR NOT NULL,
    createdat VARCHAR NOT NULL,
    assignedto VARCHAR NOT NULL,
    threatlevel VARCHAR NOT NULL
);

