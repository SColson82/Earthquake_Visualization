# Leaflet-Challenge ---> Profiling Earthquake Data on Behalf of the US Geological Survey

For this assignment I have been tasked with making a logical visualization of earthquake data gathered by the US Geological Survey in hopes of both educating the public and securing additional funding. 

## Data:
First, to draw on the available data I made a request to [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) for a Json document containing the information that I wish to visualize. 

(USGS JSON DATA)
![image](https://user-images.githubusercontent.com/83737584/134792065-903257e6-56d2-4617-b653-d3f40a159b7d.png)

<hr>

## Features:
Once this was completed, a basic map was formed using Leaflet. The data represented on the final production of the page is for the past month. The markers added to the map represent the magnitude and depth of each earthquake event with the color scale from yellow to crimson indicating a 0 to 9 magnitude (higher magnitudes indicate higher destruction capability) and the radius of each marker indicates the depth (a larger radius indicates a greater depth). Additionally, each event is represented with a popup maker which will give the time, date, location, and magnitude of the earthquake.

<hr>

(7.3 MAGNITUDE EARTHQUAKE OCCURRED IN THE VANUATU REGION ON OCTOBER 2, 2021 AT 1:29:18 CENTRAL DAYLIGHT TIME)
![image](https://user-images.githubusercontent.com/83737584/135775619-a30b6819-91db-47d0-b45e-33c67e9d00af.png)

<hr>

## Map Options:
There are a variety of maps available including Streetmap, Topographic, Dark, and Satellite- all with the ability to view with an overlay of earthquake data, faultlines, both, or neither. 

<hr>

(STREETMAP)
![image](https://user-images.githubusercontent.com/83737584/135775986-58d56929-907b-44ba-8613-dc7a11eee877.png)

<hr>

(TOPOGRAPHIC)
![image](https://user-images.githubusercontent.com/83737584/135776180-a1f02474-8848-4052-bd0b-1d1d1e38d41f.png)

<hr>

(DARK)
![image](https://user-images.githubusercontent.com/83737584/135776386-c64eb85e-f3a8-4492-94f5-68352fe043f8.png)

<hr>

## Here's The Important Part:
Through exploration of the data, I was able to show the earthquake activity over the last day, week, and month. As you can see, the faultline around the North Pacific Ocean which runs through New Zealand, the Japanese archipelago, Alaska, and the western coast of North and South America has been very active over the last month with a large amount of minor earthquakes on the west coast of North and South Americas but more major events in New Zealand and the Japanese archipelago. 

<hr>

(ONE DAY OF DATA FROM APPROXIMATELY 7 PM OCTOBER 2 TO 7 PM OCTOBER 3, 2021, CST)
![image](https://user-images.githubusercontent.com/83737584/135775200-4340d380-e0b7-4517-a304-4fc2d6872fa8.png)

(ONE WEEK OF DATA ENDING AT APPROXIMATELY OCTOBER 3, 2021 AT 7 PM CST)
![image](https://user-images.githubusercontent.com/83737584/135774628-47b6334e-0661-4157-997b-b323e122555b.png)

(ONE MONTH OF DATA ENDING AT APPROXIMATELY OCTOBER 3, 2021 AT 7 PM CST)
![image](https://user-images.githubusercontent.com/83737584/135775156-0710d473-bdca-4298-8532-acb10467fbc3.png)

## Check It Out for Yourself:
https://scolson82.github.io/Leaflet-Challenge/
<hr>
Contact:

* https://www.linkedin.com/in/sharon-colson-515222210/
* sharon.colson@gmail.com


