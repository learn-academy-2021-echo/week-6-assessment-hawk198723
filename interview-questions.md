# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Use migration to add the foreign key. The name of the foreign key add_column_to_students. The foreign key should be on the Student model.

  Researched answer: A developer can update a database to include a foreign key by first creating a migration. The migration should reference the change that is being made (editing a column, updating a column, etc), and then add the code required to perform the change in the migration file. After the migration file has been updating to include the correct code, the user inputs rails db:migrate into the console to update the schema. The foreign key would be named student_id. The foreign key would be located on the Student model as a student can have only one cohort, but the Cohort model will have many students.

2. Which RESTful routes must always be passed params? Why?

  Your answer: create route ,because you have to put valid data in the table. show route, show the data by ID.

  Researched answer:

 The RESTful routes that always need to be passed params are `show`, `update`, `destroy`. The reason is because
 those methods would need to know what hashes the user wants to execute upon while `index` is everything and `create` is making something completely new.


3. Name three rails generator commands. What is created by each?

  Your answer: model--> database table, resource--> rails application, controller--> methods

  Researched answer: Generate model, generate controller, and generate resource.

   Model: Model generator does the least amount of work for you, but also creates the fewest number of files, etc. giving you more control over what is actually written.

   Controller: Controller.rb file with public methods for the basic CRUD functions, as well as two private methods, #set_user and #user_params

   Controller: The Rails controller creates ruby file, and it's the logical center of your application. It coordinates the interaction between the user, the views, and the model.  
   Resource:

DF: rails g migration: Migrations are a feature of Active Record that allows you to evolve your database schema over time. 
  Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables.

  rails g model: A Rails Model is a Ruby class that can add database records (think of whole rows in an Excel table), 
  find particular data you're looking for, update that data, or remove data.

  rails g controller: The Rails controller is the logical center of your application. 
  It coordinates the interaction between the user, the views, and the model. The controller 
  is also a home to a number of important ancillary services. It is responsible for routing external requests to internal actions.


4. Consider the Rails routes below. What is the name of the controller method that would be 
called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students  --> index method --> display a list of all the students  -->def index - returns all the entries in the students table      

action: "POST"   route: /students --> create method  --> create a new student --> def create- create a new instance in the BD table students

action: "GET"    route: /students/new --> new method --> return an HTML form for creating a new student return a form that we will use to create a student

action: "GET"    route: /students/2 --> show method --> display a specific student by ID:2 - return an instance of the students table with the ID of 2

action: "GET"    route: /students/2/edit --> edit method -->  return an HTML form for editing ID:2 student --return a form where a user can edit the information of student ID 2

action: "PATCH"  route: /students/2 --> update method -->  update a specific student by ID: 2 --update the instance of student table where ID =2

action: "DELETE" route: /students/2 --> destroy method -->  deletes a specific student by ID: 2 -- 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.As a user, I can see all the to-do-list titles listed on the home page of the application.
2.As a user, I can click on the title of my to-do-list and be routed to a page where I see the title and content of the to-do-list post I selected.
3.As a user, I can navigate from the show page back to the home page.
4.As a user, I see a form where I can create a new to-do-list post.
5.As a user, I can click a button that will take me from the home page to a page where I can create a to-do-list post.
6.As a user, I can navigate from the form back to the home page.
7.As a user, I can click a button that will submit my to-do-list post to the database.
8.As a user, when I submit my post, I am redirected to the home page.
9.As a user, I can delete my to-do-list post.
10.As a user, I can update my to-do-list post.
