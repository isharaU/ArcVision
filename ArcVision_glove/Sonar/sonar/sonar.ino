#include <NewPing.h>

#define TRIGGER_PIN D2  // Define the trigger pin connected to NodeMCU (D2)
#define ECHO_PIN    D1  // Define the echo pin connected to NodeMCU (D1)
#define MAX_DISTANCE 300 // Maximum distance we want to measure (in centimeters). Adjust as needed.
#define vibrate D3 // vibrator to inform objrects

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(115200); // Initialize serial communication
  pinMode(vibrate,OUTPUT);
  
}

void loop() {
  unsigned int distance = sonar.ping_cm(); // Send a ping and get the result in centimeters

  if (distance >= 200) {
    Serial.println("Clear Path");
    digitalWrite(vibrate,LOW);
  }
  if (distance >= 100) {
    Serial.println("Obstacle Detected");
    digitalWrite(vibrate,LOW);
  }
  if (distance >= 50) {
    Serial.println("Danger");
    digitalWrite(vibrate,LOW);
  }

  if (distance < 50 and distance > 0) {
    Serial.println("Danger");
    digitalWrite(vibrate,HIGH);
  }
  else {
    Serial.println("Error");
    digitalWrite(vibrate,HIGH);
  }

}