import cv2
import numpy as np
import matplotlib.pyplot as plt

def drawRectangle(frame, bbox):
    p1 = (int(bbox[0]), int(bbox[1]))
    p2 = (int(bbox[0] + bbox[2]), int(bbox[1] + bbox[3]))
    cv2.rectangle(frame, p1, p2, (255, 0, 0), 2, 1)


def displayRectangle(frame, bbox):
    plt.figure(figsize=(20, 10))
    frameCopy = frame.copy()
    drawRectangle(frameCopy, bbox)
    frameCopy = cv2.cvtColor(frameCopy, cv2.COLOR_RGB2BGR)
    plt.imshow(frameCopy)
    plt.axis("off")


def drawText(frame, txt, location, color=(50, 170, 50)):
    cv2.putText(frame, txt, location, cv2.FONT_HERSHEY_SIMPLEX, 1, color, 3)

# create a tacker instnce
tracker = cv2.legacy.TrackerMOSSE_create()

# read the camera stream
cap = cv2.VideoCapture(0)
ok,frame = cap.read()

width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

# define bounding box
bbox = (int(width/2 - 100), int(height/2 - 100), 200, 200)
displayRectangle(frame, bbox)

# initialize tracker
ok = tracker.init(frame, bbox)

# loop over the frames
while True:
    # read the current frame
    ok, frame = cap.read()

    # update tracker
    ok, bbox = tracker.update(frame)

    # draw bounding box
    if ok:
        drawRectangle(frame, bbox)
    else:
        drawText(frame, "Tracking failure detected", (80, 50))

    # display the frame
    cv2.imshow("Tracking", frame)

    # exit if ESC pressed
    k = cv2.waitKey(1) & 0xff
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()