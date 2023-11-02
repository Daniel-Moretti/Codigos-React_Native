import { ActivityIndicator, Text, View } from "react-native"
import { ContainerLoading } from "./styles"

function LoadingScreen(){

    return(
        <ContainerLoading >
            <ActivityIndicator size="large" color="red"/>
            <Text >Carregando...</Text>
        </ContainerLoading>
    )
}

export default LoadingScreen