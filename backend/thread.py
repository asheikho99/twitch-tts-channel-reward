import logging
import threading
import time
import json

# Logging formatting
format = "%(asctime)s: %(message)s"
logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")

# Holds all incoming redemption requests from Twtich endpoint
redemptions_arr = [
    '{ "name":"John", "age":30, "city":"New York"}', '{ "name":"Smith", "age":19, "city":"Los Angeles"}'
]

class RequestProcessor:
    def __init__(self):
        self.isProcessing = False
        self.redemptions_arr = [
            '{ "name":"John", "age":30, "city":"New York"}', '{ "name":"Smith", "age":19, "city":"Los Angeles"}'
        ]

    def request_loop(self):
        while True:
            # logging.info("Waiting for new request...")
            if len(self.redemptions_arr) > 0 and not self.isProcessing:
                x = threading.Thread(target=self.process)
                x.start()
            time.sleep(1)

    def process(self):
        self.isProcessing = True
        logging.info('Processing request:')
        print(json.loads(self.redemptions_arr[0]))
        time.sleep(3)
        self.redemptions_arr.pop(0)
        logging.info('Completed!')
        self.isProcessing = False


processor = RequestProcessor()
processor.request_loop()