
FROM golang:1.22.6-alpine3.20 AS builder

WORKDIR /app

RUN go mod init hello && \
    go mod download

COPY ./hello.go /app

RUN CGO_ENABLED=0 GOOS=linux go build -o hello


FROM scratch
WORKDIR /app
COPY --from=builder /app/hello .
CMD ["./hello"]