import React, {useState, useEffect, useMemo} from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import style from "./Map.module.scss";

type LatLngLiteral = google.maps.LatLngLiteral;

const Map = () => {
    const [pins, setPins] = useState<LatLngLiteral[]>([]);
    const [currentPin, setCurrentPin] = useState<LatLngLiteral | null>(null);
    const [message, setMessage] = useState<string>("");
    const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCcMxkTm1oDjM_AkRxf0f-Jgd_d86nq1J0",
    });

    const center = {
        lat: 43.24417807387171,
        lng: 76.85739059645189
    };

    const options = useMemo(
        () => ({
            disableDefaultUI: true,
            clickableIcons: false,
        }),
        []
    );

    useEffect(() => {
        // Fetch pins when the component mounts
        fetchPins();
    }, []);

    const fetchPins = async () => {
        try {
            const response = await fetch('http://localhost:8080/mapped/api')
            const pinsData = await response.json();
            setPins(pinsData);
        } catch (error) {
            console.error('Error fetching pins:', error);
        }
    };

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const newPin = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };

        setPins((prevPins) => [...prevPins, newPin]);
        setCurrentPin(newPin);
        setInfoWindowOpen(true);
        setMessage(""); // Reset the message when a new pin is clicked
    };

    const handleInfoWindowClose = () => {
        setInfoWindowOpen(false);
        if (!currentPin)
            setMessage("");
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSaveMessage = async () => {
        try {
            const response = await fetch('http://localhost:8080/mapped/savePin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latitude: currentPin?.lat,
                    longitude: currentPin?.lng,
                    message: message,
                }),
            });

            if (response.status === 201) {
                console.log('Pin saved successfully');
                // Fetch updated list of pins after saving
                fetchPins();
            } else {
                console.error('Failed to save pin');
            }
        } catch (error) {
            console.error('Error saving pin:', error);
        } finally {
            setInfoWindowOpen(false);
            setMessage("");
        }
    };

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={style.app}>
            <GoogleMap
                mapContainerClassName={style.mapContainer}
                center={center}
                zoom={10}
                onClick={handleMapClick}
            >
                {pins && pins.map((pin, index) => (
                    <Marker
                        key={index}
                        position={pin}
                        onClick={() => {
                            setCurrentPin(pin);
                            setInfoWindowOpen(true);
                        }}
                    />
                ))}
                {currentPin && (
                    <Marker
                        position={currentPin}
                        onClick={() => {
                            setCurrentPin(currentPin);
                            setInfoWindowOpen(true);
                        }}
                    />
                )}
                {infoWindowOpen && currentPin && (
                    <InfoWindow
                        position={currentPin}
                        onCloseClick={handleInfoWindowClose}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -30),
                            maxWidth: 200,
                        }}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Leave a message..."
                                value={message}
                                onChange={handleInputChange}
                                style={{ color: "black" }}
                            />
                            <button onClick={handleSaveMessage}>Save Message</button>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;
