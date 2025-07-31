import SearchIcon from "@assets/icons/search.svg";
import { useTheme } from "@hooks/useTheme";
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
        <View style={[styles.container, {
            backgroundColor: theme.secondaryColors.background,
            borderColor: theme.colors.border
        }]}>
            <SearchIcon style={styles.icon} width={24} height={24} color={theme.secondaryColors.text} />
            <TextInput
                style={[styles.input, { color: theme.colors.text }]}
                placeholder={placeholder}
                value={searchText}
                onChangeText={handleSearchChange}
                placeholderTextColor={theme.secondaryColors.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingLeft: 10,
        maxWidth: '100%',
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        height: 50,
        paddingRight: 15,
        fontFamily: "sans-serif",
        fontSize: 15,
    },
    icon: {
        marginRight: 8,
    },
});

export default Search;