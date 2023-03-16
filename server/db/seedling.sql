DROP TABLE IF EXISTS students CASCADE;
CREATE TABLE students(
  id SERIAL PRIMARY KEY NOT NULL,
  last_name VARCHAR(150) NOT NULL,
  first_name VARCHAR(150) NOT NULL,
  middle_name VARCHAR(150) NOT NULL,
  group_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS groups CASCADE;
CREATE TABLE groups(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL UNIQUE,
  project_title VARCHAR(1000) NOT NULL,
  program VARCHAR(150) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  term_started INTEGER NOT NULL,
  sy_started INTEGER NOT NULL,
  is_active BOOLEAN NOT NULL,
  mentor_id INTEGER NOT NULL
);

ALTER TABLE IF EXISTS students 
  ADD FOREIGN KEY (group_id) REFERENCES "groups"(id);

DROP TABLE IF EXISTS panelists CASCADE;
CREATE TABLE panelists(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  last_name VARCHAR(150) NOT NULL,
  first_name VARCHAR(150) NOT NULL,
  middle_name VARCHAR(150) NOT NULL,
  school VARCHAR(150) NOT NULL,
  role_id INTEGER NOT NULL DEFAULT 2
);

ALTER TABLE IF EXISTS groups 
  ADD FOREIGN KEY (mentor_id) REFERENCES panelists(id);

DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles(
  id SERIAL PRIMARY KEY NOT NULL,
  "role" VARCHAR(150) NOT NULL
);

INSERT INTO roles("role") VALUES
  ('Admin'), 
  ('User');

INSERT INTO panelists(username, password, last_name, first_name, middle_name, school, role_id) VALUES ('admin', 'test', 'Admin Last', 'Admin First', 'Admin Middle', 'Test School', 1);

INSERT INTO panelists(username, password, last_name, first_name, middle_name, school, role_id) VALUES ('user', 'test', 'User Last', 'User First', 'User Middle', 'Test School', 2);

ALTER TABLE IF EXISTS panelists 
  ADD FOREIGN KEY (role_id) REFERENCES roles(id);

DROP TABLE IF EXISTS schedule_types CASCADE;
CREATE TABLE schedule_types(
  id SERIAL PRIMARY KEY NOT NULL,
  "type" VARCHAR(150) NOT NULL
);

INSERT INTO schedule_types("type") VALUES
  ('Title Defense'), 
  ('Thesis Defense');

DROP TABLE IF EXISTS schedules CASCADE;
CREATE TABLE schedules(
  id SERIAL PRIMARY KEY NOT NULL,
  group_id INTEGER NOT NULL,
  "start_date" TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  zoom_link VARCHAR(10000) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  schedule_type_id INTEGER NOT NULL
);

ALTER TABLE schedules
  ADD FOREIGN KEY (schedule_type_id) REFERENCES schedule_types(id);

DROP TABLE IF EXISTS thesis_defenses CASCADE;
CREATE TABLE thesis_defenses(
  id SERIAL PRIMARY KEY NOT NULL,
  parent_id INTEGER NOT NULL,
  docu_link VARCHAR(10000) NOT NULL
);

ALTER TABLE IF EXISTS thesis_defenses
  ADD FOREIGN KEY (parent_id) REFERENCES schedules(id);

DROP TABLE IF EXISTS title_defenses CASCADE;
CREATE TABLE title_defenses(
  id SERIAL PRIMARY KEY NOT NULL,
  parent_id INTEGER NOT NULL,
  title1 VARCHAR(10000),
  docu_link1 VARCHAR(10000),
  title2 VARCHAR(10000),
  docu_link2 VARCHAR(10000),
  title3 VARCHAR(10000),
  docu_link3 VARCHAR(10000),
  title1_remark BOOLEAN DEFAULT FALSE,
  title2_remark BOOLEAN DEFAULT FALSE,
  title3_remark BOOLEAN DEFAULT FALSE
);

ALTER TABLE IF EXISTS title_defenses
  ADD FOREIGN KEY (parent_id) REFERENCES schedules(id);

DROP TABLE IF EXISTS schedule_panels CASCADE;
CREATE TABLE schedule_panels (
  panel_id INTEGER NOT NULL,
  schedule_id INTEGER NOT NULL,
  is_head BOOLEAN DEFAULT FALSE
);

ALTER TABLE IF EXISTS schedule_panels
  ADD FOREIGN KEY (panel_id) REFERENCES panelists(id),
  ADD FOREIGN KEY (schedule_id) REFERENCES schedules(id);

DROP TABLE IF EXISTS templates CASCADE;
CREATE TABLE templates(
  id SERIAL PRIMARY KEY NOT NULL,
  grading_type VARCHAR(150) NOT NULL,
  pbl_level VARCHAR(50) NOT NULL,
  sheet_title VARCHAR(150) NOT NULL,
  is_cs BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS defense_templates CASCADE;
CREATE TABLE defense_templates (
  template_id INTEGER NOT NULL,
  schedule_id INTEGER NOT NULL
);

ALTER TABLE IF EXISTS defense_templates
  ADD FOREIGN KEY (template_id) REFERENCES templates(id),
  ADD FOREIGN KEY (schedule_id) REFERENCES schedules(id);

DROP TABLE IF EXISTS lu_school_terms CASCADE;
CREATE TABLE lu_school_terms (
  term INTEGER PRIMARY KEY NOT NULL
);

DROP TABLE IF EXISTS lu_school_years CASCADE;
CREATE TABLE lu_school_years (
  school_year INTEGER PRIMARY KEY NOT NULL
);

DROP TABLE IF EXISTS s_school_year_terms CASCADE;
CREATE TABLE s_school_year_terms (
  id SERIAL PRIMARY KEY NOT NULL,
  term INTEGER NOT NULL,
  school_year INTEGER NOT NULL
);

ALTER TABLE IF EXISTS s_school_year_terms
  ADD FOREIGN KEY (term) REFERENCES lu_school_terms(term),
  ADD FOREIGN KEY (school_year) REFERENCES lu_school_years(school_year);

DROP TABLE IF EXISTS rubrics CASCADE;
CREATE TABLE rubrics (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(150) NOT NULL,
  rate1 VARCHAR(150),
  rate2 VARCHAR(150),
  rate3 VARCHAR(150),
  rate4 VARCHAR(150),
  rate5 VARCHAR(150),
  weight DOUBLE PRECISION NOT NULL,
  rubric_type VARCHAR(150) NOT NULL,
  pbl_level VARCHAR(150) NOT NULL,
  category VARCHAR(150) NOT NULL
);

DROP TABLE IF EXISTS template_rubrics CASCADE;
CREATE TABLE template_rubrics (
  template_id INTEGER NOT NULL,
  rubric_id INTEGER NOT NULL
);

ALTER TABLE IF EXISTS template_rubrics
  ADD FOREIGN KEY (template_id) REFERENCES templates(id),
  ADD FOREIGN KEY (rubric_id) REFERENCES rubrics(id);

DROP TABLE IF EXISTS scoresheets CASCADE;
CREATE TABLE scoresheets (
  id SERIAL PRIMARY KEY NOT NULL,
  comment VARCHAR(100000) NOT NULL DEFAULT 'None',
  panelist_id INTEGER NOT NULL,
  schedule_id INTEGER NOT NULL
);

ALTER TABLE IF EXISTS scoresheets
  ADD FOREIGN KEY (panelist_id) REFERENCES panelists(id),
  ADD FOREIGN KEY (schedule_id) REFERENCES schedules(id);

DROP TABLE IF EXISTS group_scores CASCADE;
CREATE TABLE group_scores (
  id SERIAL PRIMARY KEY NOT NULL,
  rubric_id INTEGER NOT NULL,
  scoresheet_id INTEGER NOT NULL,
  score INTEGER NOT NULL
);

ALTER TABLE IF EXISTS group_scores
  ADD FOREIGN KEY (rubric_id) REFERENCES rubrics(id),
  ADD FOREIGN KEY (scoresheet_id) REFERENCES scoresheets(id);

DROP TABLE IF EXISTS indiv_scores CASCADE;
CREATE TABLE indiv_scores (
  id SERIAL PRIMARY KEY NOT NULL,
  rubric_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  scoresheet_id INTEGER NOT NULL,
  score INTEGER NOT NULL
);

ALTER TABLE IF EXISTS indiv_scores
  ADD FOREIGN KEY (rubric_id) REFERENCES rubrics(id),
  ADD FOREIGN KEY (student_id) REFERENCES students(id),
  ADD FOREIGN KEY (scoresheet_id) REFERENCES scoresheets(id);
