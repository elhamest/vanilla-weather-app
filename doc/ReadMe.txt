features in serach box:
1.If the user does not enter city name or only enters spaces, the weather API will not be called and an appropriate message will be displayed.
2. If the user has entered extra spaces at the beginning or end of the city name, it will be removed.
3. The name of the city is always capitalized in the first letter.
4. If the entered city name is not found, an API error is detected and an appropriate message is displayed.
5. For some cities 
response.data.weather[0].description;
is not defined, it is handled using 
response.data.weather.main;