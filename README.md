# Heroku

heroku git:remote -a nodejs-microservice

heroku container:release web -a nodejs-microservice



# Heroku & Docker
heroku container:login = Login to Heroku’s container registry.

heroku container:push web heroku container:release web

https://medium.com/better-programming/how-to-containerize-and-deploy-apps-with-docker-and-heroku-b1c49e5bc070
