export const Page = ({title =  'Default home page', children}) => {
//     if (title){
//     return (
//       <>
//         <h1>{title}</h1>
//        {children}
//       </>
//     )
// }  
return(
    <>
    <header>This is header</header>
        {/* <h1>{title ? title : 'Default page title'} </h1> */}
        <h1>{title}</h1>
        <div>
        {children}
        </div>
    </>
)
}