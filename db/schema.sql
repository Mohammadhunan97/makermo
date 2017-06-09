DROP TABLE IF EXISTS mail_list CASCADE;
DROP TABLE IF EXISTS contact_me CASCADE;

CREATE TABLE mail_list(
id SERIAL PRIMARY KEY,
name TEXT,
email TEXT
);

CREATE TABLE contact_me(
id SERIAL PRIMARY KEY,
name TEXT,
email TEXT,
phone TEXT,
mycontent TEXT
);