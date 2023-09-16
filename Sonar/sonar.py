from gpiozero import DistanceSensor
import RPi.GPIO as GPIO
import time

# set GPIO mode
GPIO.setmode(GPIO.BCM)

# set GPIO pins
trig = 17
echo = 18
vibrate = 27

# setup vibrate as  output
GPIO.setup(vibrate, GPIO.OUT)

# create a distance sensor object
sensor = DistanceSensor(echo, trig)

try:
    while True:
        # read the distance value
        distance = sensor.distance * 100
        
        # output
        if distance >= 200:
            print("Clear Path")
            GPIO.output(vibrate, GPIO.LOW)
        if distance >= 100:
            print("Obstacle Detected")
            GPIO.output(vibrate, GPIO.LOW)  
        if distance >= 50:
            print("Danger")
            GPIO.output(vibrate, GPIO.LOW)                                    
        if ((distance < 30) and (distance > 0)):
            print("Obstacle detected")
            GPIO.output(vibrate, GPIO.HIGH)
        else:
            print("Error")
            GPIO.output(vibrate, GPIO.HIGH)
            
except KeyboardInterrupt:
    print("Stopped by user")

finally:
    GPIO.cleanup()