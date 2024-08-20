import { AntDesign, Feather, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome6, FontAwesome5} from "@expo/vector-icons";
// Importing Feather Icons in React Native


export const icons = {
    index: (props)=> <MaterialCommunityIcons name="music-clef-treble" size={26} {...props} />,
    news: (props)=> <Entypo name="newsletter" size={26} {...props} />,
    test: (props)=> <MaterialCommunityIcons name="music-clef-treble" size={26} {...props} />,
    settings: (props)=> <MaterialIcons name="admin-panel-settings" size={26} {...props} />,
    favorites: (props)=> <MaterialIcons name="favorite" size={22} color="black" {...props} />,
    fundraise: (props)=> <FontAwesome5 name="hands-helping" size={22} color="black" {...props} />,
    
}