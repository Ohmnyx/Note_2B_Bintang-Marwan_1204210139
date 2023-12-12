import { ArrowLeftIcon, Fab, FabIcon, FabLabel } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import react from "react";

const BackFAB = () => {
    return (
        <Fab rounded={"$xl"} size="lg" placement="top left" onPress={useNavigation().goBack} mt={"$7"}>
            <FabIcon as={ArrowLeftIcon} mr={"$7"} />
            <FabLabel fontWeight="Bold"> Kembali </FabLabel>
        </Fab>
    );
};

export default BackFAB;