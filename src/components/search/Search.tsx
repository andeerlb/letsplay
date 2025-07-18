import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import SearchIcon from "@assets/icons/search.svg";

interface SearchProps {
    onSearch: (text: string) => void;
    placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, placeholder }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text: string) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <SearchIcon style={styles.icon} width={24} height={24} color="#000" /> 
                <TextInput
                    style={styles.input}
                    placeholder={placeholder || "Buscar..."}
                    value={searchText}
                    onChangeText={handleSearchChange}
                    placeholderTextColor={"#888"} // Placeholder color
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "#000",
        fontFamily: "sans-serif",
        fontSize: 16,
        backgroundColor: '#f0f0f0',
    },
    icon: {
        marginRight: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10,
    },
});

export default Search;