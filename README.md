
# build data base - uses sqlite3 db.sqlite3
python manage.py migrate

# create superuser
python manage.py createsuperuser

# all post endpoints are csrf exempt

# login - GET
curl -u marc:flamingred localhost:8000/users/
[{"id":1,"username":"marc","password":"pbkdf2_sha256$36000$3sRlAchJDpJJ$KCYV7/tfXrVQlK0U+vNXM7uUgF/HA63UtPnZzGpOtrs=","email":"marc@fogtest.com"}]

# register - POST
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz", "email": "a@c.d"}' -v http://localhost:8000/users/

{"id":2,"username":"xyz","password":"xyz","email":"a@c.d"}

/users create or get a list of all users
/user return authenticated user as [0] in list of users, use for login

# update user
curl -H "Content-Type: application/json" -u marc:flamingred -X PUT -d '{"first_name": "firsty"}' -v http://localhost:8000/user-update/2/
Modifies user pk=2 not marc. Acts as a PATCH method.

# applying to new college
curl -X POST -d '{"college_name": "collllll"}' -u marc:flamingred localhost:8000/colleges/


# get list of colleges
curl -u marc:flamingred localhost:8000/colleges/
[{"college":{"id":1,"name":"collllll"},"user":{"id":1,"username":"marc",
"first_name":"Marc","last_name":"Condon",
"password":"pbkdf2_sha256$36000$3sRlAchJDpJJ$KCYV7/tfXrVQlK0U+vNXM7uUgF/HA63UtPnZzGpOtrs=","email":"marc@fogtest.com"}}]

# get application (college) by id
curl -u marc:flamingred localhost:8000/college-update/1/
[{"college":{"id":1,"name":"collllll"},"user":{"id":1,"username":"marc",
"first_name":"Marc","last_name":"Condon",
"password":"pbkdf2_sha256$36000$3sRlAchJDpJJ$KCYV7/tfXrVQlK0U+vNXM7uUgF/HA63UtPnZzGpOtrs=","email":"marc@fogtest.com"}}]
-u marc:flamingred

Backend Django/Sqlite3 port 8000
cd sixup
pip install -r requirements.txt
python manage.py runserver

Frontend Angular port 9000
cd sixup/sixup-ng
npm install
bower install
grunt serve
