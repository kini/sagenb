import os
from tornado import web
from sockjs.tornado import SockJSRouter, SockJSConnection

class HelloHandler(web.RequestHandler):
     def get(self):
         self.render(os.path.join("html", "hello.html"))

class ShellConnection(SockJSConnection):
     def on_message(self, msg):
         print msg
         self.send(msg)
        
class IOPubConnection(SockJSConnection):
     def on_message(self, msg):
         print msg
         self.send(msg)
