#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "Ishara";
const char* password = "";

ESP8266WebServer server(80);

void setup() {
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Define a simple web page
  server.on("/", HTTP_GET, []() {
    // You can read your sensor values or any other data here
    int sensorValue = 6;

    // Send the value to the web client
    server.send(200, "text/plain", String(sensorValue));
  });

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
  Serial.println(WiFi.localIP());
  
}
