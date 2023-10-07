import React, { useEffect , useState} from "react"; 
import { StyleSheet, Text, View, Button, TextInput } from "react-native";


const ConnectWifi = () => {
    const [obstacle, setObstacle] = useState(null); 
    
    const fetcheValueFromNodeMcu = async () => {
        try {
            const response = await fetch(`http://112.568.698`);
            const data = await response.text();
            setObstacle(data);
        } catch (error) {
            console.log("Error fetching data from ArcVision",error);
        }
    };

    useEffect(() => {
        fetcheValueFromNodeMcu();
    }, []);

    return (
        <View style={styles.container}>
            <Text >Connect to the Glove{obstacle}</Text>
            <Button title="Refresh" onPress={fetcheValueFromNodeMcu} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#E6E6FA",
        alignItems: "center", 
        justifyContent: "center"
    }
});

export default ConnectWifi;

