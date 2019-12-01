import {gql} from "apollo-boost";


export const SELECTTEMP = gql`
    query selectTemp($deviceName:String!)
    {
        selectTemp(deviceName:$deviceName)
        {
            Temp
            createdAt,
                
        }
    }  

    
`;

export const REGISTERPET = gql`
     mutation registerPet($name:String!, $age:String!,$sex:String!, $species:String!, $weight:String!, $height:String!, $deviceName:String!){
       registerPet(
         name:$name,
         age:$age,
         sex:$sex,
         species:$species,
         weight:$weight,
         height:$height,
         deviceName:$deviceName
     )}
`;
