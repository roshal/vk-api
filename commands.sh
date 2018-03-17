:; tail -n +2 commands.sh; exit
#
git add --all
git commit --allow-empty --allow-empty-message -m ''
git commit --allow-empty --allow-empty-message -m '' --amend
git push heroku master
git push origin master
#
git all && git cam && git pom -f
git all && git com && git pom
#
heroku config:add key=value
heroku local
heroku local worker
heroku logs
heroku open
heroku pg:backups:download
heroku pg:backups:restore 'https://roshal-postgresql.herokuapp.com/latest.dump'
heroku pg:psql < sql/table.sql
heroku ps
heroku run bash
#
yarn install
yarn upgrade -LC
