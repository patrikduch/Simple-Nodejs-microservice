# Heroku

heroku git:remote -a nodejs-microservice
heroku container:release web -a nodejs-microservice



# Heroku & Docker
heroku container:login = Login to Heroku’s container registry.

heroku container:push web heroku container:release web
