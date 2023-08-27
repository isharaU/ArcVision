import cv2
import numpy as np
import matplotlib.pyplot as plt

'''The steps for performing infernece using a DNN model are summarized below: 
     1. Load the model and input image into memory.
     2. Detect objects using a forward pass through the network.
     3. Display the detected objects with bounding boxes and class labels.'''
     
model_file = 'frozen_inference_graph.pb'
config_file = 'ssd_mobilenet_v2_coco_2018_03_29.pbtxt'

# read the tensorflow network
net = cv2.dnn.readNetFromTensorflow(model_file, config_file)

def detect_objects(net,im,dim = 300):
    # create a blob
    blob = cv2.dnn.blobFromImage(im,1.0, size = (dim,dim),mean = (0,0,0), swapRB = True , crop = False) 
    # set the input
    net.setInput(blob)
    # run forward pass to compute output of the layer with name detection_out
    objects = net.forward()
    return objects

def display_text(im,text,x,y):
    # size
    text_size = cv2.getTextSize(text, Font_face, Font_scale, Thickness)[0]
    dim = text_size[0] 
    baseline = text_size[1]
    
    # use text size to create a block rectangle
    cv2.rectangle(im,(x, y - dim[1] - baseline),(x + dim[0], y + baseline),(0, 0, 0),cv2.FILLED)
    
    # display text inside the rectangle
    cv2.putText(im,text,(x, y - 5),Font_face,Font_scale,(0, 255, 255),Thickness,cv2.LINE_AA)    

def display_objects(im,objects,threshold = 0.25):
    rows = im.shape[0]
    cols = im.shape[1]
    
    # for every detected object
    for i in range(objects.shape[2]):
        # find the class and confidence
        classID = int(objects[0,0,i,1])
        score = float(objects[0,0,i,2])
        
        # recover original cordinates
        x = int(objects[0,0,i,3] * cols)
        y = int(objects[0,0,i,4] * rows)
        w = int(objects[0,0,i,5] * cols - x)
        h = int(objects[0,0,i,6] * rows - y)
        
        # discard objects with low confidence
        if score > threshold:
            # display the class label and confidence
            label = '{}:{:.2f}'.format(labels[classID],score)
            display_text(im,label,x,y)
            
        # Check if the detection is of good quality
        if score > threshold:
            display_text(im, "{}".format(labels[classID]), x, y)
            cv2.rectangle(im, (x, y), (x + w, y + h), (255, 255, 255), 2)

        # convert image to RGB
        mp_image = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)
        plt.figure(figsize=(10, 10))
        plt.imshow(mp_image)
        plt.show()

Font_face = cv2.FONT_HERSHEY_SIMPLEX
Font_scale = 0.7
Thickness = 1

with open('coco_class_labels.txt','rt') as f:
    labels = f.read().split('\n')
    
    
im = cv2.imread('soccer.jpg')
objects = detect_objects(net,im)
display_objects(im,objects)