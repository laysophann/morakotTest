import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { getAllCountries } from "../service/api";
import CountrySearch from "../utils/CountrySearch";
import RegionFilterButton from "../utils/RegionFilterButton";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterByRegion, setFilterByRegion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryData = await getAllCountries();
        setCountries(countryData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((country) =>
      filterByRegion ? country.region === filterByRegion : true
    );

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <View style={styles.container}>
      <CountrySearch onSearch={setSearchText} />
      <Text style={styles.header}>List of Countries</Text>
      <View style={styles.filterButtons}>
        {regions.map((region) => (
          <RegionFilterButton
            key={region}
            onFilter={setFilterByRegion}
            region={region}
          />
        ))}
        <RegionFilterButton
          key="null"
          onFilter={setFilterByRegion}
          region={null}
        />
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : filteredCountries.length === 0 ? (
        <Text style={styles.noResultsText}>Result not found</Text>
      ) : (
        <FlatList
          data={filteredCountries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.countryItem}>
              <Image
                source={{ uri: item.flags.png }}
                style={styles.flagImage}
              />
              <View style={styles.countryInfo}>
                <Text style={styles.countryName}>{item.name.common}</Text>
                <Text style={styles.countryRegion}>Region: {item.region}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  countryItem: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  flagImage: {
    width: 50,
    height: 30,
    marginRight: 16,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
  },
  countryRegion: {
    fontSize: 14,
    color: "gray",
  },
  noResultsText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 16,
  },
});

export default CountryList;
