import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffd700',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginRight: 10,
      backgroundColor: 'lightyellow',
    },
    searchIconContainer: {
      width: 40,
      height: 40,
      backgroundColor: '#FF6F00',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    filterContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    filterButton: {
      marginRight: 10,
      marginBottom: 10,
    }
  });

export default styles;