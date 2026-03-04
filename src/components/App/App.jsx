import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Configure routes in App.js [cite: 85]

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile"; // Import Profile component
import { Footer } from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal"; // Import new AddItemModal
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal"; // Import the new modal
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { getItems, addItem, deleteItem } from "../../utils/api"; // Import API functions

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]); // Remove default items, start with empty array [cite: 209, 210]
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  // Fetch Items from Mock Server [cite: 206, 208]
  useEffect(() => {
    getItems()
      .then((items) => setClothingItems(items))
      .catch(console.error);
  }, []);

  // Fetch Weather API
  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // Handle Add Item Submission [cite: 136, 137, 138]
  const handleAddItemSubmit = (item, resetForm) => {
    addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]); // New items should appear at the beginning of the list [cite: 138, 139]
        closeActiveModal();
        resetForm(); // Reset form fields [cite: 144, 145]
      })
      .catch(console.error);
  };

  // Handler to open the confirmation modal [cite: 169]
  const openConfirmationModal = () => {
    setActiveModal("confirm-delete");
  };

  // Handler to actually execute the deletion [cite: 170]
  const handleDeleteCard = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        const updatedItems = clothingItems.filter((item) => item._id !== selectedCard._id);
        setClothingItems(updatedItems);
        closeActiveModal(); 
        setSelectedCard({}); // Reset the state containing the card [cite: 171]
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          
          <Routes>
            <Route 
              path="/" 
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <Profile 
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              } 
            />
          </Routes>

          <Footer />
        </div>
        
        <AddItemModal 
          isOpen={activeModal === "add-garment"} 
          onAddItem={handleAddItemSubmit} 
          onCloseModal={closeActiveModal} 
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          onDeleteClick={openConfirmationModal} // Passed from App to open the confirmation modal [cite: 169]
        />

        {/* Add the new confirmation modal here */}
        <DeleteConfirmationModal 
          activeModal={activeModal}
          onClose={closeActiveModal}
          onConfirm={handleDeleteCard} // Passed from App to DeleteConfirmationModal [cite: 170]
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
