import { AntDesign, Feather, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome6, FontAwesome5} from "@expo/vector-icons";
// Importing Feather Icons in React Native


export const icons = {
    hymn: (props)=> <MaterialCommunityIcons name="music-clef-treble" size={20} {...props} />,
    // index: (props)=> <MaterialCommunityIcons name="music-clef-treble" size={26} {...props} />,
    news: (props)=> <Entypo name="newsletter" size={17} {...props} />,
    settings: (props)=> <MaterialIcons name="admin-panel-settings" size={20} {...props} />,
    favorites: (props)=> <MaterialIcons name="favorite" size={17} color="black" {...props} />,
    fundraise: (props)=> <FontAwesome5 name="hands-helping" size={17} color="black" {...props} />,
    
}