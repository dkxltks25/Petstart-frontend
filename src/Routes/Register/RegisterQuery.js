import {gql} from "apollo-boost";


export const myPet = gql`
      {
           myPets{
               id,
        name,
        age,
        sex,
        weight,
        height,
        species,
        device,
        createdAt,
        updatedAt
          }
        
     }
`;

export const REGISTERPET = gql`
     mutation registerPet($name:String!, $age:String!,$sex:String!, $species:String!, $weight:String!, $height:String!, $device:String!){
       registerPet(
         name:$name,
         age:$age,
         sex:$sex,
         species:$species,
         weight:$weight,
         height:$height,
         device:$device
     )}
`;