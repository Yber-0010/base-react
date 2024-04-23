run:
	yarn run dev --port 5174 --mode dev

# create .env.dev
build:
	yarn run build --mode dev

#create .env.cert
buildc:
	yarn run build --mode cert

#create .env.pord
buildp:
	yarn run build --mode prod