# 🌱 Smart Krishi Saathi

### A Smart Agricultural Advisory and Farmer Support Platform

## 1. About the Project

**Smart Krishi Saathi** is a web-based agricultural support platform designed to help farmers make informed decisions about crop cultivation, market prices, weather conditions, crop processing, and selling their produce.

The platform provides crop recommendations, sample market prices, weather information, profit calculations, and other useful farming tools through a simple, user-friendly interface.

The first version is a prototype that uses predefined recommendations and sample data. It is designed to work without paid APIs or a complex backend.

## 2. Objectives

* Provide farmers with basic crop cultivation guidance.
* Help farmers understand sample mandi prices.
* Display weather information and crop-risk alerts.
* Calculate estimated farming and processing profits.
* Help farmers explore crop-selling and processing opportunities.
* Provide a simple, mobile-friendly interface.
* Support offline access to important features.

## 3. Main Features

| Feature               | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| Crop Advisory         | Predefined recommendations for crops, irrigation, fertilizers, pests, and harvesting. |
| Crop Doctor           | Upload crop images and explore the prototype's demo diagnosis feature.                |
| Weather Dashboard     | Displays sample weather information and crop-risk alerts.                             |
| Mandi Prices          | Shows sample market prices with clear demo labels.                                    |
| Crop Calendar         | Helps farmers organize farming activities and reminders.                              |
| Profit Calculator     | Estimates profit using crop quantity, selling price, and costs.                       |
| Crop Processing       | Helps farmers explore possible crop-processing opportunities.                         |
| Sell Produce          | Provides a prototype for exploring buyers and selling options.                        |
| Storage and Transport | Helps farmers explore storage and transportation options.                             |
| Soil Records          | Allows farmers to maintain basic soil information.                                    |
| Government Schemes    | Provides a directory of agricultural schemes.                                         |
| Expert Help           | Offers a prototype for submitting questions or requesting assistance.                 |
| Offline Support       | Supports access to cached pages and locally saved data.                               |
| Admin Dashboard       | Provides an interface for managing prototype information.                             |

## 4. Technologies Used

* **HTML5:** Website structure.
* **CSS3:** Styling and responsive design.
* **JavaScript:** Interactive features and calculations.
* **LocalStorage:** Saving selected information in the browser.
* **JSON / JavaScript data:** Storing predefined recommendations and sample data.
* **Service Worker:** Supporting offline access.
* **Firebase (optional):** Authentication, database, and file storage when configured.

## 5. Sample Data and Prototype Limitations

This prototype uses predefined agricultural recommendations and sample weather and market-price data.

**Important notices:**

* Market prices are for demonstration only and are not current mandi rates.
* Weather information is simulated and is not live.
* Crop Doctor diagnosis is a demonstration, not a real AI diagnosis.
* Profit calculations are estimates and do not guarantee actual earnings.
* Agricultural recommendations should be verified with local agricultural experts.

Live weather, verified market prices, and real AI services can be integrated in future versions.

## 6. Installation and Setup

### Requirements

* A computer with Windows, Linux, or macOS.
* A modern web browser such as Chrome, Firefox, or Edge.
* Visual Studio Code (recommended).
* A local development server.

### Steps to Run the Project

**Step 1: Extract the project**

Extract the Smart Krishi Saathi ZIP file into a folder.

**Step 2: Open the project**

Open the extracted folder in Visual Studio Code.

**Step 3: Start a local server**

If you have the Live Server extension in VS Code:

1. Open the project's main HTML file.
2. Right-click the file.
3. Select **Open with Live Server**.
4. The website will open in your browser.

Alternatively, if the project has a suitable Python setup, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Make sure you serve the folder containing the website's main HTML file.

## 7. Offline Support

The project uses a service worker and browser storage to support offline functionality.

To test offline support:

1. Open the website using localhost.
2. Load the website while connected to the internet.
3. Open the browser's developer tools.
4. Select the Network tab and enable Offline mode.
5. Refresh the website and test the available features.

Some features may require an internet connection if they depend on external services.

## 8. Project Structure

The exact folder structure may vary depending on the project version.

A typical structure is:

```text
Smart-Krishi-Saathi/
│
├── index.html
├── dashboard/
├── css/
├── js/
├── assets/
├── data/
├── icons/
├── manifest.json
├── service-worker.js
└── README.md
```

* `index.html`: Main website entry point.
* `dashboard/`: Dashboard and feature pages.
* `css/`: Stylesheets.
* `js/`: Application logic and interactive features.
* `assets/`: Images and other resources.
* `data/`: Predefined recommendations and sample datasets.
* `icons/`: App icons for installation.
* `manifest.json`: PWA configuration.
* `service-worker.js`: Offline caching.
* `README.md`: Project documentation.

## 9. Future Enhancements

* Integration with live weather services.
* Integration with verified mandi-price sources.
* Real AI-based crop disease detection.
* Secure cloud-based user accounts and data storage.
* SMS, email, and push notifications.
* More complete multilingual support.
* Improved offline synchronization.
* More verified agricultural recommendations.

## 10. Testing Checklist

* [ ] All pages open correctly.
* [ ] Navigation links work.
* [ ] Login and demo access work.
* [ ] Crop recommendations display correctly.
* [ ] Sample prices are clearly labelled.
* [ ] Sample weather is clearly labelled.
* [ ] Calculators produce correct results.
* [ ] Forms validate user input.
* [ ] Local data remains available after refreshing.
* [ ] Offline functionality works on localhost.
* [ ] The layout works on mobile and desktop.
* [ ] PWA icons and installation work.

## 11. Project Outcome

Smart Krishi Saathi demonstrates how a single web platform can bring together agricultural guidance, market information, weather examples, profit calculations, and farming support tools.

The prototype provides a foundation for future development and integration with real agricultural services.

---

**Project Name:** Smart Krishi Saathi
**Project Type:** Web-based Agricultural Support Platform
**Project Stage:** Functional Prototype
**Development Approach:** Free resources and sample data
