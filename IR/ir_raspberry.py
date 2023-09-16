import RPi.GPIO as GPIO
import time

# set GPIO model and pin
GPIO.setmode(GPIO.BCM)
ir_pin = 17

# Setup the IR sensor pin as input
GPIO.setup(ir_pin, GPIO.IN)

try:
    while True:
        # read the ir sensor value
        ir_value = GPIO.input(ir_pin)
        
        # print the value
        if ir_value == 1:
            print("Vibrate")
        else:
            print("No obstacle")

except KeyboardInterrupt:
    print("Stopped by user")
    
finally:
    GPIO.cleanup()