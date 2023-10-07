const int irSensorPin = D2; // Define the GPIO pin where the IR sensor is connected
const int vibrate = D1;

void setup() {
  pinMode(irSensorPin, INPUT); // Set the IR sensor pin as an input
  pinMode(vibrate, OUTPUT);
  Serial.begin(115200); // Initialize serial communication
}

void loop() {
  int irSensorValue = digitalRead(irSensorPin); // Read the digital value from the IR sensor

  if (irSensorValue == LOW) {
    Serial.println("IR sensor detected an object.");
    digitalWrite(vibrate,HIGH);
  } else {
    Serial.println("IR sensor did not detect an object.");
    digitalWrite(vibrate,LOW);
  }
}