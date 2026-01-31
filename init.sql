-- dropping the db each time, this is only supposed to be ran by the migration_task
-- this is a hack due dex (re-ported from knex) can't generate a delete table foo cascade
-- with its query builder
-- see: https://github.com/knex/knex/issues/974
DROP DATABASE IF EXISTS denojira;
CREATE DATABASE denojira;
CREATE USER kanban_user WITH ENCRYPTED PASSWORD 'kanbanisfun';
GRANT ALL PRIVILEGES ON DATABASE denojira TO kanban_user;
