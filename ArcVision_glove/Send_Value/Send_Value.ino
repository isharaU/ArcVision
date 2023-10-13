#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "Ishara";
const char* password = "";

ESP8266WebServer server(80);

String userInput = ""; // Variable to store user input

void setup() {
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Handle user input
  server.on("/input", HTTP_GET, []() {
    userInput = server.arg("data");
    server.send(200, "text/plain", "User input received: " + userInput);
  });

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient(); // Handle incoming web requests
  int sensorValue = 6;
  // Send the value to the server
  server.send(200, "text/plain", "Sensor Value: " + String(sensorValue));
}
