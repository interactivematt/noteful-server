-- TRUNCATE all tables to ensure that there are no
-- data in them so we start with a fresh set of data
TRUNCATE folder, note, RESTART IDENTITY CASCADE;

-- insert 3 folders
INSERT INTO folder
  (folder_name)
  VALUES
    ('First folder'),
    ('Numero dos'),
    ('Tree fitty');

-- insert 4 notes
INSERT INTO note
  (title, date_published, content, folder)
  VALUES
    ('This is a note','3/4/2019', 'Lorem ipsum wtf', 1),
    ('Plan Christmas party', '3/4/2019', 'Hey, this is a note', 2),
    ('Remove old stock', '4/6/2019', 'Hi there, I am a note', 1),
    ('Watch paint dry', '2/11/2019', 'This is the last note', 3);
