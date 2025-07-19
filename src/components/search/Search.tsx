import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import SearchIcon from "@assets/icons/search.svg";
import { useTheme } from '@context/ThemeContext';

interface SearchProps {
    onSearch: (text: string) => void;
    placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, placeholder }) => {
    const { theme } = useTheme();
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text: string) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.secondary.background }]}>
            <SearchIcon style={styles.icon} width={24} height={24} color={theme.primary.text} />
            <TextInput
                style={[styles.input, { color: theme.primary.text }]}
                placeholder={placeholder}
                value={searchText}
                onChangeText={handleSearchChange}
                placeholderTextColor={theme.secondary.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        paddingLeft: 15,
        maxWidth: '100%',
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        paddingRight: 15,
        fontFamily: "sans-serif",
        fontSize: 16,
    },
    icon: {
        marginRight: 8,
    },
});

export default Search;