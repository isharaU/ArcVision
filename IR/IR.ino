const int irSensorPin = D2; // Define the GPIO pin where the IR sensor is connected

void setup() {
  pinMode(irSensorPin, INPUT); // Set the IR sensor pin as an input
  pinMode(LED, OUTPUT);
  Serial.begin(115200); // Initialize serial communication
}

void loop() {
  int irSensorValue = digitalRead(irSensorPin); // Read the digital value from the IR sensor

  if (irSensorValue == HIGH) {
    Serial.println("IR sensor detected an object.");
  } else {
    Serial.println("IR sensor did not detect an object.");
  }

  delay(1000); // Delay for 1 second before taking the next reading
}
