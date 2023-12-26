# ArcVision
## Obstacle Detection Device for People with Vision Impairments
_Arc Vision empowers visually impaired individuals through two core components: the Arc Vision App and Glove. The app, built with React Native Expo, connects seamlessly to the Glove, equipped with sonar sensors and IR sensors. With Wi-Fi connectivity and customizable settings, Arc Vision enhances independence and security for the visually impaired._
  
## Overview

### Hardware

The hardware component comprises a glove embedded with a sonar sensor and an IR sensor, both controlled by the ESP8266 microcontroller. The glove features a vibrating motor that activates when an obstacle is detected. The utilization of two sensors aims to minimize noise and enhance the accuracy of object detection.

### Software

The software component is built using React Native Expo. The ArcVision app establishes a connection with the glove (ESP8266) via WiFi. The app's home screen provides access to two main functionalities: Settings and Emergency. In the Settings section, users can set an emergency phone number. When the Emergency button is pressed, the app fetches the user's current location using the mobile phone's GPS and sends the coordinates to the specified emergency phone number via SMS.

## Getting Started

To use ArcVision, follow these steps:

1. **Hardware Setup:**
   - Wear the glove-like device on your hand.
   - Ensure a proper connection between the glove and the app via WiFi.

2. **Software Usage:**
   - Open the ArcVision app.
   - Navigate through the home screen with two main buttons: Settings and Emergency.

3. **Settings:**
   - Set an emergency phone number for quick access.

4. **Emergency:**
   - In case of an emergency, press the Emergency button to send your current location to the specified phone number via SMS.



## Key Features

1. **Seamless Connectivity**
   - The Arc Vision App initiates a Wi-Fi connection to the Arc Vision Glove, establishing a seamless link between the user and the wearable device.

2. **Real-time Obstacle Detection**
   - Equipped with sonar sensors and IR sensors, Arc Vision detects obstacles in real-time, giving users the assurance they need to navigate their surroundings confidently.

3. **Immediate Feedback**
   - Upon detecting obstacles, Arc Vision offers immediate feedback through a built-in vibrator that provides tactile alerts, enhancing user awareness.

4. **User-Friendly Design**
   - Compact and Portable: The Arc Vision Glove is designed for convenience, with a compact form factor measuring 20 to 30 cm long, making it easy to carry and handle.

Arc Vision is dedicated to revolutionizing the daily experiences of visually impaired individuals, allowing them to navigate the world with newfound independence and security.
_By providing reliable obstacle detection and immediate feedback, ArcVision empowers individuals with vision impairments to move independently, boosting their confidence and overall quality of life._

## Usability Survey Results
We conducted a usability survey involving medical and engineering students to gather insights into the effectiveness of ArcVision. Here are some key findings:

## Demo
#### IR sensor.
https://github.com/isharaU/ArcVision/assets/125251580/67810cfd-1d4c-4e08-9209-3853a0610246

#### ArcVision App
https://github.com/isharaU/ArcVision/assets/125251580/248dbd07-5b11-494c-a1f1-93be14cc4db1

#### Glove at final demonstrations
![glove](https://github.com/isharaU/ArcVision/assets/125251580/0624c6bf-4f9e-47bf-8e39-1b855f8a9a8c)


## Clone the Repository
#### To get started with ArcVision and explore the project's source code, follow these steps to clone the repository to your local development environment.
 1. **Fork the Repository** <br>
 _Before cloning, if you plan to make contributions or modifications, it's a good practice to fork the ArcVision repository to your GitHub account. This creates a copy of the project under your account._ <br>
Click the "Fork" button at the top right corner of the [ArcVision repository page.](https://github.com/isharaU/ArcVision)
 1. **Clone Your Forked Repository** <br>
_Once you have forked the project, you can clone your fork to your local machine using Git. Replace "your-username" with your GitHub user name._
```ruby
git clone https://github.com/isharaU/ArcVision.git
```
 3. **Access the Project Directory** <br>
_Move into the project directory._
```ruby
cd ArcVision
```
4. **Explore theCode** <br>
   _You now have access to the project's source code and files in your local environment. You can start exploring, making changes, or running the project as needed._

## Acknowledgments
#### ArcVision is made possible with the invaluable support of various tools, technologies, and the contributions of the open-source community. I extend my sincere gratitude to the following
+  **Arduino** <br>
_This project heavily relies on the Arduino platform for hardware control and interfacing. Arduino provides an accessible and versatile environment for building innovative solutions._
+  **React Native Expo** <br>
_React Native Expo is a fundamental element of the ArcVision project, acting as a robust framework for developing the mobile application. It provides a streamlined development environment, simplifying the creation of cross-platform apps for both iOS and Android. We extend our gratitude to the React Native Expo community for their contributions to the world of mobile app development._

## Contact
#### I appreciate your interest in ArcVision. If you have questions, suggestions, or would like to get involved in our project, please don't hesitate to reach out to me. I welcome your feedback and collaboration
+  **General Inquiries** <br>
_For general inquiries or to learn more about ArcVision, you can [contact me via email](mailto:uditha.20@cse.mrt.ac.lk)._
+  **Feedback and Contributions** <br>
 _Whether you're a developer, designer, or have insights to share, please feel free to open issues, submit pull requests, or reach out._

### References
- [eSight](https://www.esighteyewear.com/)
- [RNIB’s guide to wearable technology](https://www.rnib.org.uk/living-with-sight-loss/assistive-aids-and-technology/tech-support-and-information/wearable-technology-smart-glasses-and-head-mounted-cameras/)
- [Envision Smart Glasses](https://www.forbes.com/sites/gusalexiou/2021/01/28/envision-ai-glasses--a-game-changer-in-helping-blind-people-master-their-environment/)
- [Seeing AI App](https://news.microsoft.com/apac/2020/12/03/seeing-ai-empowers-people-who-are-blind-or-with-low-vision-for-everyday-life/)
- [A Deep Learning-Based Object Detection System for Blind People](https://link.springer.com/chapter/10.1007/978-981-16-1773-7_18)
- [How to calculate the distance between the camera and an object using Computer Vision?](https://ai.stackexchange.com/questions/25074/how-to-calculate-the-distance-between-the-camera-and-an-object-using-computer-vi)
