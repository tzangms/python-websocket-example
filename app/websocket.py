# coding: utf-8
import json

def handle_websocket(ws):
    while True:
        message = ws.receive()
        if message is None:
            break

        message = json.loads(message)

        ws.send(json.dumps({'output': message['output']}))
