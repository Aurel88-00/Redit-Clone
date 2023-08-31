import { FC } from "react";

type GenericLoaderProps = {
    componentName : string
}

export const GenericLoader : FC<GenericLoaderProps> = ({componentName}) => {
   return (
    <>
     <div>
        <div>{componentName} fetching...</div>
     </div>
    </>
   )
};