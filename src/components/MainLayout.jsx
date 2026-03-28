const MainLayout = ({ children }) => {

    return (
        <>
            <div className="w-full bg-[#f4f4f6]">
                
                <div className="max-w-[1250px] mx-auto px-4">
                    {children}
                </div>
                
            </div>
        </>
    )
    
}

export default MainLayout
