# dev, cert, prod (eg => MODE=dev ).
MODE=dev

run:
	bun run dev --port 5174 --mode ${MODE}

# create .env.dev
build:
	bun run build --mode ${MODE}

#create .env.cert
buildc:
	bun run build --mode cert

#create .env.prod
buildp:
	bun run build --mode prod