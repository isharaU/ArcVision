#include <NewPing.h>

#define TRIGGER_PIN D2  // Define the trigger pin connected to NodeMCU (D2)
#define ECHO_PIN    D1  // Define the echo pin connected to NodeMCU (D1)
#define MAX_DISTANCE 200 // Maximum distance we want to measure (in centimeters). Adjust as needed.

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(115200); // Initialize serial communication
  
}

void loop() {
  delay(100); // Wait for a short moment to stabilize readings

  unsigned int distance = sonar.ping_cm(); // Send a ping and get the result in centimeters

  if (distance == 0) {
    Serial.println("Error: Measurement timeout.");
    Serial.println(distance);
  } else {
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");
  }

  delay(500); // Wait for a moment before taking another measurement
}
