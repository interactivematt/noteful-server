DROP TABLE IF EXISTS folder;

CREATE TABLE folder (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  folder_name TEXT NOT NULL
);