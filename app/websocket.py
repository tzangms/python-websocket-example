# coding: utf-8
import json

def handle_websocket(ws):
    while True:
        message = ws.receive()
        if message is None:
            ws.send(json.dumps({'output': 'sfd'}))
            #break
        else:
            message = json.loads(message)

            r  = "I have received this message from you : %s" % message
            r += "<br>Glad to be your webserver."
            ws.send(json.dumps({'output': r}))
